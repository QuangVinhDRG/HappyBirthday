const heartBtn = document.querySelector('.heart')
const wish = document.querySelector('.wish')
const card = document.querySelector('.card')
const heartBack = document.querySelector('.heart-back')

function addClass() {
    wish.classList.add('show')
    card.classList.add('show')
}

function removeClass() {
    wish.classList.remove('show')
    card.classList.remove('show')
}
