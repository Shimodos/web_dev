// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     // speed: 800,
//     // adaptiveHeight: true,
//     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//     responsive: [
//         {
//         breakpoint: 992,
//         settings: {
//             dots: true,
//             arrows: false
//             }
//         }
//     ]
//     });    
// });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

(function($) {
$(function() {
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlider(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

    toggleSlider('.catalog-item__link');
    toggleSlider('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
            $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Введите свое имя",
                phone: "Введите свой номер телефона",
                email: {
                  required: "Введите свой e-mail",
                  email: "Ваш адрес долже быть в формате name@domain.com"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // $('input[name=phone]').mask("+7(999) 999-99-99");
      $('input[name=phone]').mask("+7 (999) 999-99-99");

});
})(jQuery);
