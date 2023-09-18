/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
var count_sections = document.querySelectorAll("section").length;

var items = [];

for (var j = 1; j < count_sections + 1; j++) {
    var newitem = "Section " + j;
    items.push(newitem);
}

var i = 1;
var ul = document.getElementById("navbar__list");

items.forEach(function (item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = item;
    a.href = "#section" + i;
    a.classList.add("menu__link");
    i++;
    li.appendChild(a);
    ul.appendChild(li);
});

// Scroll to section on link click
var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href");
        var targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Set sections as active
var navLinks = document.querySelectorAll("nav ul li a");
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    var currentSectionId = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 50;
        var sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = "#" + section.id;
        }
    });

    navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === currentSectionId) {
            navLink.classList.add("active");
        }
    });
});

// Timeout to display navigation
var navbar = document.getElementById("navbar");
var timeout;

window.addEventListener("scroll", function () {
    clearTimeout(timeout);
    navbar.classList.remove("hidden");

    timeout = setTimeout(function () {
        navbar.classList.add("hidden");
    }, 3000);
});