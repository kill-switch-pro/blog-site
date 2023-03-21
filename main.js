let btnShow = document.getElementById("open-menu");
let btnmenu = document.getElementById("close-menu");
let welcome = document.getElementById("welcome-message");
btnShow.addEventListener("click", function () {
  let panel = document.getElementById("menu-panel");
  panel.style.transition = "height 2s";
  panel.style.height = "15rem";
  btnShow.style.display = "none";
});
/*
window.addEventListener("load", function () {
  welcome.style.transition = "width 3s";
  welcome.style.width = "60rem";
});
*/
btnmenu.addEventListener("click", function () {
  let panel = document.getElementById("menu-panel");
  panel.style.transition = "height 0.6s";
  panel.style.height = 0;
  btnShow.style.display = "block";
});

//question , why cant classname work for dom
