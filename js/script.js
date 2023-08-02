"use strict";
/*addEVENT on element */

const addeventOnElem = (elem, type, callback) => {
    if (elem.length > 1){
        elem.forEach(element => {
            element.addEventListener(type, callback);
        });

    }else{
        elem.addEventListener(type, callback);

    }

};


/**navbar Toggle */

const navbar = document.querySelector("[data-navbar]");
const  navLinks= document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-togloer]");



const toggleNav = () => {
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
};

addeventOnElem(navbarToggler, "click", toggleNav);

const closNav = () => {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
}

addeventOnElem(navLinks, "click", closNav);


/**header Active */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100){
        header.classList.add("active")
    }else(
        header.classList.remove("active")

    )
});