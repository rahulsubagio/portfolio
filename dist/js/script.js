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
let modalContentCount = document.getElementById('modal-container').childElementCount;
for (let i = 1; i <= modalContentCount; i++) {
  const modalContainer = document.getElementById('modal-container');
  const openModalBtn = document.getElementById('open-modal-'+[i]);
  const modalContent = document.getElementById('modal-content-'+[i]);
  
  openModalBtn.addEventListener('click', function () {
    modalContainer.classList.remove('invisible');
    modalContent.classList.remove('hidden');
    
    const closeModal = document.getElementById('close-modal-'+[i]);

    closeModal.addEventListener('click', function () {
      modalContainer.classList.add('invisible');
      modalContent.classList.add('hidden');
    });

    // ===== Click background to close =====
    // modalContainer.addEventListener('click', function (event) {
    //   if (event.target.closest('#modal-content-'+[i])) return;
    //   modalContainer.classList.add('invisible');
    //   modalContent.classList.add('hidden');
    // });
  });  
}
/* ========== Service Section End ========== */

/* ========== Portfolio Section Start ========== */
// Carousel
const carouselContainer = document.getElementById('carousel-container');
let carouselWrapperCount = carouselContainer.getElementsByClassName('carousel__wrapper').length;

for (let j = 1; j <= carouselWrapperCount; j++) {
  const carouselTrigBtn = document.getElementById('carousel-trig-btn'+[j]);
  const carouselCloseBtn = document.getElementById('carousel-close');
  const carouselContent = document.getElementById('carousel-content'+[j]);
  const carouselContentCount = carouselContent.getElementsByClassName('carousel__content');

  carouselCloseBtn.addEventListener('click', function () {
    carouselContainer.classList.add('invisible');
    carouselContent.classList.add('invisible');
  });

  carouselTrigBtn.addEventListener('click', function () {
    carouselContainer.classList.remove('invisible');
    carouselContent.classList.remove('invisible');
  
    let currentCarouselContentImgID = 1;
    let totalCarouselContentImg = carouselContentCount.length;
    
    const carouselImgNext = document.querySelector('.carousel__next-btn');
    const carouselImgPrev = document.querySelector('.carousel__prev-btn');
    
    carouselImgNext.addEventListener('click', function () {
      if (currentCarouselContentImgID < totalCarouselContentImg) {
        currentCarouselContentImgID++;
        showCarouselContentImg();
        // console.log("next");
      }
    });
    
    carouselImgPrev.addEventListener('click', function () {
      if (currentCarouselContentImgID > 1) {
        currentCarouselContentImgID--;
        showCarouselContentImg();
        // console.log("prev");
      }
    });
    
    function showCarouselContentImg() {
      const contentImg = carouselContentCount;
      const contentIndicator = document.getElementById('carousel-content'+[j]).getElementsByTagName('span');
      
      for (let i = 0; i < totalCarouselContentImg; i++) {
        const elementContentImg = contentImg[i];
        const elementContentIndicator = contentIndicator[i];
        if (currentCarouselContentImgID === i+1) {
          elementContentImg.classList.remove('invisible');
          elementContentIndicator.classList.add('carousel__indicator-active');
        } else {
          elementContentImg.classList.add('invisible');
          elementContentIndicator.classList.remove('carousel__indicator-active');
        }
      }
    }
  });
}
/* ========== Portfolio Section End ========== */
