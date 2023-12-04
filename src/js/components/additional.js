const addItem = document.querySelector(".additional__item");
const addItemList = document.querySelector(".additional__item-list");
const addItemBtn = document.querySelector(".additional__item-list-add");


if(addItem && addItemList && addItemBtn){
  let addItemClone = addItem.cloneNode(true);

  addItemBtn.addEventListener("click", (event) => {
    addItemList.append(addItemClone.cloneNode(true));
  })

  addItemList.addEventListener("click", (event) => {
    if(event.target.classList.contains("add__remove")){
      event.target.parentNode.remove();
    }
  })
}

