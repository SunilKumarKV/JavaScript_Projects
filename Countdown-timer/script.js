const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const submitDateInput = document.getElementById("submitDate");

let intervalId;

function setAlarm() {
  clearInterval(intervalId); // Clear any existing countdown

  const submitDate = new Date(submitDateInput.value);
  const currentDate = new Date();

  const totalSeconds = (submitDate - currentDate) / 1000;

  if (totalSeconds <= 0) {
    alert("Please select a future date.");
    return;
  }

  countdown(totalSeconds);
  intervalId = setInterval(() => {
    const currentTotalSeconds = (submitDate - new Date()) / 1000;
    countdown(currentTotalSeconds);
  }, 1000);
}

function countdown(totalSeconds) {
  if (totalSeconds < 0) {
    clearInterval(intervalId);
    alert("Time's up!");
    return;
  }

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
