
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
section.forEach((i) => {
//returns the number of pixels that the document is currently scrolled vertically
let top = window.scrollY;
let offset = i.offsetTop - 150;
let height = i.offsetHeight;
let id = i.getAttribute("id");

if (top >= offset && top < offset + height) {
    menu.forEach((link) => {
    link.classList.remove("active");
    document
        .querySelector("header nav ul li a[href*=" + id + "]")
        .classList.add("active");
    });
};
})};

function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
};
};
  
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();