import '../scss/style.scss';
// import '../scss/badword.scss';
console.log('Works!');
const showAllBtn = document.querySelector('.show_all')
const showAllBtn2 = document.querySelector('.show-btn2')
const showImg = document.querySelector('.show_img')
const showImg2 = document.querySelector('.show-img2')


const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: "true"
    },
    
  });

const showFunc = function(btn,img){
  btn.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
      item.classList.toggle('hide')
    })
    if (!document.querySelectorAll('.target')[0].classList.contains('hide')) {
      btn.innerHTML = 'Скрыть'
      img.style.transform = 'rotate(180deg)'
    } else {
      btn.innerHTML = 'Показать все'
      img.style.transform = 'rotate(0deg)'
    }
  })
};

showFunc(showAllBtn,showImg)
showFunc(showAllBtn2,showImg2)
  