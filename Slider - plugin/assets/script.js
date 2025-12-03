"use strict";

const splideEl = document.querySelector(".splide");

if (splideEl){
    const splide = new Splide( splideEl, {
    type: "loop",
} );
splide.mount();
}

