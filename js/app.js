//CV content

const url = "cv-erfarenheter.json";

//dates work experience
const biltemaDate = document.querySelector(".biltema-date");
const allPerformDate = document.querySelector(".all-perform-date");
const antistillaDate = document.querySelector(".antistilla-date");
const cykelmagnetenDate = document.querySelector(".cykelmagneten-date");
const maxDate = document.querySelector(".max-date");
//Employers
const biltema = document.querySelector(".biltema");
const allPerformAll = document.querySelector(".allperform-all");
const allPerformPerform = document.querySelector(".allperform-perform");
const antistilla = document.querySelector(".antistilla");
const AB = document.querySelector(".ab");
const cykelmagneten = document.querySelector(".cykelmagneten");
const max = document.querySelector(".max");
const hamburgerkedja = document.querySelector(".hamburgerkedja");
//Edjucation
const yh = document.querySelector(".yh");
const chas = document.querySelector(".chas");
const fullstack = document.querySelector(".fullstack");
const yhDate = document.querySelector(".yh-date");
//
const ltu = document.querySelector(".ltu");
const systemvetenskap = document.querySelector(".systemvetenskap");
const ltuDate = document.querySelector(".ltu-date");
//
const su = document.querySelector(".su");
const japanska = document.querySelector(".japanska");
const suDate = document.querySelector(".su-date");
//
const mediagymnasiet = document.querySelector(".mediagymnasiet");
const teknikprog = document.querySelector(".teknikprog");
const inriktning = document.querySelector(".inriktning");
const mediagymnasietDate = document.querySelector(".mediagymnasiet-date");

loadData();
function loadData() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      //dates work experience
      biltemaDate.innerHTML = data.experiences[0].date;
      allPerformDate.innerHTML = data.experiences[1].date;
      antistillaDate.innerHTML = data.experiences[2].date;
      cykelmagnetenDate.innerHTML = data.experiences[3].date;
      maxDate.innerHTML = data.experiences[4].date;

      //Employers
      biltema.innerHTML = data.experiences[0].Employer;
      allPerformAll.innerHTML = data.experiences[1].Employer;
      allPerformPerform.innerHTML = data.experiences[1].split;
      antistilla.innerHTML = data.experiences[2].Employer;
      AB.innerHTML = data.experiences[2].split;
      cykelmagneten.innerHTML = data.experiences[3].Employer;
      max.innerHTML = data.experiences[4].Employer;
      hamburgerkedja.innerHTML = data.experiences[4].split;

      //Edjucation
      yh.innerHTML = data.edjucation[3].YH;
      chas.innerHTML = data.edjucation[3].school;
      fullstack.innerHTML = data.edjucation[3].subject;
      yhDate.innerHTML = data.edjucation[3].date;
      //
      ltu.innerHTML = data.edjucation[2].school;
      systemvetenskap.innerHTML = data.edjucation[2].subject;
      ltuDate.innerHTML = data.edjucation[2].date;
      //
      su.innerHTML = data.edjucation[1].school;
      japanska.innerHTML = data.edjucation[1].subject;
      suDate.innerHTML = data.edjucation[1].date;
      //
      mediagymnasiet.innerHTML = data.edjucation[0].school;
      teknikprog.innerHTML = data.edjucation[0].subject;
      inriktning.innerHTML = data.edjucation[0].inriktning;
      mediagymnasietDate.innerHTML = data.edjucation[0].date;
    });
}
//---------------------------------------------------------------------------------------------

// Nav highlight PC view
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset + 100;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".top-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".top-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

//--------------------------------------------------------------------------------------------

//portfolio cards

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

//---------------------------------------------------------------------------------------------

//portfolio modal carousel

const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slideLength = leftSlide.querySelectorAll("div").length;

let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slideLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlide++;

    if (currentSlide > slideLength - 1) {
      currentSlide = 0;
    }
  } else if (btn == "left") {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slideLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    (slideLength - 1 - currentSlide) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

//---------------------------------------------------------------------------------------------

const leftSlideWork = document.querySelector(".left-slides-work");
const rightSlideWork = document.querySelector(".right-slides-work");
const leftBtnWork = document.querySelector(".left-btn-work");
const rightBtnWork = document.querySelector(".right-btn-work");
const slideLengthWork = leftSlideWork.querySelectorAll("div").length;

let currentSlideWork = 0;

rightSlideWork.style.transform = `translateY(-${(slideLengthWork - 1) * 100}%)`;

leftBtnWork.addEventListener("click", () => changeSlideWork("left"));
rightBtnWork.addEventListener("click", () => changeSlideWork("right"));

function changeSlideWork(btn) {
  if (btn == "right") {
    currentSlideWork++;

    if (currentSlideWork > slideLengthWork - 1) {
      currentSlideWork = 0;
    }
  } else if (btn == "left") {
    currentSlideWork--;

    if (currentSlideWork < 0) {
      currentSlideWork = slideLengthWork - 1;
    }
  }

  rightSlideWork.style.transform = `translateY(-${
    (slideLengthWork - 1 - currentSlideWork) * 100
  }%)`;
  leftSlideWork.style.transform = `translateY(-${currentSlideWork * 100}%)`;
}
//---------------------------------------------------------------------------------------------

const leftSlideHobby = document.querySelector(".left-slides-hobby");
const rightSlideHobby = document.querySelector(".right-slides-hobby");
const leftBtnHobby = document.querySelector(".left-btn-hobby");
const rightBtnHobby = document.querySelector(".right-btn-hobby");
const slideLengthHobby = leftSlideHobby.querySelectorAll("div").length;

let currentSlideHobby = 0;

rightSlideHobby.style.transform = `translateY(-${
  (slideLengthHobby - 1) * 100
}%)`;

leftBtnHobby.addEventListener("click", () => changeSlideHobby("left"));
rightBtnHobby.addEventListener("click", () => changeSlideHobby("right"));

function changeSlideHobby(btn) {
  if (btn == "right") {
    currentSlideHobby++;

    if (currentSlideHobby > slideLengthHobby - 1) {
      currentSlideHobby = 0;
    }
  } else if (btn == "left") {
    currentSlideHobby--;

    if (currentSlideHobby < 0) {
      currentSlideHobby = slideLengthHobby - 1;
    }
  }

  rightSlideHobby.style.transform = `translateY(-${
    (slideLengthHobby - 1 - currentSlideHobby) * 100
  }%)`;
  leftSlideHobby.style.transform = `translateY(-${currentSlideHobby * 100}%)`;
}
//---------------------------------------------------------------------------------------------

const leftSlideUnfinished = document.querySelector(".left-slides-unfinished");
const rightSlideUnfinished = document.querySelector(".right-slides-unfinished");
const leftBtnUnfinished = document.querySelector(".left-btn-unfinished");
const rightBtnUnfinished = document.querySelector(".right-btn-unfinished");
const slideLengthUnfinished =
  leftSlideUnfinished.querySelectorAll("div").length;

let currentSlideUnfinished = 0;

rightSlideUnfinished.style.transform = `translateY(-${
  (slideLengthWork - 1) * 100
}%)`;

leftBtnUnfinished.addEventListener("click", () =>
  changeSlideUnfinished("left")
);
rightBtnUnfinished.addEventListener("click", () =>
  changeSlideUnfinished("right")
);

function changeSlideUnfinished(btn) {
  if (btn == "right") {
    currentSlideUnfinished++;

    if (currentSlideUnfinished > slideLengthUnfinished - 1) {
      currentSlideUnfinished = 0;
    }
  } else if (btn == "left") {
    currentSlideUnfinished--;

    if (currentSlideUnfinished < 0) {
      currentSlideUnfinished = slideLengthUnfinished - 1;
    }
  }

  rightSlideUnfinished.style.transform = `translateY(-${
    (slideLengthUnfinished - 1 - currentSlideUnfinished) * 100
  }%)`;
  leftSlideUnfinished.style.transform = `translateY(-${
    currentSlideUnfinished * 100
  }%)`;
}
