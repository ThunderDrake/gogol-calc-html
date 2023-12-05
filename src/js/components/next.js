const sections = document.querySelectorAll('.content-section');
const nextButton = document.querySelector('[data-step="next"]');
const prevButtons = document.querySelectorAll('.btn__back');
const bottomButtons = document.querySelectorAll('.pagination__item');

sections[0].style.display = "block";

function show(el, how){
  el.style.display = how;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 50);
}


function hide(el, transition){
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = "none";
  }, transition);
}
let activeSection = 0;

function switchSection() {

  nextButton.addEventListener('click', (e)=>{
    go(e.target)

    if(activeSection == sections.length - 1) {
      nextButton.style.opacity = '0';
      nextButton.style.pointerEvents = 'none';
    } else{
      nextButton.style.opacity = '1';
      nextButton.style.pointerEvents = 'auto';
    }
  }, false)

  prevButtons.forEach(el => {
    el.addEventListener('click', (e)=>{
      go(e.target)
      if(activeSection == sections.length - 1) {
        nextButton.style.opacity = '0';
        nextButton.style.pointerEvents = 'none';
      } else{
        nextButton.style.opacity = '1';
        nextButton.style.pointerEvents = 'auto';
      }
    }, false)
  })

  function go(el) {
    if (el.dataset.step === 'next') {
      activeSection++;
      activeSection = (activeSection > sections.length - 1) ? 0 : activeSection;
    }

    if (el.classList.contains('btn__back')) {
      activeSection--;
      activeSection = (activeSection < 0) ? sections.length - 1 : activeSection;
  }

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("content-section--active");
        hide(sections[i], 200);




      if (i == activeSection){
        sections[i].className += " content-section--active";
        let currentType = sections[i].dataset.typeBlock
        setTimeout(() =>{
          show(sections[i], "block");
        },250)
        document.querySelectorAll(`.pagination__item`).forEach(el => {
          el.classList.remove('pagination__item--active')
        })
        if(document.querySelector(`[data-pagination-type="${currentType}"]`)){
          show(document.querySelector(".pagination__wrapper"), "flex");
          document.querySelector(`[data-pagination-type="${currentType}"]`).classList.add('pagination__item--active')
        }else{
          hide(document.querySelector(".pagination__wrapper"), 100);
        }

      }
    }
  }
}

if(bottomButtons.length > 0) {
  bottomButtons.forEach(el => {
    el.addEventListener('click', (e)=>{
      const target = e.currentTarget;
      const sectionName = target.dataset.paginationType;

      const sectionId = [...sections].findIndex(el => {
        return el.dataset.typeBlock === sectionName
      });

      activeSection = sectionId;

      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("content-section--active");
        hide(sections[i], 200);

      if (i == activeSection){
        sections[i].className += " content-section--active";
        let currentType = sections[i].dataset.typeBlock
        setTimeout(() =>{
          show(sections[i], "block");
        },250)
        document.querySelectorAll(`.pagination__item`).forEach(el => {
          el.classList.remove('pagination__item--active')
        })
        if(document.querySelector(`[data-pagination-type="${currentType}"]`)){
          show(document.querySelector(".pagination__wrapper"), "flex");
          document.querySelector(`[data-pagination-type="${currentType}"]`).classList.add('pagination__item--active')
        }else{
          hide(document.querySelector(".pagination__wrapper"), 100);
        }

      }
    }
    })
  })
}

switchSection()

