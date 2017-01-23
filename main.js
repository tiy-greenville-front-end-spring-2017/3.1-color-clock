(function(){
  "use strict";

  var clockFace = document.querySelector('#elapsed-time');
  var isHovering = false;

  function formatTime(hours, minutes, seconds){
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    return [hours, minutes, seconds];
  }

  function colorCode(hours, minutes, seconds){
    hours = hours.toString(16);
    minutes = minutes.toString(16);
    seconds = seconds.toString(16);

    return [hours, minutes, seconds];
  }

  function runClock(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hoursNode = document.querySelector('.elapsed-time .hours');
    var minutesNode = document.querySelector('.elapsed-time .minutes');
    var secondsNode = document.querySelector('.elapsed-time .seconds');

    var clockDisplay;

    if(isHovering){
      clockDisplay = colorCode(hours, minutes, seconds);
    }else{
      clockDisplay = formatTime(hours, minutes, seconds);
    }

    hoursNode.textContent = clockDisplay[0];
    minutesNode.textContent = clockDisplay[1];
    secondsNode.textContent = clockDisplay[2];
  }

  function handleMouseOver(){
    isHovering = true;
  }

  function handleMouseOut(){
    isHovering = false;
  }

  // Handle hover on clock
  clockFace.addEventListener('mouseover', handleMouseOver);
  clockFace.addEventListener('mouseout', handleMouseOut);

  // Run clock every second
  window.setInterval(runClock, 20);
}())
