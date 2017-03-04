// set up stem and title
$("#title").text(Case.title);
$("p.stem").text(Case.stem);

// build the history table
table = $("#hx");
for (i in Case.history) { 
    question = Case.history[i];
    rowid ="hx-" + i;
    table.append("<tr id='" + rowid + "'></tr>");
    $("#"+rowid).append([ 
            '<td class="importance"><span class="' + question["importance"] + '"></span></td>',
            '<td class="question"><span>' + question["question"] + '</div></td>', 
            '<td class="answer"><span>' + question["answer"] + '</span></td>', 
            '<td class="feedback">' + question["feedback"] + '</td>', 

    ])
}

// show Hx feedback
$("#hx-done").click(function() {
    $("#hx tr .feedback").css("opacity", 1);

    /** selected items that should have been asked  **/
    $("#hx tr.selected:has(.importance:not(:has(.low)))")
        .addClass("success");

    /** selected items that shouldn't have been asked **/ 
    $("#hx tr.selected:has(.importance:has(.low))")
        .addClass("warning");

    /** unselected items that should have been asked **/
    $("#hx tr:not(.selected):has(.importance:not(:has(.low)))")
        .addClass("danger");

    /** unselected items that should not have been asked **/
    $("#hx tr:not(.selected):has(.importance:has(.low))")
        .addClass("success");
});


$("#hx td.question").click(function (event) {
    row = $(event.target).parentsUntil("table", "tr")
        $(".answer", row).css("opacity", 1);
    row.addClass("selected");
});
