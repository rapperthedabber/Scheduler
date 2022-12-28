// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn9 = document.querySelector(".saveBtn9")
var saveBtn10 = document.querySelector(".saveBtn10")
var saveBtn11 = document.querySelector(".saveBtn11")
var saveBtn12 = document.querySelector(".saveBtn12")
var hour9 = document.querySelector(".hour9")
var hour10 = document.querySelector(".hour10")
var hour11 = document.querySelector(".hour11")
var p = document.getElementById("currentDay")
  // TODO: Add a listener for click events on the save button. This code should
// saveBtn9.addEventListener("click",function(){
//   localStorage.setItem("hour9", hour9.value );
//   hour9.style.display = "none";
// })

// saveBtn10.addEventListener("click", function(){
//   localStorage.setItem("hour10", hour10.value);
//   hour10.style.display = "none";
// })

// saveBtn11.addEventListener("click", function(){
//   localStorage.setItem("hour11", hour11.value )
//   hour11.style.display = "none";
// })

$(".saveBtn").on("click", function(){
  var Time = $(this).parent().attr("id")
  var description = $(this).siblings(".description").val()
  localStorage.setItem(Time, description)
})
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

  function Updater(){
    var currentTime = dayjs().hour()
    $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("-")[1])
      if(blockHour < currentTime){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
      } else if(blockHour === currentTime){
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present")
      }else{
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  }
  Updater()
  setInterval(Updater,15000);
function displayDate() {
  var date = new Date(); 
 p.innerHTML= Date();
}

displayDate();
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
