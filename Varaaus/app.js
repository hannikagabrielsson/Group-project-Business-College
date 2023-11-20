const pyykkitupaElem = document.querySelector("#pyykkitupa");
const saunavuoroElem = document.querySelector("#saunavuoro");
const saunaContainer = document.querySelector(".sauna-container");
const pesukoneContainer = document.querySelector(".pesukone_container");
const omatvarauksetElem = document.querySelector(".omatvaraukset");
const btnmodal = document.querySelector(".btnmodal");
const modal2 = document.querySelector(".modal-2");
const pesukoneBox = document.querySelectorAll(".pesukone-box");
const dateCurrent = document.querySelector(".date-current");
const monthPrev = document.querySelector(".prev");
const monthnext = document.querySelector(".next");
const calendarContainer = document.querySelector(".calendar-container");
const showReservaition = document.querySelectorAll(".time button");
const modulBox2 = document.querySelector(".modulBox-2");
const saunaBox = document.querySelectorAll(".sauna-box");
const omatBox = document.querySelector(".omat-box");

const months = [
  "Tammikuu",
  "Helmikuu",
  "Maaliskuu",
  "Huhtikuu",
  "Toukokuu",
  "Kesäkuu",
  "Heinäkuu",
  "Elokuu",
  "Syyskuu",
  "Lokakuu",
  "Marraskuu",
  "Joulukuu",
];

// const date = new Date();
// monthPrev.addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   dateCurrent.innerHTML = months[date.getMonth()];
// });

// monthnext.addEventListener("click",()=>{
//   date.setMonth(date.getMonth()+1)
//   dateCurrent.innerHTML=months[date.getMonth()]
// })

// pyykkitupaElem.addEventListener("click", () => {
//   pesukoneContainer.classList.toggle("pesukone_container");
//   calendarContainer.classList.toggle("active");
// });

pyykkitupaElem.addEventListener("click", () => {
  pesukoneContainer.classList.toggle("pesukone_container");
});

pesukoneBox.forEach((pesu) => {
  pesu.addEventListener("click", (event) => {
    calendarContainer.classList.add("active");
    let pesukoneName=event.target.value
  });
});


saunavuoroElem.addEventListener("click", () => {
  saunaContainer.classList.toggle("sauna-container");
});

saunaBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    calendarContainer.classList.toggle("active");
  });
});

showReservaition.forEach((day) => {

    day.addEventListener("click", (event) => {
      modal2.classList.add("active");
  
      let dayValue = event.target.textContent;
      let divElem = document.createElement("div");
      divElem.className = "omat-box";
  
      let h2Elem = document.createElement("h2");
      h2Elem.innerHTML = 'PYYKKITUPA 1'
  
      let pday = document.createElement("p");
      pday.innerHTML = `PÄIVÄ: ${today}`;
  
      let pkelo = document.createElement("p");
      pkelo.innerHTML = `KLO: ${dayValue}`;
  
      let btnElem = document.createElement("button");
      btnElem.innerHTML = "PERUUTA VARAUS";
      btnElem.className = "peruuta-btn";
      btnElem.addEventListener("click", () => {
        modal2.innerHTML = "";
        modal2.style.display = "none";
      });
      divElem.append(h2Elem, pday, pkelo, btnElem);
      modulBox2.append(divElem);
      console.log(dayValue);
    })
    
 
  
});

// });

// calender cod**********
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
document.querySelector("#today2").valueAsDate = new Date();
