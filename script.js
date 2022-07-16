'use strict'

//Header sticky navbar

window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//section-1 JS
//icons

//değişkenler
const icons = document.querySelectorAll('.section-1 i');
let i = 1;

//Tekrarlanan animasyon
setInterval(() => {
    i++;
    const icon = document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');

    //nextElementSibling son elemana geldikten sonra hata verir. Bunu engellemek için globalde bir i değişkeni tanımlayıp her tekrarda i'yi büyütüp koşul olarak icons.length'i geçmemesini sağladım
    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    } else{
        icon.nextElementSibling.classList.add('change');
    }
}, 2500)