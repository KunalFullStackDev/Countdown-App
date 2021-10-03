let newYears = '1 January 2022'
let Days = document.getElementById("days");
let Hours = document.getElementById("hours");
let Minutes = document.getElementById("min");
let Seconds = document.getElementById("sec");

let Countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = Math.floor((newYearsDate - currentDate) / 1000);
    const seconds = Math.floor(totalseconds) % 60;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const hours = Math.floor(totalseconds / 3600) % 24;
    const days = Math.floor(totalseconds/ 3600 / 24);

    Days.textContent = days;
    Hours.textContent = hours;
    Minutes.textContent = minutes;
    Seconds.textContent = seconds;
}
Countdown();
setInterval(Countdown, 1000)