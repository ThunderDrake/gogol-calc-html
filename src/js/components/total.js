

function newElement(titleEl, typeEl, costEl){
  let newObject = {
    title: titleEl,
    type: typeEl,
    cost: costEl,
  }
  return newObject;
}


const btnNext = document.querySelector(".btn__next");

if(btnNext){
  let dataProducts = [];

  btnNext.addEventListener('click', (event) => {
    let activeContent = document.querySelector(".content-section--active").previousElementSibling;
    let typeBlock = activeContent.dataset.typeBlock;
    let inputs = activeContent.querySelectorAll("input, select");

    inputs.forEach((el) => {
      if(el.checked || el.selected){
        if( /\d/.test(el.value)){
          dataProducts.push(newElement(el.name, typeBlock, el.value));
        }
      }
    });
    console.log(dataProducts);
  });
}
