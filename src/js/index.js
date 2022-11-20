import '../scss/style.scss';
// import '../scss/badword.scss';
console.log('Works!');
const showAllBtn = document.querySelector('.show_all')
const showAllBtn2 = document.querySelector('.show-btn2')
const showImg = document.querySelector('.show_img')
const showImg2 = document.querySelector('.show-img2')
const menuTog = document.querySelectorAll('.bar-tog')
const sideBar = document.querySelector('.side-bar')
const togFeedItems = document.querySelectorAll('.feedback-tog')
const togPhoneItems = document.querySelectorAll('.phone-tog')
const feedbackBl = document.querySelector('.f-modal')
const phoneCallBl = document.querySelector('.p-modal')
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


const togModal = function(items,tog_block){
  items.forEach((item) => {
    item.addEventListener('click', () => {
      tog_block.classList.toggle('change')
      bckgr.classList.toggle('inable-bck')
      if (sideBar.classList.contains('change')){
        sideBar.classList.remove('change')
      }
      
      if (tog_block.classList.contains('change')){
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
   
  })
};
togModal(togPhoneItems,phoneCallBl)
togModal(togFeedItems,feedbackBl)


