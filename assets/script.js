// variables
var currentTime = moment();
var currentDate = currentTime.format('dddd, MMMM Do');

function init() {
    // show current date
    $("#currentDay").text(currentDate);
    // currentHour is a number 
    var currentHour = parseInt(currentTime.format("HH"));
    console.log(`current hour is ${currentHour}`);

    // loop through hours and set past/current/future different colors
    for (i = 9; i <= 17; i++) {
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

        // display any saved diaries in local storage
        // get local storage
        var storedDiary = localStorage.getItem(numString) || "";
        if (storedDiary != "") {
            console.log(`data stored at ${numString} see ${storedDiary}`);
            // put stored value in time slot diary
            $(`#text-area-${numString}`).append(storedDiary);

            // console.log(divEl);
        }
    }
}

// saveDiary - saves user input into local storage
function saveDiary(event){
    // event.preventDefault; - do i need this?
    var buttonEl = $(event.target);
    console.log(typeof buttonEl, buttonEl);

    var textInput = buttonEl.siblings("textarea").val();

    // need to add something if val is blank
        // save text to local storage
    if (textInput != "") {
        localStorage.setItem(buttonEl.attr("data-hour"), textInput);
    } else {
        localStorage.removeItem("data-hour");
    }
}


// add listeners to buttons on page to save any entries
$(document).on("click", ".saveBtn", saveDiary);

// call to initialize page
init();
