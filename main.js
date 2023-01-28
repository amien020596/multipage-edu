window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  })
});

// show / hide nav menu
const menu = document.querySelector('.nav__menu')
const buttonOpen = document.querySelector('#open-menu-btn');
const buttonClose = document.querySelector('#close-menu-btn');

// open nav
buttonOpen.addEventListener('click', () => {
  menu.style.display = 'flex';
  buttonClose.style.display = 'inline-block';
  buttonOpen.style.display = 'none';
})

// close nav
buttonClose.addEventListener('click', () => {
  buttonClose.style.display = 'none';
  menu.style.display = 'none';
  buttonOpen.style.display = 'inline-block';
})