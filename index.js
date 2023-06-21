const mobileMenu = document.querySelector('.mobile-menu');
const apps = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const Activity = document.querySelectorAll('.activity');
const Home = document.querySelector('.home');
const hiddenElements = document.querySelectorAll('.hidden');

Home.addEventListener('click', () => {
  Home.classList.add('active-link');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));

apps.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
  });
});

const scrollTop = () => {
  const scrollTop = document.getElementById('scrollup');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollTop);

const check = () => {
  for (let index = 0; index < Activity.length; index++) {}
};

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.desktop-links a[href*=' + sectionId + ']')
        .classList.add('active-link');
      Home.classList.remove('active-link');
    } else {
      document
        .querySelector('.desktop-links a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

const mobileSections = document.querySelectorAll('section[id]');
function scrollActiveMobile() {
  const scrollY = window.pageYOffset;

  mobileSections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.mobile-links a[href*=' + sectionId + ']')
        .classList.add('active-link');
      Home.classList.remove('active-link');
    } else {
      document
        .querySelector('.mobile-links a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActiveMobile);
