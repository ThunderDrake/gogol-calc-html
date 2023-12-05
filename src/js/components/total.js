

function formatCost(number){
  number = String(number);
  let counter = 0;
  let numberTotal = "";
  for(let i = number.length - 1; i >= 0; i--){
    counter += 1;
    if(counter == 3){
      counter = 0;
      numberTotal = " " +  number[i] + numberTotal;
    }else{
      if(number[i] == "-"){
        numberTotal = number[i] + " "  + numberTotal;
      } else{
        numberTotal =  number[i] + numberTotal;
      }
    }
  }

  return numberTotal;
}

let keyCounter = 0;

function newElement(titleEl, typeEl, costEl){
  keyCounter += 1;
  let newObject = {
    key: keyCounter,
    title: titleEl,
    type: typeEl,
    cost: costEl,
  }
  return newObject;
}


const btnNext = document.querySelector(".btn__next");
const totalitem = document.querySelector(".total__item");
const totalMain = document.querySelector(".total__main");


if(btnNext && totalitem && totalMain){
  let dataProducts = [];

  btnNext.addEventListener('click', (event) => {
    let activeContent = document.querySelector(".content-section--active").previousElementSibling;
    let typeBlock = activeContent.dataset.typeBlock;
    let inputs = activeContent.querySelectorAll("input, select");

    inputs.forEach((el) => {
      if(el.checked || el.selected){
        if( /\d/.test(el.value)){
          dataProducts.push(newElement(el.dataset.name, typeBlock, el.value));
        }
      }
    });
    let counter = 0
    if(document.querySelector(".additional--fifth.content-section--active")){
      for(let i = 0; i < dataProducts.length; i++){
        if(i == 0){
          totalitem.querySelector(".total__type").textContent = dataProducts[i].type;
          totalitem.querySelector(".total__title").textContent = dataProducts[i].title;
          totalitem.querySelector(".total__title__cost").textContent = "+ " + formatCost(dataProducts[i].cost) + " руб.";
          totalitem.dataset.key = dataProducts[i].key;
        } else{
          let totalitemClone = totalitem.cloneNode(true);
          totalitemClone.querySelector(".total__type").textContent = dataProducts[i].type;
          totalitemClone.querySelector(".total__title").textContent = dataProducts[i].title;
          totalitemClone.querySelector(".total__title__cost").textContent = "+ " + formatCost(dataProducts[i].cost) + " руб.";
          totalitemClone.dataset.key = dataProducts[i].key;
          totalMain.append(totalitemClone);
        }

      }
    }
    console.log(dataProducts);
  });


  totalMain.addEventListener('click', event => {
    if(event.target.classList.contains("total__remove")){

      for(let i = 0; i < dataProducts.length; i++){
        if(dataProducts[i].key == event.target.parentNode.dataset.key){
          let inputs = document.querySelectorAll("input, select");
          inputs.forEach((el) => {
            if(el.dataset.name == dataProducts[i].title){
              el.checked = false;
            }
          });
          dataProducts.splice(i, 1);
        }
      }
      console.log(dataProducts);
      event.target.parentNode.remove();
    }
  });
}





