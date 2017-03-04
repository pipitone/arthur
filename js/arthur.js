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
            '<td class="importance-' + question["importance"] + '"><span class="icon"></span></td>',
            '<td class="question"><span>' + question["question"] + '</div></td>', 
            '<td class="answer"><span>' + question["answer"] + '</span></td>', 
            '<td class="feedback">' + question["feedback"] + '</td>', 

    ])
}

// show Hx feedback
$("#hx-done").click(function() {
    $("#hx tr .feedback").css("opacity", 1);

    /** selected items that should have been asked  **/
    $(".icon",  
            $("#hx tbody tr.selected:not(:has(.importance-low))").addClass("success")
     ).addClass("glyphicon glyphicon-ok");

    /** selected items that shouldn't have been asked **/ 
    $(".icon",  
            $("#hx tbody tr.selected:has(.importance-low)").addClass("warning")
     ).addClass("glyphicon glyphicon-exclamation-sign");

    /** unselected items that should have been asked **/
    $(".icon",  
            $("#hx tbody tr:not(.selected):not(:has(.importance-low))").addClass("danger")
     ).addClass("glyphicon glyphicon-remove");

    /** unselected items that should not have been asked **/
    $(".icon",  
            $("#hx tbody tr:not(.selected):has(.importance-low)").addClass("success")
     ).addClass("glyphicon glyphicon-ok");
});


$("#hx td.question").click(function (event) {
    row = $(event.target).parentsUntil("table", "tr")
        $(".answer", row).css("opacity", 1);
    row.addClass("selected");
});
