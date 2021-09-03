const templates = document.querySelector('.js-templates')

// menu 

const burger = document.querySelector('.js-burger')
const menu = document.querySelector('#menu')

if (menu && burger) {
  burger.addEventListener('click', function (e) {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })

  const menuToggle = menu.querySelector('.js-menu-nav_about')
  const menuToggleBlock = menu.querySelector('.js-menu-nav_aboutBl')

  if (menuToggle && menuToggleBlock) {
    menuToggle.addEventListener('click', function (e) {
      let h = templates.querySelector('.js-menu-nav_aboutBl').clientHeight

      if (!menuToggleBlock.classList.contains('opened')) {
        menuToggleBlock.classList.add('opened')
        menuToggleBlock.style.height = h + 'px'
      } else {
        menuToggleBlock.classList.remove('opened')
        menuToggleBlock.style.height = 0
      }

    })
  }
}




const anchors = document.querySelectorAll('a.anchor')
if (anchors)
  anchors.forEach(function (item) {
    item.addEventListener('click', function () {
      let headerHeight = document.querySelector('.header').clientHeight
      let blockID = item.getAttribute('href').substring(1)
      let paddingTop = $('#' + blockID).css('padding-top')
      paddingTop = paddingTop.substr(0, paddingTop.length - 2)
      $("html, body").animate({
        scrollTop: $('#' + blockID).offset().top + Number(paddingTop) - 10 - headerHeight + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    })
  })


let articleSlideOffset = (window.innerWidth - window.innerWidth * 0.92) / 2
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


// Валидация формы обратной связи (сотрудничество, франшиза и тд)
$('input.phone').mask('+0 (000) 000 00 00');
$('input.phone').on('input', function () {
  let val = $(this).val();
  if (val[1] == 8) {
    $(this).val(7 + val.slice(2));
  }
});

$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value) // has only allowed chars letter
}, "Недопустимое значение");

$.validator.addMethod("emailMask", function (value) {
  return /^[a-zA-Z@.-_]+$/.test(value) // has only allowed chars letter
}, "Недопустимое значение");

$('#brifForm').validate({
  rules: {
    email: {
      email: true, 
      required: true,
    },
    name: {
      required: true,
      pwcheckallowedchars: true,
    },
    phone: {
      required: true
    },
    message: {
    },
    privacy: {
      required: true
    },

  },
  messages: {
    email: {
      required: jQuery.validator.format("Поле не заполнено"),

      email: jQuery.validator.format('Введен некорректный e-mail')
    },
    name: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Минимум 2 символа"),
      maxlength: jQuery.validator.format("Максимум 80 символов"),
    },
    phone: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),

    },
    message: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Минимум 10 символов"),
    }, 
    privacy: {
      required: jQuery.validator.format("Поле не заполнено"),

    }
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onkeyup: function (element) {
    let submit = document.querySelector(' #brifForm .form-submit')

    if ($('#brifForm').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },


});

Fancybox.bind("[data-fancybox]", {
  // Your options go here
});

