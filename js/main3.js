let check = document.querySelector(".check");
check.onclick = function () {
  document.querySelector(".gr1").classList.toggle("active");
  document.querySelector(".check").classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
  document.querySelector(".cont").classList.toggle("active");
  document.querySelector("h1").classList.toggle("active");
  document.querySelector("h2").classList.toggle("active");
  // document
  //   .querySelector("header .contener .menu ul li a")
  //   .classList.toggle("act");
  let te = document.querySelectorAll("header .contener .menu ul li a");
  te.forEach((element) => {
    element.classList.toggle("act");
  });
  document.querySelector(".eror a").classList.toggle("act");
};
document.querySelector(".ab").onclick = function () {
  document.querySelector(".about").scrollIntoView();
};
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountain7 = document.getElementById("mountain7");
let nam = document.querySelector("#name");
let section = document.querySelector(".state-section");
let topPos = section.offsetTop;
let started = false;
let spans = document.querySelectorAll(".progres span");
let progsection = document.querySelector(".prog-section");

window.onscroll = function () {
  if (scrollY >= progsection.offsetTop - 400) {
    spans.forEach((element) => {
      element.style.width = element.dataset.width;
    });
  }
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      state.forEach((element) => contfun(element));
    }
    started = true;
  }
  let value = scrollY;
  let newval = value - 1200;
  if (scrollY >= 1200) {
    stars.style.left = newval + "px";
  }
  if (scrollY >= 1250) {
    moon.style.top = (newval - 100) * 1.5 + "px";
    nam.style.fontSize = newval - 100 + "px";
    if (scrollY >= 1450) {
      nam.style.fontSize = 250 - 100 + "px";
    }
  }
  if (scrollY >= 1500) {
    mountain3.style.top = newval - 300 + "px";
    mountain4.style.top = newval - 300 + "px";
    river.style.top = (newval - 350) * 0.8 + "px";
    boat.style.top = (newval - 350) * 0.8 + "px";
    boat.style.left = (newval - 350) * 2 + "px";
  }
  if (scrollY >= document.querySelector(".more").offsetTop - 200) {
    document.querySelector(".content2 h1").classList.add("active");
    document.querySelector(".content2 .p1").classList.add("active");
  } else {
    document.querySelector(".content2 h1").classList.remove("active");
    document.querySelector(".content2 .p1").classList.remove("active");
  }
  if (scrollY >= document.querySelector(".more").offsetTop + 100) {
    document.querySelector(".content2 .p2").classList.add("active");
    document.querySelector(".content2 .p1").style.transform = "scale(1.1)";
    document.querySelector(".content2 .p1").style.paddingLeft = "60px";
  } else {
    document.querySelector(".content2 .p2").classList.remove("active");
    document.querySelector(".content2 .p1").style.transform = "scale(1)";
    document.querySelector(".content2 .p1").style.paddingLeft = "20px";
  }
  if (scrollY >= document.querySelector(".more").offsetTop + 300) {
    document.querySelector(".content2 .p3").classList.add("active");
    document.querySelector(".content2 .p2").style.transform = "scale(1.1)";
    document.querySelector(".content2 .p2").style.paddingLeft = "60px";
  } else {
    document.querySelector(".content2 .p3").classList.remove("active");
    document.querySelector(".content2 .p2").style.transform = "scale(1)";
    document.querySelector(".content2 .p2").style.paddingLeft = "20px";
  }
  if (scrollY >= document.querySelector(".more").offsetTop + 350) {
    document.querySelector(".content2 .p3").style.transform = "scale(1.1)";
    document.querySelector(".content2 .p3").style.paddingLeft = "60px";
  } else {
    document.querySelector(".content2 .p3").style.transform = "scale(1)";
    document.querySelector(".content2 .p3").style.paddingLeft = "20px";
  }
  if (scrollY > 550) {
    document.querySelector(".scrollTop i").classList.add("active");
    document.querySelector(".fa-chevron-up").onclick = function () {
      console.log("hi");
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector(".scrollTop i").classList.remove("active");
  }
};

let state = document.querySelectorAll(".states .state p.state-count");
function contfun(el) {
  let goal = el.dataset.goal;
  let conting = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(conting);
    }
  }, 2500 / goal);
}
let countDate = new Date("Feb,28,2022,22:59:59").getTime();
let contDay = document.querySelector(" div.cont-date > div.cont-day span");
let contHour = document.querySelector(" div.cont-date > div.cont-hour span");
let contMinut = document.querySelector(" div.cont-date > div.cont-minute span");
let contSec = document.querySelector(" div.cont-date > div.cont-sec span");
let contAll = document.querySelector(" div.cont-date div.cont-sec ");
let spanAll = document.querySelector(" div.cont-date div.cont-sec span");
let countdown = setInterval(() => {
  let date = new Date().getTime();
  let difDate = countDate - date;
  let days = Math.floor(difDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuts = Math.floor((difDate % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((difDate % (1000 * 60)) / 1000);
  contDay.innerHTML = days;
  contHour.innerHTML = hours;
  contMinut.innerHTML = minuts;
  contSec.innerHTML = secs;
  contAll.classList.toggle("active");
  spanAll.classList.toggle("active");
}, 1000);
let choise = document.querySelectorAll(".filter-header ul  li");
let imges = document.querySelectorAll(".filter-content img");
choise.forEach((element) => {
  element.addEventListener("click", removeActive);
  element.addEventListener("click", imgfilter);
});

function removeActive() {
  choise.forEach((element) => {
    element.classList.remove("active");
  });
  this.classList.add("active");
  if (this.dataset.t === ".all") {
    let selectedImges = document.querySelectorAll(this.dataset.t);
    document.querySelector("section.filter-section ").style.height = "90vh";
    selectedImges.forEach((element) => {
      element.style.width = " 18%";
      element.style.height = " 150px";
    });
  }
  if (this.dataset.t === ".mobile") {
    let selectedImges = document.querySelectorAll(this.dataset.t);
    document.querySelector("section.filter-section ").style.height = "900px";
    selectedImges.forEach((element) => {
      element.style.width = " 45%";
      element.style.height = " 300px";
    });
  }
  if (this.dataset.t === ".ios") {
    let selectedImges = document.querySelectorAll(this.dataset.t);
    document.querySelector("section.filter-section ").style.height = "900px";
    selectedImges.forEach((element) => {
      element.style.width = " 45%";
      element.style.height = " 300px";
    });
  }
  if (this.dataset.t === ".web") {
    let selectedImges = document.querySelectorAll(this.dataset.t);
    document.querySelector("section.filter-section ").style.height = "900px";
    selectedImges.forEach((element) => {
      element.style.width = " 45%";
      element.style.height = " 300px";
    });
  }
}
function imgfilter() {
  imges.forEach((element) => {
    element.style.display = "none";
    let selectedImges = document.querySelectorAll(this.dataset.t);
    selectedImges.forEach((element) => {
      element.style.display = "block";
    });
  });
}
let barSpan = document.querySelectorAll(".bars span");
document.querySelector("body > div.gr > div > header > .bars").onclick =
  function () {
    document.querySelector(".menu").classList.toggle("active");
    barSpan.forEach((element) => {
      element.classList.toggle("active");
    });
  };
