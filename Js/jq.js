$(document).ready(function(){

/* УНИВЕРСАЛЬНОЕ ОТКЛЮЧЕНИЕ СКРОЛЛА*/
function disableScroll() {
var pagePosition = $(window).scrollTop();
  $('body').addClass('disable-scroll');
  $('body').attr('data-position', pagePosition);
  $('body').css('top', -pagePosition + 'px')
}

function enableScroll() {
  let pagePosition = parseInt($('body').attr('data-position'), 10);
    $('body').css('top', 'auto')
    $('body').removeClass('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    $('body').removeAttr('data-position')
}

	$(window).resize(function() {
    	if ($(window).width() > 1360) {
      	$('.b-nav--mobil').show()

      	}
      
    	else {
       		$('.b-nav--mobil').hide()
    	}
})
/* ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ */

	function scrollToTop(sectionId) {
  		var targetScroll =  $(sectionId).offset().top;
  			$('html, body').animate({
      			scrollTop: (targetScroll - 100)
  				}, 500);
		}

	$('li a[href*="#"]').on('click', function(){
		sectionId = $(this).attr('href');
		scrollToTop(sectionId);
});

/* Форма заказать звонок */

  $('.b-buttonjs').click(function () {
    $('.b-form-blockJs').show('slow');
    $('.js-overlay-modal').show('slow');
    disableScroll()
  });

/* Закрытие модальных окон через кнопки */

   $('.close-js').click(function() {
      $('.b-form-blockJs').hide('slow');
      $('.js-overlay-modal').hide('slow');
      $('.b-aboutme-modal').hide('slow');
      $('.b-price').hide('slow')
      $('.b-form-block-order-js').hide('slow');
      enableScroll()
    });


  /* Закрытие модальных окон через подложку*/

   $('.js-overlay-modal').click(function() {
       $('.js-overlay-modal').hide('slow');
       $('.b-form-blockJs').hide('slow');
       $('.b-aboutme-modal').hide('slow');
       $('.b-price').hide('slow')
       $('.b-form-block-order-js').hide('slow');
       enableScroll()


   });
/* МОДАЛЬНОЕ ОКНО ОБО МНЕ */

   $('.about-me-js').click(function() {
    $('.b-aboutme-modal').show('slow');
     $('.js-overlay-modal').show('slow');
     disableScroll()
   });

/* МОДАЛЬНОЕ ОКНО ПРАЙС */

   $('.b-price-modal').click(function(event){
    event.preventDefault();
    $('.b-price').show('slow');
    $('.js-overlay-modal').show('slow');
    disableScroll()

   });

/* МОДАЛЬНОЕ ОКНО ЗАКАЗАТЬ ПРОЕКТ */
  $('.b-order-modal').click(function() {
    $('.b-form-block-order-js').show('slow');
     $('.js-overlay-modal').show('slow');
     disableScroll()

  });

  /* ЛЕТАЮЩИЕ ТЕГИ */ 
  $('.b-advertising__icon-one').addClass('b-advertising__icon--bracket');
  $('.b-advertising__icon-two').addClass('b-advertising__icon--div');
  $('.b-advertising__icon-free').addClass('b-advertising__icon--lattice');
  $('.b-advertising__icon-four').addClass('b-advertising__icon--closing');
  $('.b-advertising__icon-five').addClass('b-advertising__icon--div-two');
  $('.b-advertising__icon-six').addClass('b-advertising__icon--closing-two')

/* BURGER MENU */

  $('.b-burger-boxjs').click(function() {
    $('.b-nav--mobil').show()
  });

  $('.burger-close-js').click(function() {
    $('.b-nav--mobil').hide()

  });

/* МАСКА ДЛЯ ТЕЛЕФОНА */
  $ ( 'input[type="tel"]') . inputmask ( "8 (987) 687 13 71" ) ;   // статическая маска 
  $ ('input[type="tel"]') . inputmask ( { "mask" : "+7 (999) 999 99 99" } ) ; // указание options $ ( селектор ) . inputmask ( "9-a {1,3} 9 {1,3}" ) ; // маска с динамическим синтаксисом } 


/* ВАЛИДАЦИЯ ФОРМ */
  $('form').each(function() {
        $(this).validate({
          /*errorPlacement(error, element) {
            return true;
          },*/
          focusInvalid: false,
          rules: {
            number: {
              required: true,
            },
            name: {
              required: true,
            },
            text: {
              required: true,
            }
          },
          messages: {
            number: {
              required: 'Введите номер'
            },
            name: {
              required: 'Введите имя',
            },
            text: {
              required: 'Введите текст'
            }
          },

         submitHandler(form) {
          let th = $(form);

          $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
          // eslint-disable-next-line func-names
        }).done(() => {
          console.log('Hello')
          th.trigger('reset');
        });

        return false;
} 
});
});
       
/* МЕНЮ НАВИГАЦИИ */
function myFunction(x) {
  if (x.matches) {
     $('.services-js').click(function() {
        $('.b-nav--mobil').hide()
        $('.overlay').hide()
     });

     $('.portfolio-js').click(function(){
        $('.b-nav--mobil').hide()
        $('.overlay').hide()
     });

     $('.cost-js').click(function() {
        $('.b-nav--mobil').hide()
        $('.overlay').hide()
     })
      
    }

  else {
    $('.services-js').click(function() {
        $('.b-nav--mobil').show()
    });

    $('.portfolio-js').click(function() {
      $('.b-nav--mobil').show()
    });

    $('.cost-js').click(function() {
      $('.b-nav--mobil').show()
    })
  }
}

  var x = window.matchMedia('(max-width: 1361px)')
  myFunction(x) 
    x.addListener(myFunction)

 
 /* МОДАЛЬНОЕ ОКНО СПАСИБО */

 $('.link-fank').on('click',function(event)  {
  console.log('клик');
    
  if ($('.b-form-block__name').val() && $('.b-form-block__number').val()) {
    $('.b-form-fank').addClass('flex')
        $('.b-form-fank').show()
}
  $('.b-form-fank__link').click(function() {
      $('.b-form-fank').hide();
      $('.b-form-blockJs').hide();
      $('.b-form-block-order-js').hide();
      $('.overlay').hide();
       enableScroll()
    })
  
 });


   $('.submit-text').click(function() {
      console.log('клик');
    if($('.b-form-order__name').val() && $('.b-form-order__number').val() && $('.b-textaria').val() )  {
       $('.b-form-fank').addClass('flex')
        $('.b-form-fank').show()
    }

    $('.b-form-fank__link').click(function() {
      $('.b-form-fank').hide();
      $('.b-form-block-order-js').hide();
      $('.overlay').hide();
       enableScroll()
    })
   
   })
   
});
 

