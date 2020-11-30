'use strict';
//------------------------------
// Site: Sto-Orbita_Scripts
//------------------------------
$.noConflict();

window.addEventListener('DOMContentLoaded', () => {
  //SEND FORM

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо',
    failure: 'Упс',
  };

  forms.forEach(item => {
    postData(item);
  });


  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const reqXHR = new XMLHttpRequest();
      reqXHR.open('POST', 'server.php');

      reqXHR.setRequestHeader('Content-type', 'application/json'); //json
      const formData = new FormData;

      const object = {};                              //json
      formData.forEach(function(value, key) {         //json
        object[key] = value;                          //json
      });

      const json = JSON.stringify(object);             //json

      // reqXHR.send(formData);
      reqXHR.send(json);                             //json
      
      reqXHR.addEventListener('load', () => {
        if (reqXHR.status === 200) {
          console.log(reqXHR.response);
          statusMessage.textContent = message.success;
          form.reset();
        } else {
          statusMessage.textContent = message.failure;
        }
      });
    });
  }

  // const form = document.querySelectorAll("form");

  // form.forEach((item) => {
  //   item.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     formSend(item);
  //   });
  // });

  // function formSend(form) {
  //   const input = form.querySelectorAll("._req");

  //   input.forEach((e, item) => {
  //     if(item === e.target) {
  //       formValidate(item);
  //     }

  //     let error = formValidate(item);
  //     if(error === 0) {
  //       console.log('y')
  //     } else {
  //       console.log('n')
  //     }

  //   });

  //   function formValidate(item) {
  //     let error = 0;
  //     item.classList.remove("_error");
  //     let inpVal = item.value;
  //     if (inpVal === "") {
  //       item.classList.add("_error");
  //       error++;
  //       console.log(error)
  //     }
  //   }
  // }

  // Burger MENU //
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
      menu.toggleClass('burger-menu_active');
      if (menu.hasClass('burger-menu_active')) {
        $('body').animate('overflow', 'hidden');
      } else {
        $('body').animate('overflow', 'visible');
      }
    }
  }

  burgerMenu('.burger-menu');

  // BTN ToTOP
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('.totop').fadeIn();
      } else {
        $('.totop').fadeOut();
      }
    });
    $('.totop').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 1200);
    });
  });

  // SLOW-SCROLL
  function slowScroll(targetSelector, minusScroll) {
    $(targetSelector).on('click', 'a', function (e) {
      e.preventDefault();
      let id = $(this).attr('href');
      let top = $(id).offset().top;

      $('body,html').animate({ scrollTop: top - minusScroll }, 700);
    });
  }

  slowScroll('nav .links', 100);
  slowScroll('.services-btn', 20);
  slowScroll('.diagnosis-btn', 100);
  slowScroll('nav .nav-col', 100);

  // });

  // Swipers
  var swiper = new Swiper('.swiper-container-first', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper('.swiper-container-second', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      560: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  // MASK PHONES
  $(function ($) {
    $('.phone').mask('(099) 999-99-99');
  });

  // MODAL
  function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');

    if (modalTimerId) {
      clearInterval(modalTimerId);
    }
  }

  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
  }

  function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

    modalTrigger.forEach((item) => {
      item.addEventListener('click', () =>
        openModal(modalSelector, modalTimerId)
      );
    });

    modal.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('show') ||
        e.target.getAttribute('data-close') == ''
      ) {
        closeModal(modalSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal(modalSelector);
      }
    });

    // function showModalByScroll() {
    //   if (
    //     window.pageYOffset + document.documentElement.clientHeight >=
    //     document.documentElement.scrollHeight
    //   ) {
    //     openModal(modalSelector, modalTimerId);
    //     window.removeEventListener("scroll", showModalByScroll);
    //   }
    // }

    // window.addEventListener("scroll", showModalByScroll);
  }

  modal('.openModalBtn', '.modal');

  // STOP - PLAY VIDEO
  const video = document.querySelector('#myVideo');

  function checkMediaQuery() {
    if (window.innerWidth < 768) {
      video.pause();
      video.currentTime = 5;
    } else {
      video.play();
    }
  }

  window.addEventListener('resize', checkMediaQuery);

  //Header Scroll Size
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('header .wrapper').animate(
        {
          padding: '5px',
        },
        30,
        'linear'
      );
    }
    // if ($(this).scrollTop() < 200) {
    //   $("header .wrapper").animate(
    //     {
    //       padding: "20px",
    //     },
    //     30,
    //     "linear"
    //   );
    // }
  });

  // SHOW-HIDE-HEADER-(MOBILE-DEVICES)
  let scrollPos = 0;
  let burgerMenuClass = $('.burger-menu');

  $(window).scroll(function () {
    let st = $(this).scrollTop();
    if (burgerMenuClass.hasClass('burger-menu_active')) {
      return false;
    }
    if (st < scrollPos && window.innerWidth < 768) {
      $('header').addClass('showHeader');
    } else {
      $('header').removeClass('showHeader');
    }
    scrollPos = st;
  });
});

// CHANGE-BRANDS-BLOCK-ByScroll-BOTTOM
let brandsBlock = document.querySelector('.cars-list-block');
let brandsLinks = document.querySelector('.brands-list');

function changeBrandsBlockByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight &&
    window.innerWidth > 768
  ) {
    brandsBlock.classList.add('brands-block-sticky');
    brandsBlock.style.minHeight = '60px';
  } else if (window.innerWidth < 768) {
    brandsBlock.classList.remove('brands-block-sticky');
  } else {
    brandsBlock.style.minHeight = '40px';
  }
}

window.addEventListener('scroll', changeBrandsBlockByScroll);
brandsLinks.addEventListener('click', () => {
  brandsBlock.classList.remove('brands-block-sticky');
  //  removeEventListener('scroll', changeBrandsBlockByScroll);
  window.addEventListener('resize', changeBrandsBlockByScroll);
});

// FAVICON
$.mFancyTitle({
  mftMissYou: false,
  mftFaviconBlink: [false, true],
  mftFaviconBlinkInterval: [500, 1000],
  mftFaviconAltIcon: {
    visible: {
      'apple-touch-icon-precomposed': '/img/fav2.jpg',
      'shortcut icon': '/img/fav2.jpg',
    },
    hidden: {
      'apple-touch-icon-precomposed': '/img/fav3.jpg',
      icon: '/img/fav3.jpg',
      'shortcut icon': '/img/fav3.jpg',
    },
  },
});
