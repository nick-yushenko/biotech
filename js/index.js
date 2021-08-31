// menu 

const burger = document.querySelector('.js-burger')
const menu = document.querySelector('#menu')

if (menu && burger) {
  burger.addEventListener('click', function (e) {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })
}


let articleSlideOffset = (window.innerWidth -  window.innerWidth * 0.92) / 2
console.log(articleSlideOffset)
const articleSlider = new Swiper('.article-slider', {
  speed: 400,
  direction: 'horizontal',
  slidesPerView: "auto",
  slidesOffsetBefore: articleSlideOffset,
  slidesOffsetAfter: articleSlideOffset,
  spaceBetween: 15,

  pagination: {
    el: '.article-pagination',
  },

});


// profileSlider.slides.forEach(function (slide) {
//   slide.addEventListener('click', function (e) {
//     let modalProfile = document.querySelector('.modal-profile')
//     if (modalProfile) {
//       modalProfile.classList.add('active')
//       document.querySelector('body').style.overflow = 'hidden'
//       modalProfileSlider.init()
//       modalProfileSlider.slideTo(profileSlider.clickedIndex)

//     }
//   })
// })