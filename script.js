let clickPad = document.querySelector(".clickPad");
let clicksNumber = document.querySelector(".clicksNumber");
var scoreBoard = document.querySelector(".score");
let timer = document.querySelector(".timer");
let clicks = 0;

clickPad.addEventListener("click", function () {
  clicks++;
  clicksNumber.innerHTML = `Clicks: ${clicks}`;
});

let timeFunc = function () {
  setTimeout(function () {
    clickPad.classList.add("hidden");
    scoreBoard.classList.remove("hidden");
    scoreBoard.innerHTML = `Your CPS is ${clicks / 5}`;
  }, 5000);
};
