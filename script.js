// navbar JS

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// navbar scroll

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 1 * 0.5

    nav.forEach( nav => {
        const navTop = nav.getBoundClientRect().navTop

        if(navTop < triggerBottom){
            nav.classList.remove('active')
        } else{
            nav.classList.add('active')
        }
    })
}