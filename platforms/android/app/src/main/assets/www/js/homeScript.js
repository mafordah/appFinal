var text = document.getElementById('text');
var submit = document.getElementById('button');
var input = document.getElementById('input');
var popUp = document.getElementById('menuPopUp');


submit.addEventListener("click", start);

// input.addEventListener('keydown', pending);
// input.addEventListener('keyup', pending);

function start(){
  if(input.value !== ""){
    document.getElementById('name').innerHTML = input.value;
    run();
  }
}

function run(){
  setTimeout(function(){
    input.value = "";
    input.disabled = true;

    //fail safe clear storage
    localStorage.clear();

    popUp.style.display = "block";
    setTimeout(function(){
      window.location = "chat.html";
    }, 3000);
  }, 1000);
  //setTimeout
}
