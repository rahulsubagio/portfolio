// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const logo = document.querySelector('#logoRS');
  const btn = document.querySelector('#backtop')
  // const sNav = document.querySelector('#humberger');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    logo.classList.remove('brand-logo');
    logo.classList.add('scale-logo');
    btn.classList.remove('back-btn');
    // sNav.classList.add('scale-sm');
  } else {
    header.classList.remove('navbar-fixed');
    logo.classList.remove('scale-logo');
    logo.classList.add('brand-logo');
    btn.classList.add('back-btn');
    // sNav.classList.remove('scale-sm');
  }
};

// humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
  humberger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden')
});

// Journey Tab
function setup() {
  return {
    activeTab: 0,
    tabs: [
        "Education",
        "Experience",
        "Awards",
    ]
  };
};