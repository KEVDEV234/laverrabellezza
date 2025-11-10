const navLinks = document.querySelectorAll(".navmenu .navlink");
const menuOpenButten = document.querySelector("#menu-open-button");
const menuCloseButten = document.querySelector("#menu-close-button");


menuOpenButten.addEventListener("click", () => {
    //turgle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButten.addEventListener("click", () => menuOpenButten.click()
);

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButten.click() );
})

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesperview: 1
        },
        768: {
            slidesperview: 2
        },
        1024: {
            slidesperview: 3
        }
    }

  });