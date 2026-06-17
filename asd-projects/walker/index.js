/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
  ENTER: 13,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

  const KEY2 = {
  ENTER: 13,
  A: 65,
  W: 87,
  D: 68,
  S: 83,
};

  // Game Item Objects
   var walker = {

    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,

   }
      var walker2 = {

    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,

   }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);   
  $(document).on('keyup', handleKeyUp);                       

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {

  repositionGameItem()
  redrawGameItem()
  wallCollision()

  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
  console.log(event.which);

  if (event.which === KEY.LEFT) {
  //console.log("left pressed");
  walker.speedX = -5;
  } else if (event.which === KEY.RIGHT){
  //console.log("right pressed");
   walker.speedX = 5;
  } else if (event.which === KEY.UP){
  //console.log("up pressed");
   walker.speedY = -5;
  } else if (event.which === KEY.DOWN){
  //console.log("down pressed");
   walker.speedY = 5;
  } else if (event.which === KEY.ENTER){
  //console.log("enter pressed");
  }


    if (event.which === KEY2.A) {
  console.log("left pressed");
  walker2.speedX = -5;
  } else if (event.which === KEY2.D){
  console.log("right pressed");
   walker2.speedX = 5;
  } else if (event.which === KEY2.W){
  console.log("up pressed");
   walker2.speedY = -5;
  } else if (event.which === KEY2.S){
  console.log("down pressed");
   walker2.speedY = 5;
  } else if (event.which === KEY2.ENTER){
  console.log("enter pressed");
  }
  }

  function handleKeyUp(){
      if (event.which === KEY.LEFT) {
  //console.log("left lifted");
  walker.speedX = 0;
  } else if (event.which === KEY.RIGHT){
  //console.log("right lifted");
   walker.speedX = 0;
  } else if (event.which === KEY.UP){
  //console.log("up lifted");
   walker.speedY = 0;
  } else if (event.which === KEY.DOWN){
  //console.log("down lifted");
   walker.speedY = 0;
  } else if (event.which === KEY.ENTER){
  //console.log("enter lifted");
  }

      if (event.which === KEY2.A) {
  console.log("left pressed");
  walker2.speedX = 0;
  } else if (event.which === KEY2.D){
  console.log("right pressed");
   walker2.speedX = 0;
  } else if (event.which === KEY2.W){
  console.log("up pressed");
   walker2.speedY = 0;
  } else if (event.which === KEY2.S){
  console.log("down pressed");
   walker2.speedY = 0;
  } else if (event.which === KEY2.ENTER){
  console.log("enter pressed");
  }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem(){
  walker.x += walker.speedX
  walker.y += walker.speedY
  //console.log(walker.x, walker.y);

  walker2.x += walker2.speedX
  walker2.y += walker2.speedY
  console.log(walker2.x, walker2.y);

  }

  function redrawGameItem(){
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    $("#walker2").css("left", walker2.x);
    $("#walker2").css("top", walker2.y);
  }

  function wallCollision(){
    if (walker.x > $("#board").width() - 45){
   walker.x -= walker.speedX;
    //console.log("Right boarder");

    } else if(walker.x < 0){
   walker.x -= walker.speedX;
    //console.log("Left boarder");

    } else if(walker.y > $("#board").height() - 45){
    walker.y -= walker.speedY;
    //console.log("Bottom boarder");

    } else if(walker.y < 0){
    walker.y -= walker.speedY;
    //console.log("Top boarder");

    }


     if (walker2.x > $("#board").width() - 45){
   walker2.x -= walker2.speedX;
    console.log("Right boarder");

    } else if(walker2.x < 0){
   walker2.x -= walker2.speedX;
    console.log("Left boarder");

    } else if(walker2.y > $("#board").height() - 45){
    walker2.y -= walker2.speedY;
    console.log("Bottom boarder");

    } else if(walker2.y < 0){
    walker2.y -= walker2.speedY;
    console.log("Top boarder");

    }
  
  }
  
}
