// day.js is used to get the current date and update the #currentDay p element
var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay);

var hourRowCreate = document.getElementById("hour-");
var hoursInWorkDay = 2;

var containerFuild = document.getElementsByClassName("container-fluid");

// Elements to create in the HTML file for each hour block: 
/* 
<div id="hour-" class="row time-block">
<div class="col-2 col-md-1 hour text-center py-3">Testing</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div> */

var body = document.body;
var divParentElement = document.createElement("div");
var divChildElement = document.createElement("div");
var textAreaElement = document.createElement("textarea");
var buttonElement = document.createElement("button");

divParentElement.textContent = "Testing Div Parent";
divChildElement.textContent = "This is the child element";
textAreaElement.textContent = "this is the text area";

containerFuild.appendChild(divParentElement);
containerFuild.appendChild(divChildElement);
containerFuild.appendChild(textAreaElement);

for (var i =  0; i < hoursInWorkDay; i++){
  hourRowCreate.id = "hour-1";
  
  console.log(hourRowCreate);
}

function createNewHour () {
  //change id to include current iteration number (i)
  // document.getElementById('one').id = 'two';
  document.hourRowCreate.id = "hour-" + i;
  console.log(hourRowCreate);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
