// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

var amHoursInWorkDay = 12; // 9 + 3 because the work day starts at 9am
var pmHoursInWorkDay = 6; // 1 plus 5 because the afternoon starts at 1pm

var containerFuild = document.getElementsByClassName("container-fluid");
var hourContainer = document.getElementById("hour-container");

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
      divParentElement.setAttribute("id", i);

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

// console.log(typeof hour9 + "This is hour9" + hour9);
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour1 = document.getElementById("hour-1");
var hour2 = document.getElementById("hour-2");
var hour3 = document.getElementById("hour-3");
var hour4 = document.getElementById("hour-4");
var hour5 = document.getElementById("hour-5");

createNewHour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 // getElementById for the text areas for each textArea input
var textArea9 = document.getElementById("textArea9");
var textArea10 = document.getElementById("textArea10");
var textArea11 = document.getElementById("textArea11");
var textArea12 = document.getElementById("textArea12");
var textArea1 = document.getElementById("textArea1");
var textArea2 = document.getElementById("textArea2");
var textArea3 = document.getElementById("textArea3");
var textArea4 = document.getElementById("textArea4");
var textArea5 = document.getElementById("textArea5");

// getElementById for the save buttons
var saveButton9 = document.getElementById("saveButton9");
var saveButton10 = document.getElementById("saveButton10");
var saveButton11 = document.getElementById("saveButton11");
var saveButton12 = document.getElementById("saveButton12");
var saveButton1 = document.getElementById("saveButton1");
var saveButton2 = document.getElementById("saveButton2");
var saveButton3 = document.getElementById("saveButton3");
var saveButton4 = document.getElementById("saveButton4");
var saveButton5 = document.getElementById("saveButton5");

// Click eventListeners for each of the buttons that will save the text input to local sotrage and then set the text onto the textArea
saveButton9.addEventListener("click", function(){
  var textArea9Input = textArea9.value;
  console.log(textArea9Input);
  localStorage.setItem("textArea9", JSON.stringify(textArea9Input));
  textArea9.textContent = textArea9Input;
}) 

saveButton10.addEventListener("click", function(){
  var textArea10Input = textArea10.value;
  localStorage.setItem("textArea10", JSON.stringify(textArea10Input));
  textArea10.textContent = textArea10Input;
}) 

saveButton11.addEventListener("click", function(){
  var textArea11Input = textArea11.value;
  localStorage.setItem("textArea11", JSON.stringify(textArea11Input));
  textArea11.textContent = textArea11Input;
}) 

saveButton12.addEventListener("click", function(){
  var textArea12Input = textArea12.value;
  localStorage.setItem("textArea12", JSON.stringify(textArea12Input));
  textArea12.textContent = textArea12Input;
}) 

saveButton1.addEventListener("click", function(){
  var textArea1Input = textArea1.value;
  localStorage.setItem("textArea1", JSON.stringify(textArea1Input));
  textArea1.textContent = textArea1Input;
}) 

saveButton2.addEventListener("click", function(){
  var textArea2Input = textArea2.value;
  localStorage.setItem("textArea2", JSON.stringify(textArea2Input));
  textArea2.textContent = textArea2Input;
}) 

saveButton3.addEventListener("click", function(){
  var textArea3Input = textArea3.value;
  localStorage.setItem("textArea3", JSON.stringify(textArea3Input));
  textArea3.textContent = textArea3Input;
}) 

saveButton4.addEventListener("click", function(){
  var textArea4Input = textArea4.value;
  localStorage.setItem("textArea4", JSON.stringify(textArea4Input));
  textArea4.textContent = textArea4Input;
}) 

saveButton5.addEventListener("click", function(){
  var textArea5Input = textArea5.value;
  localStorage.setItem("textArea5", JSON.stringify(textArea5Input));
  textArea5.textContent = textArea5Input;
}) 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
// saveTextArea function will get the stored task information and add it to the textArea when page is refreshed
function saveTextArea(){
    var savedTask = JSON.parse(localStorage.getItem('textArea9'));
    document.getElementById('textArea9').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea10'));
    document.getElementById('textArea10').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea11'));
    document.getElementById('textArea11').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea12'));
    document.getElementById('textArea12').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea1'));
    document.getElementById('textArea1').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea2'));
    document.getElementById('textArea2').textContent = savedTask;
    
    var savedTask = JSON.parse(localStorage.getItem('textArea3'));
    document.getElementById('textArea3').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea4'));
    document.getElementById('textArea4').textContent = savedTask;

    var savedTask = JSON.parse(localStorage.getItem('textArea5'));
    document.getElementById('textArea5').textContent = savedTask;
}

saveTextArea();

// I tried to use a for loop for this but it caused an error on the page and it would not load. I need to look into why this was an infanate loop
// function saveTextArea(){
//   for ( var i = 0; i < 8; i++){
//     var savedTask = JSON.parse(localStorage.getItem('textArea' + i));
//     document.getElementById('textArea' + i).textContent = savedTask;
//   }
// }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  // day.js is used to get the current date and update the #currentDay p element in the header of the page
  var currentDay = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDay);


  // use dayjs to get the current hour in a 24 hour clock
  var currentHour = dayjs().format("H");
  $("#currentHour").text("The current hour is " + currentHour); //erase this later

// applyColorToRows is a function that will check the current hour and add a class attribute depending on if it is past, present or future. This currently does not work because I have issues with setting 

// function applyColorToRows() {
//   console.log("THIS IS THE " + parseInt(currentHour));
//     if (parseInt(currentHour) === 19){
//       console.log("1");
//       hour9.setAttribute("class", "present");
//     } else if (parseInt(currentHour) < 19){
//       hour9.setAttribute("class", "past");
//       console.log("2");
//     } else if (parseInt(currentHour) > 19){
//       hour9.setAttribute("class", "future");
//       console.log("3");
//     } else {
//       console.log("failed");
//     }
//   };

//   applyColorToRows();


});
