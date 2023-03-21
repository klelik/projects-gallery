var wrapper = document.querySelector(".container");
var mores = document.querySelectorAll("#moreButton");
var mc = document.querySelectorAll("#mainContent");
// const projectsData = [
//   {
//     id: 1,
//     title: "Weather Widget",
//     description: "Shows weather and forecast in current or selected location",
//     img: "weather2.png",
//     git: "https://github.com/klelik/weather-app",
//     deploy: "https://klelik.github.io/weather-app/",
//   },
//   {
//     id: 2,
//     title: "Quote Machine",
//     description: "Fetching and generating quotes from API, built in React",
//     img: "quote.png",
//     git: "https://github.com/klelik/quotte-machine",

//     deploy: "https://klelik.github.io/quotte-machine/",
//   },
//   {
//     id: 3,
//     title: "Birthday Reminder",
//     description: "Birthday reminder tool, send wishes automatically ",
//     img: "birthday.png",
//     git: "https://github.com/klelik/birthday-reminder",

//     deploy: "https://klelik.github.io/birthday-reminder/",
//   },
//   {
//     id: 4,
//     title: "Personal Portfolio",
//     description: "Current Personal Portfolio",
//     img: "portfolio.png",
//     git: "https://github.com/klelik/portfolio-main",

//     deploy: "https://lika.dev/",
//   },
//   {
//     id: 5,
//     title: "Airbnb Clone",
//     description: "Clone of Airbnb main front page ",
//     img: "airbnb.png",
//     git: "https://github.com/klelik/airbnb-clone",

//     deploy: "https://klelik.github.io/airbnb-clone/",
//   },
//   {
//     id: 6,
//     title: "Calculator",
//     description: "Calculator in Vanilla Javascript",
//     img: "calculator.png",
//     git: "https://github.com/klelik/calculator",

//     deploy: "https://klelik.github.io/calculator/",
//   },
//   {
//     id: 7,
//     title: "Pomodoro Timer",
//     description: "A timer to manage your time, while studying",
//     img: "pomodoro.png",
//     git: "https://github.com/klelik/pomodoro-clock",

//     deploy: "https://klelik.github.io/pomodoro-clock/",
//   },
// ];

console.log(mores);

for (let i = 0; i < mores.length; i++) {
  // console.log(mores[i].innerHTML)
  // console.log(mc[i].innerHTML)
  mores[i].addEventListener("click", showMoreLess);
  // console.log(mores[i].parentElement.classList)
}

function showMoreLess() {
  var mc = this.parentElement.classList;
  console.log(this.innerHTML);

  if (this.parentElement.classList.contains("hideContent")) {
    this.parentElement.classList.remove("hideContent");
    this.parentElement.classList.add("showContent");
    this.innerHTML = "...less";
    //   this.parentElement.style.padding = "5px";
  } else {
    this.parentElement.classList.remove("showContent");
    this.parentElement.classList.add("hideContent");
    this.innerHTML = "...more";
    //   this.parentElement.style.padding = "10px";
  }
}
