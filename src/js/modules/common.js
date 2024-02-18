// スマートフォン用メインメニューの開閉


const gNavBtn = document.querySelector('.gNavBtn');
const gNavBtnText = document.querySelector('.gNavBtn__text');
const sp_gNav = document.querySelector('.sp-gNav');


// スマートフォン用メインメニューを開く
const openMenu = function() {
  gNavBtn.setAttribute('aria-expanded', 'true');

  gNavBtn.setAttribute('aria-label', 'スマートフォン用メインメニューを閉じる');

  sp_gNav.setAttribute('aria-hidden', 'false');

  gNavBtnText.textContent = 'Close';

  sp_gNav.animate(
    {
      opacity: [0, 1],
      visibility: 'visible'
      // pointerEvents: ['none', 'auto']
    },
    {
      duration: 400,
      easing: 'ease',
      fill: 'forwards'
    }
  );

  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
};


// スマートフォン用メインメニューを閉じる
const closeMenu = function() {
  gNavBtn.setAttribute('aria-expanded', 'false');

  gNavBtn.setAttribute('aria-label', 'スマートフォン用メインメニューを開く');

  sp_gNav.setAttribute('aria-hidden', 'true');

  gNavBtnText.textContent = 'Menu';

  sp_gNav.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden'
      // pointerEvents: ['auto', 'none']
    },
    {
      duration: 400,
      easing: 'ease',
      fill: 'forwards'
    }
  );

  document.documentElement.style.height = 'auto';
  document.body.style.height = 'auto';
  document.body.style.overflow = 'visible';
};


// メニュー開閉ボタンをクリックしたとき
gNavBtn.addEventListener('click', function() {
  if (this.getAttribute('aria-expanded') === 'false') {
    openMenu();
  } else {
    closeMenu();
  }
}, false);


// ビューポートの横幅が 768px以上になった場合
const minWidth768 = window.matchMedia('(min-width: 768px)');

minWidth768.addEventListener('change', function() {
  if (minWidth768.matches) {
    closeMenu();
  }
}, false);




// FAQアコーディオンの開閉
const faqBtns = document.querySelectorAll('.faqAccordion__questionBtn');

faqBtns.forEach((faqBtn, index) => {
  faqBtn.addEventListener('click', function(e) {

    // 押したボタンの Answer
    const faqAnswer = faqBtn.parentElement.nextElementSibling;


    if (faqBtn.classList.contains('is-answerOpen')) {
      // ボタン
      faqBtn.classList.remove('is-answerOpen');

      // Answer
      faqAnswer.style.maxHeight = null;

    } else {
      // ボタン
      const openFaqBtns = document.querySelectorAll('.faqAccordion__questionBtn.is-answerOpen');

      openFaqBtns.forEach((openFaqBtn) => {
        openFaqBtn.classList.remove('is-answerOpen');
      });

      faqBtn.classList.add('is-answerOpen');

      // Answer
      const faqAccordionAnswers = document.querySelectorAll('.faqAccordion__answer');

      faqAccordionAnswers.forEach((faqAccordionAnswer) => {
        faqAccordionAnswer.style.maxHeight = null;
      });

      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
    }




    // faqAnswer.classList.toggle('is-answerOpen');




    // const styles = getComputedStyle(faqAnswer);

    // if (styles.maxHeight === '0px') {
    //   faqAnswer.animate(
    //     {
    //       maxHeight: faqAnswer.scrollHeight + 'px'
    //     },
    //     {
    //       duration: 1000,
    //       ease: 'easing',
    //       fill: 'forwards'
    //     }
    //   );
    // } else if (styles.maxHeight) {
    //   faqAnswer.animate(
    //     {
    //       maxHeight: 0
    //     },
    //     {
    //       duration: 1000,
    //       easing: 'ease',
    //       fill: 'forwards'
    //     }
    //   );
    // }

  }, false);
});
