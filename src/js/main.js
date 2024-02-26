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

//stapeldiagram
document.addEventListener('DOMContentLoaded', function(){

const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
}) 
});

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
