"use strict";

const backToTop = document.querySelector(".backToTop")


if(backToTop){
    window.addEventListener("scroll", showBackToTop);
}

function showBackToTop(){
    const currentScroll = window.scrollY;
    if(currentScroll > 300){
        backToTop.classList.add("backToTop--show");
    }else{
        backToTop.classList.remove("backToTop--show");
    }
}