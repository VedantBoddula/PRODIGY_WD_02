let seconds = 0;
let minutes = 0;
let hours = 0;
let paused = false;
const hour=document.body.querySelector("#hour")
const second=document.body.querySelector("#second")
const minute=document.body.querySelector("#minute")
const startButton=document.body.querySelector(".start-button")
const resetButton=document.body.querySelector(".reset-button")
const stopButton=document.body.querySelector(".stop-button")


setInterval(increment, 1000);

function increment(){
    if (paused) {
        return;
    }
    if(seconds==59){
        seconds=0;
        if (minutes==59) {
            minutes=0;
            hours++;
        }else{
            minutes++;
        }
    }else{
        seconds++;
    }
    minute.innerHTML=minutes+":"
    second.innerHTML=seconds
    hour.innerHTML=hours+":"
}



stopButton.addEventListener("click",()=>{
    paused=true;
})

startButton.addEventListener("click",()=>{
    paused=false;
})

resetButton.addEventListener("click",()=>{
    seconds=-1;
    minutes=0;
    hours=0;
})


const element = document.getElementById("center");
  element.style.position = "absolute";
  element.style.top = "50%";
  element.style.left = "50%";
  element.style.transform = "translate(-50%, -50%)";
