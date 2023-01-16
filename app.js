"use strict";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const section = document.querySelector(".section-center");
const giftInfo = document.querySelector(".gift-info");
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

/*const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");*/
const items = document.querySelectorAll(".deadline h4");
//console.log(items);

let futureDate = new Date(2018, 3, 26, 11, 30, 0);
//console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `give away ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}  `;
//future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(today);
  //1s=1000ms
  //1m=60s
  //1hr=60m
  //1d=24hr
  //Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  //calculate all values
  let days = t / oneDay;
  //console.log(days);
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  //console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry,this giveaway has expired </h4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
