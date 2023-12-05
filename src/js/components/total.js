

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
const totalitem = document.querySelectorAll(".total__item");
const totalMain = document.querySelector(".total__main");


if(btnNext && totalitem && totalMain){
  let dataProducts = [];
  let totalitemClone = totalitem[0].cloneNode(true);

  btnNext.addEventListener('click', (event) => {
    let activeContent = document.querySelector(".content-section--active").previousElementSibling;
    let typeBlock = activeContent.dataset.typeBlock;
    let inputs = activeContent.querySelectorAll("input, select");
    let tempo = 0;
    inputs.forEach((el) => {
      if(el.checked || el.selected){
        if( /\d/.test(el.value)){
          tempo = 0;
          dataProducts.forEach(el1 => {
            if(el.dataset.name == el1.title){
              tempo = 1;
            }
          });
          if(tempo == 0){
            dataProducts.push(newElement(el.dataset.name, typeBlock, el.value));
          }
        }
      }
    });

    const addItems = activeContent.querySelectorAll(".additional__item");
    console.log(addItems);
    addItems.forEach(el => {
      let access = true;
      dataProducts.forEach(el1=>{
          if(el.querySelector(".additional__item-text").value == el1.title || (el.querySelector(".additional__item-text").value == "" || el.querySelector(".additional__item-price").value == "")){
            access = false;
          }
        });
      if(access){
          dataProducts.push(newElement(el.querySelector(".additional__item-text").value, typeBlock, el.querySelector(".additional__item-price").value));
      }
    });




    let counter = 0
    if(document.querySelector(".total.content-section--active")){
      for(let i = 0; i < dataProducts.length; i++){
        let access = true;
        const totalitem = document.querySelectorAll(".total__item");
        totalitem.forEach(el=>{
          if(el.dataset.key == dataProducts[i].key){
            access = false;
          }
        });
        if(access){
          if(totalitem.length > 0 && i == 0){
            totalitem[0].querySelector(".total__type").textContent = dataProducts[i].type;
            totalitem[0].querySelector(".total__title").textContent = dataProducts[i].title;
            totalitem[0].querySelector(".total__title__cost").textContent = "+ " + formatCost(dataProducts[i].cost) + " руб.";
            totalitem[0].dataset.key = dataProducts[i].key;
          } else{
            let totalitemCloneAn = totalitemClone.cloneNode(true);
            totalitemCloneAn.querySelector(".total__type").textContent = dataProducts[i].type;
            totalitemCloneAn.querySelector(".total__title").textContent = dataProducts[i].title;
            totalitemCloneAn.querySelector(".total__title__cost").textContent = "+ " + formatCost(dataProducts[i].cost) + " руб.";
            totalitemCloneAn.dataset.key = dataProducts[i].key;
            totalMain.append(totalitemCloneAn);
          }
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
          const addItems = document.querySelectorAll(".additional__item");
          for(let m = 0; m < addItems.length; m++){
            if(addItems[m].querySelector(".additional__item-text").value == dataProducts[i].title){
              if(addItems.length == 1){
                addItems[m].querySelector(".additional__item-text").value = "";
                addItems[m].querySelector(".additional__item-price").value = "";
              } else{
                addItems[m].remove();
              }
            }

          }

          dataProducts.splice(i, 1);
        }
      }
      console.log(dataProducts);
      event.target.parentNode.remove();
    }
  });
}





