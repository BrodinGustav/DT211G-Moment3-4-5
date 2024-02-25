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

//diagram
document.addEventListener('DOMContentLoaded', function(){

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type:'bar',
    data:{
        labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets:[{
            label:'# of votes',
            data:[12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
});
});
