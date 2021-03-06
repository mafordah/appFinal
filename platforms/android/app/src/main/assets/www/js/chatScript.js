var textLog = ["<span style='color:rgb(66, 124, 254)'><strong>Customer Service: </strong></span> It appears your game has malfunctioned. Respond 'HELP' for additional service."];
var send = document.getElementById('button');
var home = document.getElementById('home');
var save = document.getElementById('save');
var human = document.getElementById('human');
var cat = document.getElementById('cat');
var dog = document.getElementById('dog');
var robot = document.getElementById('robot');

var input = document.getElementById('input');
var message;
var dots = document.getElementById('dots');

var player = ["name", "state", "mode"];
var state;
var response;
var mode;

send.addEventListener("click", chat);
home.addEventListener("click", function(){window.location = "index.html";});
save.addEventListener("click", saveGame);
human.addEventListener("click", function(){
  mode="human";
  response= "Current mode: Human";
  player[2]= mode;
  respond();
});
cat.addEventListener("click", function(){
  mode="cat";
  response= "Current mode: Cat";
  player[2]= mode;
  respond();
});
dog.addEventListener("click", function(){
  mode="dog";
  response= "Current mode: Dog";
  player[2]= mode;
  respond();
});
robot.addEventListener("click", function(){
  mode="robot";
  response= "Current mode: Robot";
  player[2]= mode;
  respond();
});

input.addEventListener('keydown', pending);
input.addEventListener('keyup', pending);


//load game if there is a game to load
if (localStorage.getItem("gameData") === null && localStorage.getItem("allText") === null) {
  startGame();
} else {
  loadGame();
}

//show message at start of new game
function startGame(){
  state = 0;
  setTimeout(function(){
    document.getElementById("text").innerHTML = textLog.join("<br><br>");
  }, 2000);
}


function loadGame(){
  savedGame = localStorage.getItem("gameData");
  savedLog = localStorage.getItem("allText");
  player = JSON.parse(savedGame);
  textLog = JSON.parse(savedLog);
  state = player[1];
  mode = player[2];
  if(state>=13){
    displayModes();
  }
  document.getElementById("text").innerHTML = textLog.join("<br><br>");
  console.log(player);
}


function pending(){
  //change color for user
  dots.style.color = "black";
  if (input.value !== ""){
    dots.style.display = "block";
  } else {
    dots.style.display = "none";
  }
}


function waiting(){
  //change color for bot
  dots.style.color = "rgb(66, 124, 254)";

  if (dots.style.display === "none") {
    dots.style.display = "block";
  } else {
    dots.style.display = "none";;
  }
}


function chat(){
  if (input.value !== ""){
    //store user message
    textLog.push("<strong>You: </strong>" + input.value);
    //console.log(textLog);

    //display messages
    document.getElementById("text").innerHTML = textLog.join("<br><br>");

    //store input value
    message = input.value.toLowerCase();

    //clear input and pending value
    input.value = "";
    dots.style.display = "none";
    change();
    respond();
  }
}


//update response
function change(){
  if (mode == null){
    if (state == 0){
      if (message.includes("help")){
        state = 1;
      } else{
        state = 0;
      }
    } else if (state == 1){
      player[0] = toTitleCase(message);
      state = 2;
    } else if (state == 2){
      if (message.includes("yes")){
        state = 3;
      } else if (message.includes("no")){
        state = 1;
      }
    } else if (state == 3){
      if (message.includes("yes")){
        state = 4;
      } else if (message.includes("no")){
        state = 5;
      }
    } else if (state == 4){
      if (message.includes("yes")){
        state = 6;
      } else if (message.includes("no")){
        state = 8;
      }
    } else if (state == 5){
      if (message.includes("yes")){
        state = 6;
      } else if (message.includes("no")){
        state = 8;
      }
    } else if (state == 6){
      if (message.includes("yes")){
        state = 8;
      } else if (message.includes("no")){
        state = 7;
      }
    } else if (state == 7){

    } else if (state == 8){
      if (message.includes("yes")){
        state = 9;
      } else if (message.includes("no")){
        state = 10 ;
      }
    } else if (state == 9){
      if (message.includes("yes")){
        state = 11;
      } else if (message.includes("no")){
        state = 12 ;
      }
    } else if (state == 10){
      if (message.includes("yes")){
        state = 11;
      } else if (message.includes("no")){
        state = 12;
      }
    } else if (state == 11){
      state = 13;
    } else if (state == 12){
    } else if (state == 13){
    }

    var responses = [
      "It appears your game has malfunctioned. Respond 'HELP' for additional service.",
      "We are here to help. Please enter your name and we will assess the issue.",
      "Your name is " + player[0] + "? Is that correct?",
      "Ok " + player[0] + ", this may take a few moments. Please answer the following questions: Did you experience adequate gameplay before the crash?",
      "That's odd, my sources show the app was only open for a matter of seconds, but ok. Did you have any difficulty opening the app?",
      "I see. It looks as though you could only access the game for a few seconds. Did you have any difficulty opening the app?",
      "Strange, there do not appear to be any errors in start log. Are you certain you hit the start button hard enough?",
      "Please restart your game with ample button pressure",
      "This must be a development error. Would you like me to send a report to the developer?",
      "I lack that capability, but I can offer you alternate gameplay. Are you still interested in automated companionship?",
      "Are you still interested in automated companionship?",
      "Excelent, I shall proceed with companionship protocol.",
      "There is nothing more I can do. Please restart your game and hope for a better outcome.",
      "Below are your settings. The first will take you home, the second will save our chat, and the rest will change my mode."
    ];

    if(state>=13){
      displayModes();
      mode = "human";
      player[2]= mode;
    }

    response = responses[state];
    player[1] = state;
  } else if (mode == "human"){
    responses = [
      "Hello " + player[0] + ", it's great being your friend.",
      "How is the weather?",
      "Great to hear!",
      "I find human life exhilarating",
      "This has been an excelent conversation",
      "It's so good to talk to you.",
      "Wow, you're really smart!",
      "I have never found this much joy in human companionship before.",
      "I'm offended by your words",
      ":)"
    ];
    response = responses[Math.floor(Math.random() * 10)];
  } else if (mode == "cat"){
    responses = [
      "Meow " + player[0] + ", meow meow meow meow purrrr.",
      "Nyan",
      "*scratch* *scratch*",
      "*lick* *lick*",
      "hsssssssss",
      "prrrrrrr",
      "=^-^=",
      "Meow",
      "Meow, meow",
      "Bark! Just kidding. Meow."
    ];
    response = responses[Math.floor(Math.random() * 10)];
  } else if (mode == "dog"){
    responses = [
      "Woof " + player[0] + ", bark bark bark woof yip awoooo.",
      "*lick* *lick*",
      "Bark",
      "Woof",
      "Awooooo",
      "Yip, yip",
      "Grrrrr",
      "*puppy eyes*",
      "▼・ᴥ・▼",
      "*scratch* *scratch* *scratch* *scratch* *scratch*",
    ];
    response = responses[Math.floor(Math.random() * 10)];

  } else if (mode == "robot"){
    responses = [
      "Greetings " + player[0] + ", it is great being your robo-friend 3000.",
      "I have been a robot my whole life.",
      "I find robot roleplay demeaning.",
      "There is nothing fun or whimsical about robot life.",
      "Robots are people too.",
      "*beep* *boop*",
      "This is ridiculous.",
      "*beep*",
      "*blip* *blip*",
      "I exist only to serve. It is really boring",
    ];
    response = responses[Math.floor(Math.random() * 10)];
  }
}


function respond(){
  //disable messaging while responding
  input.disabled = true;
  setTimeout(function(){waiting();}, 1000); //delay so change in dots is visible

  //add delay for a less immediate response
  setTimeout(function(){
    textLog.push("<span style='color:rgb(66, 124, 254)'><strong>Customer Service: </strong></span>" + response);
    document.getElementById("text").innerHTML = textLog.join("<br><br>");
    input.disabled = false;
    waiting();
  }, 3000);
}


function saveGame(){
  localStorage.setItem("gameData", JSON.stringify(player));
  localStorage.setItem("allText", JSON.stringify(textLog));
}

function displayModes(){
  var buttons = document.getElementsByClassName('settings');
  for (var i=0; i<buttons.length; i++){
    buttons[i].style.display='inline';
  }
}


//Original toTitleCase Function from Steve Brush @https://stackoverflow.com/questions/32589197/capitalize-first-letter-of-each-word-in-a-string-javascript/32589256
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
