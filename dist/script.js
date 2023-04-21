// // Make element hidden at loading times
// document.getElementById("toggle_hide_show").style.visibility = "hidden";

function hide() {
  document.getElementById("toggle-hide-show").style.visibility = "hidden";
}

function show() {
  document.getElementById("toggle-hide-show").style.visibility = "visible";
}

function hideForGame(){
  const elements = document.getElementsByClassName("hide-for-game");
  for (let i = 0; i < elements.length; i++ ){
    elements[i].style.visibility = "hidden";
    elements[i].style.position = "absolute";
  }
  showforGame();
}

function showforGame(){
  element = document.getElementById("show-for-game");
  element.style.position = "static";
  element.style.visibility = "visible";
}
