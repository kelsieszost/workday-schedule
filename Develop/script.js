var digitalClock = function() {
var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd MMM Do, YYYY, h:mm:ss'));

};

digitalClock();
setInterval(digitalClock, 1000);

$(document).ready(function() {
    trackHours();

    $("#hour9 .data-schedule").val(localStorage.getItem("hour9"));
    $("#hour10 .data-schedule").val(localStorage.getItem("hour10"));
    $("#hour11 .data-schedule").val(localStorage.getItem("hour11"));
    $("#hour12 .data-schedule").val(localStorage.getItem("hour12"));
    $("#hour13 .data-schedule").val(localStorage.getItem("hour13"));
    $("#hour14 .data-schedule").val(localStorage.getItem("hour14"));
    $("#hour15 .data-schedule").val(localStorage.getItem("hour15"));
    $("#hour16 .data-schedule").val(localStorage.getItem("hour16"));
    $("#hour17 .data-schedule").val(localStorage.getItem("hour17"));
});

$(".data-schedule").each (function() {
    var id = $(this).attr("id");
    var tasks = localStorage.getItem("id");
    if(tasks !== null) {
        $(this).children("tasks").val(tasks);
    }
})

function trackHours() {
    var currentTime = moment().hour();

    $(".data-schedule").each(function() {
        var calendarHour = parseInt($(this).attr("id"));

        if(calendarHour === currentTime) {
            $(this).addClass("present");

        }else if (calendarHour < currentTime) {
            $(this).addClass("past");

        }else {
            $(this).addClass("future");
        }

    })
}

var saveBtn = $(".data-save");

saveBtn.on("click", function() {
    var time =$(this).parent().attr("id");
    var current = $(this).siblings(".schedule");
    localStorage.setItem(time,current);

});
