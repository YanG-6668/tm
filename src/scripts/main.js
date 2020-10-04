'use strict';

function burgerMenu() {
  const burgerBtnOpen = document.querySelector('.header__burger');
  const burgerBtnClose = document.querySelector('.nav__close');
  const mobileMenu = document.querySelector('.nav__mobile');
  const mobileLinks = document.querySelectorAll('.nav__link');
  const mobileListLinks = document.querySelectorAll('.nav__list-link');

  burgerBtnOpen.addEventListener('click', () => {
    mobileMenu.style.transform = `translateX(0)`;
  });

  burgerBtnClose.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(-100%)';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.transform = 'translateX(-100%)';
    });
  });

  mobileListLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.transform = 'translateX(-100%)';
    });
  });
}

burgerMenu();

function questionAndAnswers() {
  const questions = document.querySelectorAll('.questionsAndAnswers__item');

  questions.forEach(question => {
    const btn = question.querySelector('.questionsAndAnswers__item-btn');

    btn.addEventListener('click', () => {
      question.classList.toggle('show-answer');
    });
  });
}

questionAndAnswers();

function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', () => {
  parallax('.header', window.scrollY, 1);
});

function gallery() {
  const modal = document.querySelector('.modal');
  const original = document.querySelector('.full-img');
  const previews = document.querySelectorAll('.ourWork__wrapper img');

  previews.forEach(preview => {
    preview.addEventListener('click', () => {
      modal.classList.add('open');
      original.classList.add('open');

      const originalSrc = preview.src;

      original.src = originalSrc;
    });
  });

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('open');
      original.classList.remove('open');
    }
  });
}

gallery();

function scroll() {
  function smoothScroll(target, duration) {
    const targetEl = document.querySelector(target);
    const targetPosition = targetEl.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      };
    }

    function ease(t, b, c, d) {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t--;

      const result = -c / 2 * (t * (t - 2) - 1) + b;

      return result;
    }

    requestAnimationFrame(animation);
  }

  const toAbout = document.querySelectorAll('.toAbout');
  const toFeatures = document.querySelectorAll('.toFeatures');
  const toAdvantages = document.querySelectorAll('.toAdvantages');
  const toTestimonial = document.querySelectorAll('.toTestimonial');
  const toTeam = document.querySelectorAll('.toTeam');
  const toFaqs = document.querySelectorAll('.toFaqs');
  const toBlog = document.querySelectorAll('.toBlog');
  const toPartners = document.querySelectorAll('.toPartners');
  const toHome = document.querySelectorAll('.toHome');

  toAbout.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.about', 2000);
    });
  });

  toFeatures.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.features', 2000);
    });
  });

  toAdvantages.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.advantages', 2000);
    });
  });

  toTestimonial.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.testimonials', 2000);
    });
  });

  toTeam.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.team', 2000);
    });
  });

  toFaqs.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.questionsAndAnswers', 2000);
    });
  });

  toBlog.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.blog', 2000);
    });
  });

  toPartners.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('.partners', 2000);
    });
  });

  toHome.forEach(btn => {
    btn.addEventListener('click', function() {
      smoothScroll('body', 2000);
    });
  });
}

scroll();

function tabs() {
  const wrapper = document.querySelector('.testimonials__wrapper');
  const btns = document.querySelectorAll('.testimonials__btn');
  const items = document.querySelectorAll('.testimonials__item');

  wrapper.addEventListener('click', event => {
    const id = event.target.dataset.id;

    if (id) {
      btns.forEach(btn => {
        btn.classList.remove('active-btn');
        event.target.classList.add('active-btn');
      });

      items.forEach(item => {
        item.classList.remove('active-slide');
      });

      const element = document.getElementById(id);

      element.classList.add('active-slide');
    }
  });
}

tabs();
