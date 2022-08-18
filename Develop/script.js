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

$(".data-save").on("click", function() {

    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());

});
