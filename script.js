'use strict'

//Header sticky navbar

window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//smooth scroll JS
const links = document.querySelectorAll('.nav-list a');

function smoothScroll(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

for(let link of links){
    link.addEventListener('click', smoothScroll);
}




//section-1 JS
//icons

//değişkenler
const icons = document.querySelectorAll('.section-1 i');
let iIcon = 1;

//Tekrarlanan animasyon
setInterval(() => {
    iIcon++;
    const icon = document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');

    //nextElementSibling son elemana geldikten sonra hata verir. Bunu engellemek için globalde bir i değişkeni tanımlayıp her tekrarda i'yi büyütüp koşul olarak icons.length'i geçmemesini sağladım
    if(iIcon > icons.length){
        icons[0].classList.add('change');
        iIcon = 1;
    } else{
        icon.nextElementSibling.classList.add('change');
    }
}, 2500);


//section-3 JS

//set interval ile toggle cağır
const arrows = document.querySelectorAll(".arrow-p");
let iParagraph = 1;


setInterval(() =>{
    iParagraph++;
    const arrow = document.querySelector(".arrow-container .change-arr")
    arrow.classList.remove('change-arr');

    if(iParagraph > arrows.length){
        arrows[0].classList.add('change-arr');
        iParagraph = 1;
    } else{
        arrow.nextElementSibling.classList.add('change-arr')
    }
}, 1000)