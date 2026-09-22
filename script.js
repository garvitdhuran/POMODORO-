const cornerTime =document.getElementById("corner-time")
// const timeformat  =  document.getElementById("timeformat")

document.addEventListener('DOMContentLoaded', ()=>{
    showTime();

    setInterval(showTime, 1000);

    document.getElementById("start-btn").onclick = startFuntion;

    document.getElementById("stop-btn").onclick = stopFunction;

    document.getElementById("reset-btn").onclick = resetFunction;



    document.getElementById("pomo-start-btn").onclick = pomoStartFunction;

    document.getElementById("pomo-pause-btn").onclick = pomoPauseFunction;


    document.getElementById("pomo-reset-btn").onclick = pomoResetFuntion;


        

});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let sec = date.getSeconds();
    let min = date.getMinutes();


    cornerTime.innerHTML = `${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

let seconds = 0 ;

let timer = null;


const stopwatchDisplay = document.getElementById("stopwatch-display");



const formatTime = (totalSeconds) => {
    let hrs = Math.floor(totalSeconds/3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;





    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};



const startFuntion = () => {
    if(timer === null){
        timer = setInterval(()=>{
            seconds++ ;
        stopwatchDisplay.innerHTML = formatTime(seconds);
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
    stopwatchDisplay.innerHTML ="00:00:00";

};

let pomosec = 2700; //thats 45 mins ig 

let pomotimer = null ;


isbreak = false;


const formatTime2 = (totalSeconds) => {
    let mins = Math.floor(totalSeconds/60);

    let secs = totalSeconds % 60 ;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const pomoStartFunction = () => {
    if(pomotimer === null){
        pomotimer = setInterval(() => {
            pomosec--;


            if(pomosec <=0 ){
                isbreak = !isbreak ;

                if(isbreak){
                    pomosec = 300;
                    pomoLabel.innerHTML = "break time beachesss ";

                } else {
                    pomosec = 2700;
                    pomoLabel.innerHTML = "Time to get back to work!!!!";
                }
            }




            pomoDisplay.innerHTML = formatTime2(pomosec);
        },1000);
    }
};



const pomoStopFucntion = () => { 
    clearIntrval(pomotimer);
    pomotimer = null 
};



const pomoReseFunction = () => {
    clearInterval(pomotimer);
    pomotimer = null ;
    isbreak = false; 
    pomosec = 2700;
    pomoLabel.innerHTML = "Time to get back to work!!!!";
    pomoDisplay.innerHTML="45:00"
};