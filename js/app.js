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
/* ToDoList:

    1. Make portfolio in to different interactive categories, "free time projects" "School projects"
                                                              "work projects"                                                            
    2. Make Edjucation and work experiece sections in to slideshows 
    
    3. (optional) Add fun interactive stuff 

*/
