/* ========== Header Start ========== */
// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const logo = document.querySelector('#logoRS');
  const btn = document.querySelector('#backtop');
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

// nav item sm
let navItemCounter = 6;
for (let i = 1; i <= navItemCounter; i++) {
  const navItem = document.querySelector('#nav-item-'+[i]);
  
  navItem.addEventListener('click', function () {
    humberger.classList.remove('humberger-active');
    navMenu.classList.toggle('hidden');
  });
}

// humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
  humberger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden');
});

// active nav scroll
const liLg = document.querySelectorAll('.nav-item-lg');
const sec = document.querySelectorAll('section');
const navUnderline = document.querySelectorAll('#nav-underline');
const liSm = document.querySelectorAll('.nav-item');

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  liLg.forEach(ltx => ltx.classList.remove('active-lg'));
  liLg[len].classList.add('active-lg');
  navUnderline.forEach(ltx => ltx.classList.add('hidden'));
  navUnderline[len].classList.remove('hidden');
  liSm.forEach(ltx => ltx.classList.remove('active'));
  liSm[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);
/* ========== Header End ========== */

/* ========== About Section Start ========== */
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
/* ========== About Section End ========== */




/* ============================== Untuk testing aja ============================== 
const tabElements = [
  {
    id: 'education',
    triggerE1: document.querySelector('#trig-tab-education'),
    targetE1: document.querySelector('#tab-education')
  },
  {
    id: 'experience',
    triggerE1: document.querySelector('#trig-tab-experience'),
    targetE1: document.querySelector('#tab-experience')
  },
  {
    id: 'awards',
    triggerE1: document.querySelector('#trig-tab-awards'),
    targetE1: document.querySelector('#tab-awards')
  }
];

const options = {
  defaultTabId: 'education',
  activeClasses: 'text-primary',
  inactiveClasses: 'text-light',
  onShow: () => {
    console.log('tab is shown');
  }
};

const tabs = new Tabs(tabElements, options);

tabs.show('education');
tabs.getTab('experience');
tabs.getActiveTab();*/