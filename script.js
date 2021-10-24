let clickPad = document.querySelector(".clickPad");
let clicksNumber = document.querySelector(".clicksNumber");
let score = document.querySelector(".score");
let timer = document.querySelector(".timer");
let clicks = 0;

clickPad.addEventListener("click", function () {
  clicks++;
  clicksNumber.innerHTML = `clicks: ${clicks}`;
});

let timeFunc = function () {
  setTimeout(function () {
    score.innerHTML = `your CPS is ${clicks / 5}`;
  }, 5000);
};

// Styles
let styleButton = document.querySelector(".styling");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

styleButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Changing stylesheets
let head = document.querySelector("head");
let bliss = document.querySelector(".bliss");
let dark = document.querySelector(".dark");

bliss.addEventListener("click", function () {
  head.innerHTML = `<meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style-bliss.css" />
  <title>ClicksPerSecond</title>`;
});

dark.addEventListener("click", function () {
  head.innerHTML = `   
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <title>ClicksPerSecond</title>`;
});
