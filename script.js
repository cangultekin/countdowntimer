
const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const seconsEl  = document.getElementById('seconds');

const newYears = "1 Jan 2022";


function countdown() {

    const newYearsDate  = new Date(newYears);
    const currentDate   = new Date();

    const totalSeconds  = (newYearsDate - currentDate) / 1000;
    const seconds       = Math.floor(totalSeconds) %60;
    const minutes       = Math.floor(totalSeconds / 60) %60; 
    const hours         = Math.floor(totalSeconds / 60 / 60) %24; 
    const days          = Math.floor(totalSeconds / 3600 /24); 

    daysEl.innerHTML    = days;
    hoursEl.innerHTML   = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    seconsEl.innerHTML  = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? '0${time}' : time ;
}

countdown();

setInterval(countdown, 1000);