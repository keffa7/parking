"use strict";

/* 
imat definiran parking
da je to array
na klik, generiras neki random broj 2342352352
i onda ga upises u array
al prvo na klik vidis ako u njemu ima mjesta
znaci da mu broj itema ne prelazi 30 il vec neki broj koji hoces
stavi 5, da mos lagano testirat, da ne mroas klikat 30puta da ga popunis
stisnes in, smanjuje se free spots
out, povecava
ako je full, stavi da je crvene boje ovaj tekst
e i da, ispod toga ispisi sve tablice koje su parkirane kao
*/

const btnIn = document.querySelector(".btn-in");
const btnOut = document.querySelector(".btn-out");
const semafor = document.querySelector(".semafor");
const idList = document.querySelector(".id-list");
let parking = [];
let spots = 5;
let freeSpots = spots - parking.length - 1 + 1;
semafor.textContent = `Free Space: ${freeSpots}`;

function randomId() {
  return `Car ID: ${Math.trunc(Math.random() * 123456)}`;
}

btnIn.addEventListener("click", () => {
  if (parking.length + 1 <= spots) {
    parking.push(randomId());
    freeSpots--;
    semafor.textContent = `Free Space: ${freeSpots}`;
    if (parking.length === spots) semafor.classList.add("active");
  }
  idList.textContent = parking;
});

btnOut.addEventListener("click", () => {
  if (parking.length > 0) {
    freeSpots++;
    semafor.classList.remove("active");
    semafor.textContent = `Free Space: ${freeSpots}`;
    parking.shift();
  } else {
    return;
  }
  idList.textContent = parking;
});
