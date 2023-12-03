const main = document.querySelector("main");
const cost = document.querySelector(".cost");



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
      numberTotal =  number[i] + numberTotal;
    }
  }
  console.log(numberTotal);
  return numberTotal;
}

if(main && cost){
  let costNum = 0;
  main.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName == "INPUT" || event.target.tagName == "LABEL" || event.target.classList.contains('choices')){
      costNum = 0;
      const allInputsChecked = document.querySelectorAll("input");
      console.log(allInputsChecked.length);
      allInputsChecked.forEach(el => {
        if((el.checked && el.name != "model" || el.selected && el.name != "model") && /\d/.test(el.value)){
          costNum += Number(el.value);
          console.log(costNum);
        }
      });
      if(costNum != 0){
        cost.textContent = formatCost(costNum);
        cost.style.opacity = 1;
        cost.parentNode.style.opacity = 1;
      } else{
        cost.style.opacity = 0;
      }
    }
  });
}
