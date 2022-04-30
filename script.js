// navbar JS

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// Main ikiye bölünme efekti JS

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'))

