const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        //toggle navigation bar
        nav.classList.toggle('nav-active');

        //animate links in nav
        navLinks.forEach((link, index) => {
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