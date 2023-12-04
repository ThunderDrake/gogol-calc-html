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

  return numberTotal;
}




if(main && cost && costLast){
  let costNum = 0;
  let temp = 0;
  setInterval(() => {
      costNum = 0;
      temp = 0;
      const allInputsChecked = document.querySelectorAll("input, select");
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
          } else if(el.classList.contains("additional__item-price")) {
            costNum += Number(el.value);
          }
          else{
            costNum += Number(el.value);
          }


        }
      });
      document.querySelectorAll(".additional__item-price").forEach(el => {
        if(el.value != ""){
          costNum += Number(el.value);
        }
      });
      document.querySelectorAll(".content-section--active .additional__item-price").forEach(el => {
        if(el.value != ""){
          temp += Number(el.value);
        }
      });
      const allInputsCheckedIn = document.querySelectorAll(".content-section--active input, select");
      allInputsCheckedIn.forEach(el => {
        if((el.checked && el.name != "model" || el.selected && el.name != "model") && /\d/.test(el.value)){
          if(el.classList.contains("floor__metr")){
            temp += Number(el.value * Number(document.querySelector(".floor__input").value));
          }else if(el.classList.contains("terrace__metr")){
            temp += Number(el.value * Number(document.querySelector(".terrace__input").value));
          }else if(el.classList.contains("lamp__metr")){
            temp += Number(el.value * Number(document.querySelector(".lamp__input").value));
          } else if(el.classList.contains("teplo__metr")) {
            temp += Number(el.value * (Number(document.querySelector("[data-choices='insulation']").value) / 50) );
          } else if(el.classList.contains("teplo-banya__metr")) {
            temp += Number(el.value * (Number(document.querySelector("[data-choices='bath_square']").value) / 0.5) );
          } else if(el.classList.contains("choices__height")) {
            temp += Number(1 * (Number(el.value) / 10) );
          }
          else{
            temp += Number(el.value);

          }
        }
      });
      if(costNum != 0){
        cost.textContent = formatCost(costNum);

        if(temp != 0){
            costLast.textContent = "+ " + formatCost(temp);
            costLast.style.opacity = 1;
        } else{
          costLast.style.opacity = 0;
        }

        cost.style.opacity = 1;
        cost.parentNode.parentNode.style.opacity = 1;
      } else{
        cost.style.opacity = 0;
      }

      temp = costNum;
  }, 200);



}
