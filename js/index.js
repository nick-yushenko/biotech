// menu 

const burger = document.querySelector('.js-burger')
const menu = document.querySelector('#menu')

if (menu && burger) {
  burger.addEventListener('click', function (e) {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })
}