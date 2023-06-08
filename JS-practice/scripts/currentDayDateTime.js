const clockDisplay = document.getElementById('clockDisplay');
const calendarDisplay = document.getElementById('calendarDisplay');
const dateDisplay = document.getElementById('dateDisplay');

function currentDay() {
    let day = new Date().getDay();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    calendarDisplay.innerHTML = `Today is ${daylist[day]}.`;
};

function currentTime() {
    const date = new Date(Date.now());
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    clockDisplay.innerHTML = `The time is ${hour}:${minute}:${second}`;
};

function currentDate() {
    const date = new Date(Date.now());

    dateDisplay.innerHTML = date;
};

setInterval(currentTime, 100);
setInterval(currentDay, 100);
setInterval(currentDate, 100);
