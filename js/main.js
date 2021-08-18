const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        //toggle navigation bar
        nav.classList.toggle('nav-active');

        //animate links in nav
        navLinks.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards 0.5s";
            } 
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

const navSlide2 = () => {
    var burger = document.querySelector('.burger2');
    const nav = document.querySelector('.nav-links2');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        //toggle navigation bar
        nav.classList.toggle('nav-active');

        //animate links in nav
        navLinks.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards 0.5s";
            } 
        });

        burger.classList.toggle('toggle');
    });
}

navSlide2();

const navSlide3 = () => {
    var burger = document.querySelector('.burger3');
    const nav = document.querySelector('.nav-links3');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        //toggle navigation bar
        nav.classList.toggle('nav-active');

        //animate links in nav
        navLinks.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards 0.5s";
            } 
        });

        burger.classList.toggle('toggle');
    });
}

navSlide3();

function loadLanguage() {
    currentLang = localStorage.getItem('selectedLang');
    if (currentLang == "english") {
        inEnglish();
    }
    else if(currentLang == "arabic") {
        inArabic();
    }
    else if(currentLang == "swedish") {
        inSwedish();
    }
}

function inArabic() {
    var enContainer = document.querySelector(".en");
    var arContainer = document.querySelector(".ar");
    var svContainer = document.querySelector(".sv");

    svContainer.style.display = "none";
    enContainer.style.display = "none";
    arContainer.style.display = "block";

    localStorage.setItem("selectedLang", "arabic");
}

function inEnglish() {
    var enContainer = document.querySelector(".en");
    var arContainer = document.querySelector(".ar");
    var svContainer = document.querySelector(".sv");
    
    enContainer.style.display = "block";
    arContainer.style.display = "none";
    svContainer.style.display = "none";

    localStorage.setItem('selectedLang', 'english');
}

function inSwedish() {
    var enContainer = document.querySelector(".en");
    var arContainer = document.querySelector(".ar");
    var svContainer = document.querySelector(".sv");
    
    svContainer.style.display = "block";
    enContainer.style.display = "none";
    arContainer.style.display = "none";

    localStorage.setItem('selectedLang', 'swedish');
}

function showDepartments(id) {
    const allDepartments = document.querySelectorAll(".department");
    const selectedDepartments = document.getElementById(id);

    for (let i = 0; i < allDepartments.length; i++) {
        
        allDepartments[i].style.display = "none";

        if(allDepartments[i] == selectedDepartments) {
            allDepartments[i].style.display = "block";
        }
    }
}

function showProgramme(id) {
    const allProgrammes = document.querySelectorAll(".programme");
    const selectedProgramme = document.getElementById(id);

    for (let i = 0; i < allProgrammes.length; i++) {

        allProgrammes[i].style.display = "none";

        if(allProgrammes[i] == selectedProgramme) {
            allProgrammes[i].style.display = "block";
        }
    }
}

const asideItems = document.querySelectorAll('aside li');
asideItems.forEach(item => {
    item.addEventListener('click', function() {
        asideItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    })
})