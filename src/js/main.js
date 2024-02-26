"use strict"

let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    let navMenuEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navMenuEl);

if(style.display === "none") {
    navMenuEl.style.display = "block";
}
else {
    navMenuEl.style.display = "none";
}
}

/*---------------------------------*/

//Hämta in data från Antagningsstatistik HT2023

async function fetchData(){
    try{
        const response = await fetch("https://studenter.miun.se/~mallar/dt211g/");
        const data = await response.json();
        displayStatistics(data); //Anropa funktion med data som argument
    }catch (error) {
        console.error('Error', error);
    }
    }

    fetchData();

//Funktion för att visa 6 mest sökta kurserna
function displayStatistics(data){
    //Filtrera ut kurser för HT2023
    const ht23Courses = data.filter(course => course.admissionRound === 'HT2023' && course.type === 'Kurs');

    //Sortera kurser baserat på antalet sökande
    const sortedCourses = ht23Courses.sort((a, b) => b.applicantsTotal - a.applicantsTotal);

    //Ta ut de 6 mest sökta kurserna
    const top6Courses = sortedCourses.slice(0, 6);

    //funktion för att skapa diagram

    createChart(top6Courses);
}

/*---------------------------------*/

//stapeldiagram

function createChart(top6Courses) {
    const labels = top6Courses.map(course => course.name);
    const data = top6Courses.map(course => parseInt(course.applicantsTotal));


const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Antal sökande',
        data: data,
        borderWidth: 1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
}); 
}

/*-----------------------------------------------------------------*/

//cirkeldiagram
document.addEventListener('DOMContentLoaded', function(){

    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            borderWidth: 1,
            backgroundColor: ["grey", "black", "darkred"]    
        }]
        },
    });        
    });
