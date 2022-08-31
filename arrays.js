const array = [];
let time = 0;
let stopTimer = "";
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");

document.addEventListener("DOMContentLoaded", start);
function start() {
  btn.addEventListener("click", timeCount);
/*   btn1.addEventListener("click", stopTime);
 */}

function timeCount() {
  setTimeout(() => {
    console.log(time);
    array.unshift(time);
    if (array.length === 10) {
      array.pop();
    }
    console.log(array);
    time++;
    timeCount();
  }, 500);
}
/* function stopTime() {
  clearTimeout(timeCount);
  console.log("time stopped");
} */
