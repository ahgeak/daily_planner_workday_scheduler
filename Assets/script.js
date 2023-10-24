$(function () {

var amHoursInWorkDay = 12; // 9 + 3 because the work day starts at 9am
var pmHoursInWorkDay = 6; // 1 plus 5 because the afternoon starts at 1pm

var containerFuild = document.getElementsByClassName("container-fluid");
var hourContainer = document.getElementById("hour-container");
console.log("This is the hourContainer" + hourContainer);

// If this works, I need to add elements for all textArea and all saveButton elements
var textArea9 = document.getElementById("textArea9");
var saveButton9 = document.getElementById("saveButton9");


// var body = document.body;
// var divParentElement = document.createElement("div");
// var divChildElement = document.createElement("div");
// var textAreaElement = document.createElement("textarea");
// var buttonElement = document.createElement("button");
// var iElement = document.createElement("i");

// // divParentElement.textContent = "Testing Div Parent";
// divChildElement.textContent = "This is the child element";
// // textAreaElement.textContent = "This is the text area";

// hourContainer.appendChild(divParentElement);
// divParentElement.appendChild(divChildElement);
// divParentElement.appendChild(textAreaElement);
// divParentElement.appendChild(buttonElement);
// buttonElement.appendChild(iElement);

// divParentElement.setAttribute("id", "hour-"+"i");
// divParentElement.setAttribute("class", "row time-block");
// divChildElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
// textAreaElement.setAttribute("class", "col-8 col-md-10 description");
// textAreaElement.setAttribute("rows", "3");
// buttonElement.setAttribute("class", "btn saveBtn col-2 col-md-1");
// buttonElement.setAttribute("aria-label", "save");
// iElement.setAttribute("class", "fas fa-save");
// iElement.setAttribute("aria-hidden", "true");


// I NEED TO CREATE: past, present, and future class tags for the divParentElements.

// This fuction creates all of the working hours for the planner
function createNewHour () {

  // for loop to create 9am -11am time slots
    for (var i =  9; i < amHoursInWorkDay; i++){
      var divParentElement = document.createElement("div");
      var divChildElement = document.createElement("div");
      var textAreaElement = document.createElement("textarea");
      var buttonElement = document.createElement("button");
      var iElement = document.createElement("i");
      
      // set the content to be the current iteration plus AM
      divChildElement.textContent = i + " AM";

      hourContainer.appendChild(divParentElement);
      divParentElement.appendChild(divChildElement);
      divParentElement.appendChild(textAreaElement);
      divParentElement.appendChild(buttonElement);
      buttonElement.appendChild(iElement);

      // change id to include current iteration number (i)
      divParentElement.setAttribute("id", "hour-"+i);

      // attempted this with another way to set the ID:
      // divParentElement.setAttribute("id", `hour-${i}`);

      //set the attributes for the elements
      divParentElement.setAttribute("class", "row time-block");
      divChildElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
      textAreaElement.setAttribute("id", "textArea" +i);
      textAreaElement.setAttribute("class", "col-8 col-md-10 description");
      textAreaElement.setAttribute("rows", "3");
      buttonElement.setAttribute("id", "saveButton" + i);
      buttonElement.setAttribute("class", "btn saveBtn col-2 col-md-1");
      buttonElement.setAttribute("aria-label", "save");
      iElement.setAttribute("class", "fas fa-save");
      iElement.setAttribute("aria-hidden", "true");
    }

    // elements to create 12pm time slot uniquely because it is 12 pm and the other pm slots will start at 1
    var divParentElement = document.createElement("div");
    var divChildElement = document.createElement("div");
    var textAreaElement = document.createElement("textarea");
    var buttonElement = document.createElement("button");
    var iElement = document.createElement("i");
    
    divChildElement.textContent = "12 PM";
    
    hourContainer.appendChild(divParentElement);
    divParentElement.appendChild(divChildElement);
    divParentElement.appendChild(textAreaElement);
    divParentElement.appendChild(buttonElement);
    buttonElement.appendChild(iElement);
    
    divParentElement.setAttribute("id", "hour-12");
    divParentElement.setAttribute("class", "row time-block");
    divChildElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    textAreaElement.setAttribute("id", "textArea" +12);
    textAreaElement.setAttribute("class", "col-8 col-md-10 description");
    textAreaElement.setAttribute("rows", "3");
    buttonElement.setAttribute("id", "saveButton" + 12);
    buttonElement.setAttribute("class", "btn saveBtn col-2 col-md-1");
    buttonElement.setAttribute("aria-label", "save");
    iElement.setAttribute("class", "fas fa-save");
    iElement.setAttribute("aria-hidden", "true");

    // for loop to create 1pm-5pm time slots
    for (var i =  1; i < pmHoursInWorkDay; i++){
      var divParentElement = document.createElement("div");
      var divChildElement = document.createElement("div");
      var textAreaElement = document.createElement("textarea");
      var buttonElement = document.createElement("button");
      var iElement = document.createElement("i");
      
      divChildElement.textContent = i + " PM";
      
      hourContainer.appendChild(divParentElement);
      divParentElement.appendChild(divChildElement);
      divParentElement.appendChild(textAreaElement);
      divParentElement.appendChild(buttonElement);
      buttonElement.appendChild(iElement);
      
      divParentElement.setAttribute("id", "hour-"+i);
      divParentElement.setAttribute("class", "row time-block");
      divChildElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
      textAreaElement.setAttribute("id", "textArea" +i); //JUST ADDED
      textAreaElement.setAttribute("class", "col-8 col-md-10 description");
      textAreaElement.setAttribute("rows", "3");
      buttonElement.setAttribute("id", "saveButton" + i); //JUST ADDED
      buttonElement.setAttribute("class", "btn saveBtn col-2 col-md-1");
      buttonElement.setAttribute("aria-label", "save");
      iElement.setAttribute("class", "fas fa-save");
      iElement.setAttribute("aria-hidden", "true");
    }
}

// var hour9 = document.getElementById("hour-9");
var hour9 = document.getElementById("hour-9");

console.log(typeof hour9 + "This is hour9" + hour9);
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour1 = document.getElementById("hour-1");
var hour2 = document.getElementById("hour-2");
var hour3 = document.getElementById("hour-3");
var hour4 = document.getElementById("hour-4");
var hour5 = document.getElementById("hour-5");


function saveTaskItem (){
  console.log("testing");
  // var testingTextContent = textArea9.value;

  // localStorage.setItem("testingTextContent", JSON.stringify(testingTextContent));
}



createNewHour();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {

  // var currentHour = dayjs().format("H");
  // console.log(currentHour + "PENGUIN");
  // $("#currentHour").text("The current hour is " + currentHour); //erase this later


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // hour9.children.addEventListener("click", saveTaskItem());
  
  // saveButton9.addEventListener("click", function(){
  //   console.log("test");
  // }) 


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // function applyColorToRows() {
  //   if (currentHour === 13){
  //     hour9.setAttribute("class", "present");
  //   } else if (currentHour < 13){
  //     hour9.setAttribute("class", "past");
  //   } else {
  //     hour9.setAttribute("class", "future");
  //   }
  // };

  // $(window).load(applyColorToRows());

  
  // if (document.readyState === "loading") {
  //   // Loading hasn't finished yet
  //   document.addEventListener("DOMContentLoaded", applyColorToRows);
  //   console.log("interactive");
  // } else {
  //   // `DOMContentLoaded` has already fired
  //   applyColorToRows();
  //   console.log("other");
  // }

  // document.addEventListener("DOMContentLoaded", (event) => {
  //   console.log("DOM fully loaded and parsed");
  //   applyColorToRows();
  // });

  // function applyColorToRows (){
  //   if (currentHour === 13){
  //     hour9.setAttribute("class", "present");
  //   } else if (currentHour < 13){
  //     hour9.setAttribute("class", "past");
  //   } else {
  //     hour9.setAttribute("class", "future");
  //   }
  // }

  // applyColorToRows();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // day.js is used to get the current date and update the #currentDay p element in the header of the page
  var currentDay = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDay);

var currentHour = dayjs().format("H");
// console.log(parseInt(currentHour));
// currentHour = parseInt(currentHour);
// $("#currentHour").text("The current hour is " + currentHour); //erase this later

function applyColorToRows() {
  console.log("THIS IS THE " + parseInt(currentHour));
    if (parseInt(currentHour) === 19){
      console.log("1");
      hour9.setAttribute("class", "present");
    } else if (parseInt(currentHour) < 19){
      hour9.setAttribute("class", "past");
      console.log("2");
    } else if (parseInt(currentHour) > 19){
      hour9.setAttribute("class", "future");
      console.log("3");
    } else {
      console.log("failed");
    }
  };

  applyColorToRows();


});

// var currentHour = dayjs().format("H");
// $("#currentHour").text("The current hour is " + currentHour); //erase this later

// function applyColorToRows() {
//   console.log("THIS IS THE " + currentHour);
//     if (currentHour === 15){
//       hour9.setAttribute("class", "present");
//       console.log("1");
//     } else if (currentHour < 15){
//       hour9.setAttribute("class", "past");
//       console.log("2");
//     } else if (currentHour > 15){
//       hour9.setAttribute("class", "future");
//       console.log("3");
//     }
//   };

//   document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM fully loaded and parsed");
//     applyColorToRows();
//   });
