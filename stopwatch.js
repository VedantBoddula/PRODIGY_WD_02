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
const lapButton=document.body.querySelector(".lap-button")

const lapReset = document.querySelector(".reset-img");


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
    // createLapBox(hours,minutes,seconds);
    seconds=-1;
    minutes=0;
    hours=0;
})

function createLapBox(hrs,mins,sec){
    const boxes = document.getElementById("boxes");
    const box = document.createElement("div");

    box.classList.add("lapkoremove"); //
    
    const hrBox = document.createElement("span");
    const minBox = document.createElement("span");
    const seBox = document.createElement("span");

       

    hrBox.innerText = hrs;
    minBox.innerText = ":"+mins;
    seBox.innerText = ":"+sec;
    box.appendChild(hrBox)
    box.appendChild(minBox)
    box.appendChild(seBox)
    boxes.appendChild(box)
    box.classList.add("move")
    
    // first_page.classList.add("hidden")
    // second_page.classList.remove("hidden")
}

lapButton.addEventListener("click",()=>{createLapBox(hours,minutes,seconds)})

function removeLaps(){
    const reemove=document.querySelectorAll(".lapkoremove")
    const lapss = document.getElementById("laps");

    for(let i=0;i<reemove.length;i++){
        console.log(reemove[i])
        lapss.removeChild(reemove[i])
    }
    console.log('Ved');
    
}


lapReset.addEventListener("click",removeLaps)
    // box.appendChild(hrBox)
    // box.appendChild(minBox)
    // box.appendChild(seBox)

   
    // box.classList.add("move")
    








