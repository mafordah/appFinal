var newButton = document.getElementById('newButton');
var continueButton = document.getElementById('continueButton');
var menuText = document.getElementById('text');
var menuState = 0;
var savedGame;


if (localStorage.getItem("gameData") === null && localStorage.getItem("allText") === null) {
  newGame();
} else {
  continueGame();
}


function newGame(){
  continueButton.classList.add("grey");
}


function continueGame(){
  continueButton.classList.remove("grey");
  savedGame = true;
}


newButton.addEventListener("click", function(){
  if (savedGame == true){
    if (menuState == 0){
      text.innerHTML = "This will overwrite your previous save data. Are you sure you want to continue?"
      newButton.innerHTML = "Continue"
      continueButton.innerHTML = "Return";
      menuState = 1;
    } else if (menuState == 1){
      localStorage.clear();
      savedGame = false;
      window.location = "home.html";
    }
  } else {
    window.location = "home.html";
  }
});


continueButton.addEventListener("click", function(){
  if (savedGame == true){
    if (menuState == 0){
      window.location = "chat.html";
    } else if (menuState == 1){
      text.innerHTML = ""
      newButton.innerHTML = "New Game"
      continueButton.innerHTML = "Continue";
      menuState = 0;
    }
  }
});
