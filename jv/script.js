// Countdown
const targetDate = new Date('2024-10-26T09:00:00-05:00').getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysString = days.toString().padStart(2, '0');
  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');
  const secondsString = seconds.toString().padStart(2, '0');
  const secondsPuluhan = Math.floor(seconds / 10);
  const secondsSatuan = seconds % 10;

  document.querySelector(".days").innerHTML = daysString;
  document.querySelector(".hours").innerHTML = hoursString;
  document.querySelector(".minutes").innerHTML = minutesString;
  document.querySelector(".seconds-puluhan").innerHTML = secondsPuluhan;
  document.querySelector(".seconds-satuan").innerHTML = secondsSatuan;

  if (distance < 0) {
    clearInterval(countdown);
    
  }
}, 1000);


// Hamburger Button
function myFunction(x) {
  x.classList.toggle("change");
  const navBurger = document.querySelector(".burger")
  navBurger.classList.toggle("show");
}