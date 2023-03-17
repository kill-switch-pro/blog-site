let btn = document.getElementById("accordion");
btn.addEventListener("click", function () {
  let panel = document.getElementById("panel");
  panel.style.transition = "height 2s";
  panel.style.height = "10rem";
});

btn.addEventListener("focusout", function () {
  let panel = document.getElementById("panel");
  panel.style.transition = "height 0.6s";
  panel.style.height = 0;
});
//question , why cant classname work for dom
