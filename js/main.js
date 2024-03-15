document.addEventListener('DOMContentLoaded', () => {

  
  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.menu__list'); 
  const bodyLock = document.querySelector('body'); 

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); 
      burger.classList.toggle('burger--active'); 
      bodyLock.classList.toggle('lock'); 

    document.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu__list--active')
        burger.classList.remove('burger--active')
        bodyLock.classList.remove('lock');
      })
    })
  });
});

var mixer = mixitup('.porfolio__images');

window.onscroll = function showHeader() {
  let header__inner = document.querySelector('.header__inner');

  if (window.pageYOffset > 200) {
    header__inner.classList.add('header__fixed');
  } else {
    header__inner.classList.remove('header__fixed');
  }
}

$(document).ready(function () {
  $(".menu a, .header__link, .logo").on("click",  function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});