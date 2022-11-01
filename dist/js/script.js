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

/* ========== Service Section Start ========== */
// Modal UI/UX Designer
const showModal = document.querySelector('#modal-container');

// Modal UI/UX
const modalBtnUiux = document.querySelector('#open-modal-uiux');
const modalContentUiux = document.querySelector('#modal-content-uiux');

modalBtnUiux.addEventListener('click', function () {
  showModal.classList.toggle('invisible');
  modalContentUiux.classList.toggle('hidden');
  
  const closeModalUiux = document.querySelector('#close-modal-uiux');
  
  closeModalUiux.addEventListener('click', function () {
    showModal.classList.add('invisible');
    modalContentUiux.classList.add('hidden');
  });

  showModal.addEventListener('click', function (event) {
    if (event.target.closest('#modal-content-uiux')) return;
    showModal.classList.add('invisible');
    modalContentUiux.classList.add('hidden');
  });
});

// Modal Fullstack
const modalBtnFullstack = document.querySelector('#open-modal-fullstack');
const modalContentFullstack = document.querySelector('#modal-content-fullstack');

modalBtnFullstack.addEventListener('click', function () {
  showModal.classList.toggle('invisible');
  modalContentFullstack.classList.toggle('hidden');
  
  const closeModalFullstack = document.querySelector('#close-modal-fullstack');
  
  closeModalFullstack.addEventListener('click', function () {
    showModal.classList.add('invisible');
    modalContentFullstack.classList.add('hidden');
  });

  showModal.addEventListener('click', function (event) {
    if (event.target.closest('#modal-content-fullstack')) return;
    showModal.classList.add('invisible');
    modalContentFullstack.classList.add('hidden');
  });
});

// Modal Graphic Design
const modalBtnGdesign = document.querySelector('#open-modal-gdesign');
const modalContentGdesign = document.querySelector('#modal-content-gdesign');

modalBtnGdesign.addEventListener('click', function () {
  showModal.classList.toggle('invisible');
  modalContentGdesign.classList.toggle('hidden');
  
  const closeModalGdesign = document.querySelector('#close-modal-gdesign');
  
  closeModalGdesign.addEventListener('click', function () {
    showModal.classList.add('invisible');
    modalContentGdesign.classList.add('hidden');
  });

  showModal.addEventListener('click', function (event) {
    if (event.target.closest('#modal-content-gdesign')) return;
    showModal.classList.add('invisible');
    modalContentGdesign.classList.add('hidden');
  });
});
/* ========== Service Section End ========== */


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