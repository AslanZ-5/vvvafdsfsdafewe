import '../scss/style.scss';
// import '../scss/badword.scss';
console.log('Works!');
const showAllBtn = document.querySelector('.show_all')
const showAllBtn2 = document.querySelector('.show-btn2')
const showImg = document.querySelector('.show_img')
const showImg2 = document.querySelector('.show-img2')
const menuTog = document.querySelectorAll('.bar-tog')
const sideBar = document.querySelector('.side-bar')
const togItem = document.querySelectorAll('.feedback-tog')
const feedbackBl = document.querySelector('.show-modal')
const bckgr = document.querySelector('.bck-gr')


const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: "true"

    },
    slidesPerView: 'auto'
    
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


menuTog.forEach((item) => {
  item.addEventListener('click', () => {
      sideBar.classList.toggle('change')
  })
})
togItem.forEach((item) => {
  item.addEventListener('click', () => {
    feedbackBl.classList.toggle('change')
    bckgr.classList.toggle('inable-bck')
    sideBar.classList.toggle('change')
    if (feedbackBl.classList.contains('change')){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })
 
})

