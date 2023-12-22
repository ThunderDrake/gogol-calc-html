const sections = document.querySelectorAll('.content-section');
const nextButton = document.querySelector('[data-step="next"]');
const prevButtons = document.querySelectorAll('.btn__back');
const bottomButtons = document.querySelectorAll('.pagination__item');
const modelsButtons = document.querySelectorAll('.main__item-radio');
const squareBlock = document.querySelector('.square__left');

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

function chooseType() {
  modelsButtons.forEach(el=>{
    el.addEventListener('change', (e)=>{
      const target = e.target;
      const items = target.dataset.size.split(',');
      squareBlock.innerHTML = "";

      items.forEach(item => {
        const size = item.split(":")[0];
        const price = item.split(":")[1];
        const id = item.split(":")[2]
        const sizeLabel = `
        <label class="square__input" data-square>
          <div class="square__input__indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <rect x="0.5" y="1" width="27" height="27" rx="13.5" fill="white" stroke="#D8D8D8"/>
              <circle cx="14" cy="14.5" r="8" fill="#1A2A5D"/>
            </svg>
          </div>
          <input type="radio" name="square" value="${price.replace(/[^+\d]/g, '')}" data-name="Площадь ${size} М2" data-id="${id}">
          <div class="square__number square__number--small">
            ${size} М2
          </div>
          <div class="square__text">
            ${price} руб.
          </div>
        </label>
        `;
        squareBlock.insertAdjacentHTML("beforeend", sizeLabel)
      })

      const squareInput = document.querySelectorAll('[data-square] input');
      squareInput.forEach(input => {
        const inputId = input.dataset.id;
        input.addEventListener('change', (e)=>{
          const target = e.target;

          fetch('../base.json')
            .then((response) => response.json())
            .then((data) => {
              const currentData = data[inputId];

              for(const [key, value] of Object.entries(currentData)){
                const input = document.querySelector(`[data-name="${key}"]`);

                if(input) {
                  input.value = value.replace(/[^+\d]/g, '');

                  const wrapper = input.closest('label');
                  const number = wrapper.querySelector('[data-number] span');
                  if (number) {
                    number.innerText = `+ ${value}`
                  }
                }
              }
            })
        })
      })
    })
  });
}

chooseType()

switchSection()

