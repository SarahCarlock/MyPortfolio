import React from 'React';
import { ReactDOM, createElement} from 'React';

export function currentDayDateTime() {
    let element = document.getElementById(currentday/date/time);
    let today = new Date();
    let date = today.getDay();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("Today is : " + daylist[day] + ".");
   
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let prepend = (hour >= 12) ? " PM ": " AM ";
    hour = (hour >= 12) ? hour - 12: hour;

}