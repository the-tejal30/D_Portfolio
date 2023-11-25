const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


/* ========== typed js  ==========*/

const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Tablue Developer', 'Business Consultant', 'Statistical Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
	loop:true
})

// /* ========== fullscreen Image ==========*/


const projectItems = document.querySelectorAll('.block');

projectItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('fullscreen');
    const description = item.querySelector('.text-box');
    if (description) {
      description.style.display = 'block';
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('fullscreen');
    const description = item.querySelector('.text-box');
    if (description) {
      description.style.display = 'none';
    }
  });

  item.addEventListener('click', () => {
    item.classList.remove('fullscreen');
    const description = item.querySelector('.text-box');
    if (description) {
      description.style.display = 'none';
    }
  });
});









  



