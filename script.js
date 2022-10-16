let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 89;
let speed = 20;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #56CA00 ${progressValue * 3.6}deg,
      #ffffff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
