const main = document.querySelector("main");
const cost = document.querySelector(".cost");
const costLast = document.querySelector(".cost__last");



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
  console.log(numberTotal);
  return numberTotal;
}


function bodyCost() {

}

if(main && cost && costLast){
  let costNum = 0;
  let temp = 0;
  setInterval(() => {
      costNum = 0;
      const allInputsChecked = document.querySelectorAll("input, select");
      console.log(allInputsChecked.length);
      allInputsChecked.forEach(el => {
        if((el.checked && el.name != "model" || el.selected && el.name != "model") && /\d/.test(el.value)){
          if(el.classList.contains("floor__metr")){
            costNum += Number(el.value * Number(document.querySelector(".floor__input").value));
          }else if(el.classList.contains("terrace__metr")){
            costNum += Number(el.value * Number(document.querySelector(".terrace__input").value));
          }else if(el.classList.contains("lamp__metr")){
            costNum += Number(el.value * Number(document.querySelector(".lamp__input").value));
          } else if(el.classList.contains("teplo__metr")) {
            costNum += Number(el.value * (Number(document.querySelector("[data-choices='insulation']").value) / 50) );
          } else if(el.classList.contains("teplo-banya__metr")) {
            costNum += Number(el.value * (Number(document.querySelector("[data-choices='bath_square']").value) / 0.5) );
          } else if(el.classList.contains("choices__height")) {
            costNum += Number(1 * (Number(el.value) / 10) );
          }

          else{
            costNum += Number(el.value);
            console.log(costNum);
          }


        }
      });
      if(costNum != 0){
        cost.textContent = formatCost(costNum);
        if(costNum != temp){
          let lastNum = costNum - temp;
          if(lastNum > 0){
            costLast.textContent = "+ " + formatCost(lastNum);
          } else{
            costLast.textContent = formatCost(lastNum);
          }

        }
        costLast.style.opacity = 1;
        cost.style.opacity = 1;
        cost.parentNode.parentNode.style.opacity = 1;
      } else{
        cost.style.opacity = 0;
      }

      temp = costNum;
  }, 200);



}
