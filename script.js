const timeElement = document.querySelector(".time");

function timeUpdate() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let dayNight = "AM";
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (hours > 12) {
    dayNight = "PM";
    hours = hours - 12;
  }
  timeElement.innerText = `${hours}:${minutes}:${seconds} ${dayNight}`;
}

setInterval(timeUpdate);
