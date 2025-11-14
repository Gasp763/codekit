"use strict";

const progressBar = document.querySelector(".scrollBar__progress");

if (progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){



    /*
        calcul
        document.body.scrollHeight scroll total de la page
        window.innerHeight hauteur du viewport
        window.scrollY valeur de scroll
    */

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const readPercentage = (currentScroll / maxScroll) * 100;/*Pourcentage de scroll*/
    progressBar.style.setProperty("--scrollbar-width", readPercentage+ "%");

    if(currentScroll>=0){
        progressBar.style.setProperty("--scrollBar-width", readPercentage + "%");
    }




}
