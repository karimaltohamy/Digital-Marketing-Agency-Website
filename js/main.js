// navbar sections
let navbar = document.querySelector(".navbar");

// navbar links
let sections = document.querySelectorAll("section");

window.onscroll = function () {
    // scroll navbar fixed
    if (window.scrollY > 20) {
        navbar.classList.add("header-scroll")
    }else {
        navbar.classList.remove("header-scroll")
    }

    // Change navigation active class on scroll 
    let scrollPositions = window.scrollY;

    sections.forEach((section) => {
        if (scrollPositions >= section.offsetTop -  section.offsetHeight * 0.25 && scrollPositions < section.offsetTop + section.offsetHeight * 0.25) {
            let idSection = section.attributes.id.value;
            removeActiveClass()
            addClassActive(idSection)
        }
    })
}

// function remove class active
function removeActiveClass() {
    document.querySelectorAll(".nav-link").forEach((ele) => {
        ele.classList.remove("active")
    })
}

// function add class active
function addClassActive(id) {
    let selector = `.nav-link[href="#${id}"]`
    document.querySelector(selector).classList.add("active")
}

// hide menu

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");

navLink.forEach((ele) => {
    ele.addEventListener("click", () => {
        navCollapse.classList.remove("show")
    });
})







