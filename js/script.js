/* eslint-env browser */

window.onload = function () {
  'use strict';
  
  var text = ["Programmer", "Learner", "Student", "Cook", "Developer"];
  var counter = 0;
  var elem = document.getElementById("changeText");
  var inst = setInterval(change, 1200);
  
  function change() {
    elem.innerHTML = text[counter];
    counter = counter + 1;
    
    if (counter === text.length) {
      counter = 0;
      /*clearInterval(inst);*/
    }
  }
  
};
