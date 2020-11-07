// script for day_scheduler
// variables
var currentTime = moment();

// init current page
function init() {
    // show current date
    var currentDate = currentTime.format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);

    // grab current hour to use for displaying past/present/future by color
    var currentHour = parseInt(currentTime.format("HH"));

    // loop through hours 09 to 17 military time (9AM to 5PM)
    // and set past/current/future different colors
    for (i = 9; i <= 17; i++) {
        // make string of time two characters long to target each hour div
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

        // display any saved diaries found in local storage
        var storedDiary = localStorage.getItem(numString) || "";
        if (storedDiary != "") {
            $(`#text-area-${numString}`).append(storedDiary);
        }
    }
}

// saveDiary - saves user input into local storage
function saveDiary(){
    // get hour id from button clicked and any input from user in textarea    
    var hour = $(this).attr("data-hour");
    var textInput = $(this).siblings("textarea").val();

    // if user cleared the text, remove entry from local storage
    // or if user entered text, add to the local storage
    if (!textInput) {
        localStorage.removeItem(hour);
    } else {
        localStorage.setItem(hour, textInput);
    }
}

// add listeners to buttons on page to save any entries
$(document).on("click", ".saveBtn", saveDiary);

// call to initialize page
init();
