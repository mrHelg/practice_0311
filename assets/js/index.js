'use strict';

let number = 1;
function logNumber() {
  console.log(number++);
  if (number <= 10) {
    setTimeout(logNumber, 500);
  }
}

logNumber();
