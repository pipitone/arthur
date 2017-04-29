Diagnoses = [ "AIDS", "allergies", "Alzheimer's disease", "anxiety disorders", "arthritis", "asthma", "astigmatism", "autoimmune diseases", "benign prostate hyperplasia (BPH)", "bipolar disorder (manic-depressive)", "brain cancer", "breast cancer", "cancer", "candidiasis", "cataracts", "celiac disease", "cervical cancer", "chicken pox", "chlamydia", "chronic fatigue syndrome (CFS)", "chronic illness", "cold sores", "colon cancer", "constipation", "common cold", "COPD", "cough", "Crohn's disease", "cystic fibrosis", "dementia", "diabetes", "diarrhea", "depression", "eczema", "endometriosis", "eye disorders", "fibroids", "fibromyalgia", "flu (influenza)", "food poisoning", "Gallstones", "genital herpes", "gonorrhea", "Graves' disease", "Hashimoto's thyroiditis", "hay fever", "headache", "heart disease", "hemochromatosis", "hepatitis", "herpes", "high cholesterol", "HIV", "Hodgkin's disease", "HPV (human papilloma virus)", "hypertension", "impotence", "insomnia", "irritable bowel syndrome", "jaundice", "kidney disease", "lactose intolerance", "leukemia", "liver cancer", "liver disease", "lung cancer", "lupus", "Lyme disease", "lymphoma", "meningitis", "meningococcal disease", "menopause", "mental illness", "myopia (short-sightedness)", "migraine", "multiple sclerosis", "muscular dystrophy", "narcolepsy", "Non-Hodgkin's lymphoma", "obesity", "osteoporosis", "otitis media (middle ear infection)", "ovarian cancer", "overweight", "pain", "Parkinson's disease", "pelvic inflammatory disease", "pertussis", "pregnancy", "premenstrual syndrome (PMS)", "prostate cancer", "prostate disorders", "Raynaud's Phenomenon", "SARS", "sexually transmitted diseases", "sleep disorders", "smoking", "stroke", "thrush", "thyroid disorders", "whooping cough ", ];

var Case;
var Easy = true;

function populate_hx_row(row, question) {
    row.append([
            '<td class="importance-' + question["importance"] + '"><span class="icon"></span></td>',
            '<td class="question"><span>' + question["query"] + '</span></td>',
            '<td><span class="response" style="display:none">' + question["response"] + '</span></td>',
            '<td><span class="feedback" style="display:none">' + question["feedback"] + '</span></td>',
    ]);
    return row;
}

$( document ).ready(function() {
    // sets the case to be used
    Case = ELong;

    // set up stem and title
    $("#title").text(Case.title);
    $("p.stem").text(Case.stem);


    /**
     * History
     */

    // build the history table
    var questions = Case.history;
    for (i=0;i<questions.length;i++){
      row = $(document.createElement("tr")).addClass('hx-row');
      $("#hx").append(populate_hx_row(row, questions[i]));
    }
    var exams = Case.physical;
    for (i=0;i<exams.length;i++){
      row = $(document.createElement("tr")).addClass('px-row');
      $("#physical").append(populate_hx_row(row, exams[i]));
    }
    $( "#hx_autocomplete" ).autocomplete({
        delay: 0,
        autoFocus: true,
        source: questions,
        select: function( event, ui ) {
            question = ui.item.value;

            // ignore partial questions
            if (questions.indexOf(question) == -1) {
                return;
            }

            // skip this question if it has already been asked
            if ($('#hx td.question:has(:contains("' + question + '"))').length != 0) {
                return;
            }

            response = Case.history[question];

            // No response in this case, so it likely isn't important
            if (!response) {
                response = {
                    "importance" : "low",
                    "response" : "No",
                    "feedback" : "None."
                }
            }

            row = $(document.createElement("tr")).addClass('selected', 'hx-row');
            $("#hx").append(populate_hx_row(row, response));

            this.value = "";
            return false;
        },
    });
    // show Hx result
    $(".hx-row .px-row").click(function() {
      $(this).addClass('active selected');
      $(this).find('.response').show();
    })
    // show Hx feedback
    $("#hx-done").click(function() {
        // show missing important history questions
        /*table = $("#hx");
        for (question in Case.history) {
            response = Case.history[question];

            if ($('#hx td.question:has(:contains("' + question + '"))').length != 0 ||
                    response.importance != "high") {
                continue;
            }

            row = $(document.createElement("tr"));
            $("#hx").append(populate_hx_row(row, question, response));
        }*/
        $('#hx .response').show();
        $('#hx .feedback').show();

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
    var dxs = Diagnoses.concat([]);

    $( "#hxddx_autocomplete" ).autocomplete({
        delay: 0,
        autoFocus: true,
        source: dxs,
        select: function( event, ui ) {
            dx = ui.item.value;

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
});
