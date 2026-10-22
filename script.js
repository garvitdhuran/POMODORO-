// const cornerTime =document.getElementById("corner-time")
// // const timeformat  =  document.getElementById("timeformat")

// document.addEventListener('DOMContentLoaded', ()=>{
//     showTime();

//     setInterval(showTime, 1000);

//     document.getElementById("start-btn").onclick = startFuntion;

//     document.getElementById("stop-btn").onclick = stopFunction;

//     document.getElementById("reset-btn").onclick = resetFunction;



//     document.getElementById("pomo-start-btn").onclick = pomoStartFunction;

//     document.getElementById("pomo-pause-btn").onclick = pomoPauseFunction;


//     document.getElementById("pomo-reset-btn").onclick = pomoResetFuntion;


        

// });



const clockText = document.getElementById("corner-time");


const swDisplay = document.getElementById("stopwatch-display");
const pomoText = document.getElementById("pomo-label");


const pomoShow = document.getElementById("pomo-display");


const showTime = () => {
    let d = new Date();

    let hr = d.getHours();
    let sec = d.getSeconds();
    let min = d.getMinutes();

    clockText.innerHTML = `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

   
}

let seconds = 0 ;

let timer = null;






const formatTime = (totalSecs) => {
    let hrs = Math.floor(totalSecs/3600);
    let mins = Math.floor((totalSecs % 3600) / 60);
    let secs = totalSecs % 60;





    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};



const startFunction = () => {
    if(timer === null){
        timer = setInterval(()=>{
            seconds++ ;
        swDisplay.innerHTML = formatTime(seconds);
        }, 1000);
    }
};


const stopFunction = ()=> {
    clearInterval(timer);
    timer = null;

};



const resetFunction = () => {
    clearInterval(timer);
    timer = null ;
    seconds = 0 ;
    swDisplay.innerHTML ="00:00:00";

};

const workTime = 25*60;


const breakTime = 5 * 60;

let pomosec = workTime;
let pomotimer = null ;


let isbreak = false ;


const formatPomo = (totalSecs) => {
    let mins = Math.floor(totalSecs/60);

    let secs = totalSecs % 60 ;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const pomoStart = () => {
    if(pomotimer === null){
        pomotimer = setInterval(() => {
            pomosec--;


            if(pomosec <=0 ){
                isbreak = !isbreak ;

                if(isbreak){
                    pomosec = breakTime;
                    pomoText.innerHTML = "break time beachesss ";

                } else {
                    pomosec = workTime;
                    pomoText.innerHTML = "Time to get back to work!!!!";
                }
            }




            pomoShow.innerHTML = formatPomo(pomosec);
        },1000);
    }
};



const pomoPause = () => { 
    clearInterval(pomotimer);
    pomotimer = null 
};



const pomoReset = () => {
    clearInterval(pomotimer);
    pomotimer = null ;
    isbreak = false; 
    pomosec = workTime;
    pomoText.innerHTML = "Time to get back to work!!!!";
    pomoShow.innerHTML=formatPomo(pomosec);
}; 

document.addEventListener("DOMContentLoaded", () => {
    showTime();
    setInterval(showTime, 1000);



    document.getElementById("start-btn").onclick = startFunction;
    document.getElementById("stop-btn").onclick = stopFunction ;
    document.getElementById("reset-btn").onclick = resetFunction;

    document.getElementById("pomo-start-btn").onclick = pomoStart;
    document.getElementById("pomo-pause-btn").onclick = pomoPause;
    document.getElementById("pomo-reset-btn").onclick = pomoReset;


})



