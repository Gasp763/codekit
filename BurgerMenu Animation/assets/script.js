"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

const menuLinks= document.querySelectorAll(".menu__el a");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);

    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", menuOpen);
    }
}

function menuOpen(){
    menu.classList.toggle("menu--open");
    body.classList.toggle("no--scroll");
    
}
    menu.classList.toggle("menu--open");
