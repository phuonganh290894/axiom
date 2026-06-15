document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 80){

        navbar.style.background = "#000";

    }else{

        navbar.style.background = "rgba(0,0,0,0.4)";
    }

});
