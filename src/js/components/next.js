function showEl(el, how){
  el.style.display = how;
  setTimeout(() => {
      el.style.opacity = "1";
  }, 50);
}

function hideEl(el){
  el.style.opacity = "0";
  setTimeout(() => {
      el.style.display = "none";
  }, 300);
}


