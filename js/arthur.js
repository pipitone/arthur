HxQs = [ 
    "Birthplace",
    "Occupation",
    "Nationality",
    "Education",
    "Religion",
    "Marital Status",
    "Children",
    "Pets",
    "Drug Use",
    "Tobacco Use",
    "Alcohol Use",
    "Exercise",
    "Drinks",
    "Travel",
    "Caffeine Use",
    "Cancer",
    "Emphysema",
    "Glaucoma",
    "Anemia",
    "Artery Disease",
    "Arthritis",
    "Asthma",
    "Blood transfusions",
    "Broken Bones",
    "Chicken Pox",
    "Cystic Fibrosis",
    "Depression",
    "Diabetes",
    "Diseases",
    "Herpes",
    "HIV",
    "Frequent Bladder Infection",
    "Frequent Sinus Infections",
    "Gallstones",
    "Gonorrhea",
    "Chlamydia",
    "Gout",
    "Head Injury",
    "Heart Attack/Coronary",
    "Heart failure",
    "Heartburn / Reflux",
    "Hepatitis B vaccine",
    "Hepatitis / Jaundice",
    "High BP",
    "High Cholesterol",
    "Hives",
    "Infectious Mono",
    "Immunizations",
    "Intravenous drug abuse",
    "Kidney Disease",
    "Kidney Stones",
    "Liver Disease",
    "Malaria",
    "Migraines",
    "Needle injury",
    "Osteoporosis",
    "Pneumonia",
    "Polio",
    "Positive TB Skin Test",
    "Prostate Enlargement",
    "Rheumatic Fever",
    "Seizures",
    "STDs",
    "Stroke",
    "Syphilis",
    "Tetanus booster",
    "Thyroid Trouble",
    "Tuberculosis",
    "Ulcer disease",
    ];

function populate_hx_row(row, question, response) {
    row.append([ 
            '<td class="importance-' + response["importance"] + '"><span class="icon"></span></td>',
            '<td class="question"><span>' + question + '</div></td>', 
            '<td class="response"><span>' + response["response"] + '</span></td>', 
            '<td class="feedback">' + response["feedback"] + '</td>', 

    ]);
    return row;
}

$( document ).ready(function() {
    // set up stem and title
    $("#title").text(Case.title);
    $("p.stem").text(Case.stem);

    // build the history table
    var questions = Object.keys(Case.history).concat(HxQs);

    $( "#hx_autocomplete" ).autocomplete({
        delay: 0, 
        autoFocus: true,
        source: questions,
        select: function( event, ui ) {
            question = event.target.value;

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
                    "response" : "", 
                    "feedback" : "None."
                }
            }

            row = $(document.createElement("tr")).addClass('selected');
            $("#hx").append(populate_hx_row(row, question, response)); 

            $(".selected .response").css("opacity", 1);
        }, 
    });

    // show Hx feedback
    $("#hx-done").click(function() {
        // show missing important history questions
        table = $("#hx");
        for (question in Case.history) { 
            response = Case.history[question];

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
});
