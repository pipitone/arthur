var HxQs = [];

var Diagnoses = [ "AIDS", "allergies", "Alzheimer's disease", "anxiety disorders", "arthritis", "asthma", "astigmatism", "autoimmune diseases", "benign prostate hyperplasia (BPH)", "bipolar disorder (manic-depressive)", "brain cancer", "breast cancer", "cancer", "candidiasis", "cataracts", "celiac disease", "cervical cancer", "chicken pox", "chlamydia", "chronic fatigue syndrome (CFS)", "chronic illness", "cold sores", "colon cancer", "constipation", "common cold", "COPD", "cough", "Crohn's disease", "cystic fibrosis", "dementia", "diabetes", "diarrhea", "depression", "eczema", "endometriosis", "eye disorders", "fibroids", "fibromyalgia", "flu (influenza)", "food poisoning", "Gallstones", "genital herpes", "gonorrhea", "Graves' disease", "Hashimoto's thyroiditis", "hay fever", "headache", "heart disease", "hemochromatosis", "hepatitis", "herpes", "high cholesterol", "HIV", "Hodgkin's disease", "HPV (human papilloma virus)", "hypertension", "impotence", "insomnia", "irritable bowel syndrome", "jaundice", "kidney disease", "lactose intolerance", "leukemia", "liver cancer", "liver disease", "lung cancer", "lupus", "Lyme disease", "lymphoma", "meningitis", "meningococcal disease", "menopause", "mental illness", "myopia (short-sightedness)", "migraine", "multiple sclerosis", "muscular dystrophy", "narcolepsy", "Non-Hodgkin's lymphoma", "obesity", "osteoporosis", "otitis media (middle ear infection)", "ovarian cancer", "overweight", "pain", "Parkinson's disease", "pelvic inflammatory disease", "pertussis", "pregnancy", "premenstrual syndrome (PMS)", "prostate cancer", "prostate disorders", "Raynaud's Phenomenon", "SARS", "sexually transmitted diseases", "sleep disorders", "smoking", "stroke", "thrush", "thyroid disorders", "whooping cough ", ];

var Case; //TODO: remove this. Just here to satisfy the glitch syntax highlighter

function populate_hx_row(row, question, response) {
    row.append([
            '<td class="importance-' + response["importance"] + '"><span class="icon"></span></td>',
            '<td class="checkbox"><input type="checkbox"></input></td>',
            '<td class="question"><span>' + question + '</span></td>',
            '<td class="response"><span>' + response["response"] + '</span></td>',
            '<td class="feedback">' + response["feedback"] + '</td>',

    ]);
    return row;
}

function ddx_row(row){
  row.append([

  ])
}

$( document ).ready(function() {
    if (typeof Case == 'undefined') {
      //TODO: panic

    }

    // set up stem and title
    $("#title").text(Case.title);
    $("p.stem").text(Case.stem);


    /**
     * History
     */

    // build the history table
    var questions = Object.keys(Case.history).concat(HxQs);

    $( "#hx_autocomplete" ).autocomplete({
        delay: 0,
        autoFocus: true,
        source: questions,
        select: function( event, ui ) {
            var question = ui.item.value;

            // ignore partial questions
            if (questions.indexOf(question) == -1) {
                return;
            }

            // skip this question if it has already been asked
            if ($('#hx td.question:has(:contains("' + question + '"))').length != 0) {
                return;
            }

            var response = Case.history[question];

            // No response in this case, so it likely isn't important
            if (!response) {
                response = {
                    "importance" : "low",
                    "response" : "No",
                    "feedback" : "None."
                }
            }

            row = $(document.createElement("tr")).addClass('selected');
            $("#hx").append(populate_hx_row(row, question, response));

            $(".selected .response").css("opacity", 1);

            this.value = "";
            return false;
        },
    });

    // show Hx feedback
    $("#hx-done").click(function() {
        // show missing important history questions
        var table = $("#hx");
        for (var question in Case.history) {
            var response = Case.history[question];

            if ($('#hx td.question:has(:contains("' + question + '"))').length != 0 ||
                    response.importance != "high") {
                continue;
            }

            row = $(document.createElement("tr"));
            $("#hx").append(populate_hx_row(row, question, response));
        }

        //
        $("#hx tr .feedback").css("opacity", 1);

        /** selected items that should have been asked  **/
        $(".icon",
                $("#hx tbody tr.selected:not(:has(.importance-low))").addClass("success")
         ).addClass("glyphicon glyphicon-ok success");

        /** selected items that shouldn't have been asked **/
        $(".icon",
                $("#hx tbody tr.selected:has(.importance-low)").addClass("warning")
         ).addClass("glyphicon glyphicon-exclamation-sign alert-danger");

        /** unselected items that should have been asked **/
        $(".icon",
                $("#hx tbody tr:not(.selected):not(:has(.importance-low))").addClass("danger")
         ).addClass("glyphicon glyphicon-remove");

        /** unselected items that should not have been asked **/
        $(".icon",
                $("#hx tbody tr:not(.selected):has(.importance-low)").addClass("success")
         ).addClass("glyphicon glyphicon-ok");

        $("td:has(.icon)").css("background-color", "white");
    });

    /**
     * Post-History DDx
     */

    var ddx = Case.differential;
    for (var x in ddx) {
      var row = $(document.createElement("tr")).attr("data-key",x).append(
        '<td><span class="glyphicon glyphicon-sort"></span></td>',
                    "<td class='diagnosis'>"+x+"</td>",
                    "<td class='rank'></td>",
                    "<td class='feedback'></td>"

      );
      $("#hxddx").append(row);
    }

    $("#hxddx-done").click(function() {
      var ordered_ddx = []
      $("#hxddx").find("tbody tr").each(function() {
        //ordered_ddx.append($(this).attr("data-key"));
        dx = Case.differential[$(this).attr("data-key")];
        $(this).find(".rank").append(dx["rank"]);
        $(this).find(".feedback").append("test");
      });
    });

    var dxs = Diagnoses.concat([]);

    $( "#hxddx_autocomplete" ).autocomplete({
        delay: 0,
        autoFocus: true,
        source: dxs,
        select: function( event, ui ) {
            var dx = ui.item.value;

            // ignore partial questions
            if (dxs.indexOf(dx) == -1) {
                return;
            }

            row = $(document.createElement("tr")).addClass('selected').append(
                    '<td><span class="glyphicon glyphicon-sort"></span></td>',
                    "<td>"+dx+"</td>",
                    "<td></td>",
                    "<td></td>");
            $("#hxddx").append(row);

            this.value = "";
            return false;
        },
    });



    $("#hxddx tbody").sortable();

    /** Investigations 
    
    The action here is slightly different than in the Hx/Px sections: 
    
    1. The student marks which investigations they would like to perform. 
    2. No results are shown until "Run investigations" is selected.
    3. At the same time as the investigation results are shown, so is the expert feedback. 
    
    Expects the Case object to have the following structure for investigation data: 
    
        "investigations" : {
          "CBC": {
              result: "120", 
              feedback: "definitely ask for this because...",
              importance: "high",
          },
          ...
        }
    **/
    var ix_table = $("#ix_table"); 

    // populate the investigations table
    for (var investigation in Case.investigations) {
        row = $(document.createElement("tr")).attr("data-key", investigation)
        row.append(
                '<td class="mark"></td>',
                '<td class="checkbox"><input type="checkbox"></input></td>',
                '<td class="investigation">' + investigation + '</td>',
                '<td class="result"></td>', 
                '<td class="feedback"></td>');
        ix_table.append(row);
    }

    // show investigations and feedback 
    $('#ix-done').click(function () { 
        ix_table.find('tbody tr').each(function (i, el) {
            investigation = Case.investigations[ $(this).attr('data-key')];
            $(this).find(".result").text(investigation['result']); 
            $(this).find(".feedback").text(investigation['feedback'] + "hi");
        })
    }); 
});
