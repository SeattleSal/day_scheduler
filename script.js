// variables
var currentTime = moment();
console.log(currentTime.format("MM Do YYYY"));

var currentDate = currentTime.format('dddd, MMMM Do');
// console.log($("#curDate"));

function init() {
    // show current date
    $("#currentDay").text(currentDate);
    // currentHour is a number 
    var currentHour = parseInt(currentTime.format("HH"));
    console.log(currentHour);

    // loop through hours and set past/current/future different colors
    for (i = 9; i < 14; i++) {
        // make string of time two characters long to grab div
        var numString = i.toString();
        if( i < 10) {
            numString = `0${i}`;
        } 

        var divEl = $(`#hour-${numString}`);
        // if in past, make gray
        console.log(typeof currentHour, typeof i);
        if (i < currentHour) {
            divEl.addClass("past")
            console.log(`${currentHour} is in the past`);
        } else if (i === currentHour) {
            divEl.addClass("present");
        } else {
            divEl.addClass("future");
        }



        // console.log(divEl);
        // var divEl = $()
    }

}

init();