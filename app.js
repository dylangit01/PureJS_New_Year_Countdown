const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const loading = document.getElementById('loading');
const year = document.getElementById('year');
const countDown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = String(currentYear + 1);

const updateCountdown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 /24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = String(d < 10 ? '0' + d : d);
  hours.innerHTML = String(h < 10 ? '0'+ h : h);
  minutes.innerHTML = String(m < 10 ? '0' + m : m);
  seconds.innerHTML = String(s < 10 ? '0' + s : s);

};

setTimeout(_=> {
  countDown.style.display = 'flex';
  loading.remove();
}, 1000);

setInterval(updateCountdown, 1000);


