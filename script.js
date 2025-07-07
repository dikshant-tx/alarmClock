let str = document.querySelector("#str");
let stp = document.querySelector("#stp");
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

let date;
let hrs;
let min;
let sec;

let h;
let m;

let interval;

//this function is here for to play audio
function play() {
  const audio = new Audio("creepy_bell.mp3");
  audio.play();
}
// this function calls play() after condition are met and continue for 1 minutes
let start = () => {
  interval = setInterval(() => {
    if (h == hrs && m == min) {
      play();
      stp.innerHTML = "Stop";
    } else {
      stp.innerHTML = "Remove";
    }
  }, 1000);
};
//this adds functionality to button and call start() when buttons is pressed
str.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  h = document.querySelector("#hrs").value;
  m = document.querySelector("#min").value;
  div2.innerHTML = `Alram Set For: ${h}:${m}`;
  start();
  // console.log(h, m);
});

//this is for to retrive current time
setInterval(() => {
  date = new Date();
  hrs = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
}, 1);

//display current time
setInterval(() => {
  div1.innerHTML = `Current Time: ${hrs}:${min}:${sec}`;
}, 2);

//stopping the alarm sound
stp.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  stp.innerHTML = "Remove";
  div2.innerHTML = `Alarm Not Set`;
});

console.log(intervl);
