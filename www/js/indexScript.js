var newButton = document.getElementById('newButton');
var continueButton = document.getElementById('continueButton');
var menuText = document.getElementById('text');

var newGame = true;

newButton.addEventListener("click", button1);
continueButton.addEventListener("click", button2);


function button1(){
  console.log("click");
  newButton.innerHTML = "Continue"
  continueButton.innerHTML = "Return";
  if (newGame == false){
    text.innerHTML = "This will overwrite your previous save data. Are you sure you want to continue?"
  } else if (newGame == true){
    window.location = "home.html";
    newGame = false;
  }
}

function button2(){
  if (newGame == false){

  } else {

  }
}
