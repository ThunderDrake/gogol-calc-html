const sections = document.querySelectorAll('.content-section');
const nextButton = document.querySelector('[data-step="next"]');
const prevButtons = document.querySelectorAll('.btn__back');

function switchSection() {
  let activeSection = 0;

  nextButton.addEventListener('click', (e)=>{
    go(e.target)

    if(activeSection == sections.length - 1) {
      nextButton.style.opacity = '0';
      nextButton.style.pointerEvents = 'none';
    }
  }, false)

  prevButtons.forEach(el => {
    el.addEventListener('click', (e)=>{
      go(e.target)
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

      if (i == activeSection){
        sections[i].className += " content-section--active";
        let currentType = sections[i].dataset.typeBlock

        document.querySelectorAll(`.pagination__item`).forEach(el => {
          el.classList.remove('pagination__item--active')
        })
        document.querySelector(`[data-pagination-type="${currentType}"]`).classList.add('pagination__item--active')
      }
    }
  }
}

switchSection()

