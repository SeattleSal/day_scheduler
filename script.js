// variables
var currentTime = moment();
var currentDate = currentTime.format('dddd, MMMM Do');

function init() {
    // show current date
    $("#currentDay").text(currentDate);
    // currentHour is a number 
    var currentHour = parseInt(currentTime.format("HH"));

    // loop through hours and set past/current/future different colors
    for (i = 9; i < 14; i++) {
        // make string of time two characters long to grab div
        var numString = i.toString();
        if( i < 10) {
            numString = `0${i}`;
        } 
        var divEl = $(`#hour-${numString}`);

        // set class of div depending on if in past, present or future
        if (i < currentHour) {
            divEl.addClass("past")
        } else if (i === currentHour) {
            divEl.addClass("present");
        } else {
            divEl.addClass("future");
        }
    }
}

// saveDiary - saves user input into local storage
function saveDiary(event){
    // event.preventDefault; - do i need this?
    // console.log("something was clicked!" + event.target);
    var buttonEl = event.target;
    console.log(typeof buttonEl, buttonEl);
    // var textEl = buttonEl.parentElement.find("textarea");
    console.log(buttonEl.parentElement.child(".textarea"));
}


// add listeners to buttons on page
$(document).on("click", ".saveBtn", saveDiary);

// call to initialize page
init();
