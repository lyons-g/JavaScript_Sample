﻿const months = [
    "Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Sept", "Oct", "Nove", "Dec"
];

const weekdays = [ 
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2020,7,30,17,30,0);
//console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}pm`;


//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
   // console.log(t);
    //1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    //calculate
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);

   // console.log(hours);

    let minutes = Math.floor((t % oneHour) / oneMinute);
  //  console.log(minutes);

    let seconds = Math.floor((t % oneMinute) / 1000);
  //  console.log(seconds);

    //set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item =`0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired<h1>`;
    }
   
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();