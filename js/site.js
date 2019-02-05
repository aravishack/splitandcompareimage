window.addEventListener("load", function() {
  initComparisons();
});

function initComparisons() {
  let ele = document.querySelector(".img-one-bg");
  let slider = document.querySelector(".split span");
  let widthOfImg = ele.offsetWidth;
  let dragging = false;
  slider = document.querySelector(".split span");
  slider.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish);
  function slideReady(e) {
    e.preventDefault();
    dragging = true;
    window.addEventListener("mousemove", slideMove);
  }
  function slideFinish() {
    dragging = false;
  }
  function slideMove(e) {
    let pos;
    if (!dragging) return false;
    pos = getCursorPos(e);
    if (pos < 0) pos = 0;
    if (pos > widthOfImg) pos = widthOfImg;
    slide(pos);
  }
  function getCursorPos(e) {
    let val;
    let x = 0;
    e = e || window.event;
    val = ele.getBoundingClientRect();
    x = e.pageX - val.left;
    x = x - window.pageXOffset;
    return x;
  }
  function slide(x) {
    ele.style.clip = "rect(0," + x + "px,600px,0)";
    slider.parentElement.style.left = x + "px";
  }
}
