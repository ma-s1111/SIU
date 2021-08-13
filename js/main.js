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

function loadLanguage() {
    currentLang = localStorage.getItem('selectedLang');
    if (currentLang == "english") {
        inEnglish();
    }
    else if(currentLang == "arabic") {
        inArabic();
    }
}

function inArabic() {
    const enContainer = document.querySelector(".en");
    const arContainer = document.querySelector(".ar");

    enContainer.style.display = "none";
    arContainer.style.display = "block";

    localStorage.setItem("selectedLang", "arabic");


}

function inEnglish() {
    var enContainer = document.querySelector(".en");
    var arContainer = document.querySelector(".ar");
    
    enContainer.style.display = "block";
    arContainer.style.display = "none";

    localStorage.setItem('selectedLang', 'english');
}