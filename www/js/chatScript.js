var textLog = ["<span style='color:rgb(66, 124, 254)'><strong>Customer Service: </strong></span> It appears your game has malfunctioned. Respond 'HELP' for additional service."];
var send = document.getElementById('button');
var input = document.getElementById('input');
var message;
var dots = document.getElementById('dots');

var player = [name];
//Default response
var response = "Sorry, I'm not sure I understand.";
var goBack = false;

send.addEventListener("click", chat);

input.addEventListener('keydown', pending);
input.addEventListener('keyup', pending);

//show message at start
setTimeout(function(){
  document.getElementById("text").innerHTML = textLog.join("<br><br>");
}, 2000);


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

var state = 0;

//update response
function change(){

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
      state = 7;
    }
  } else if (state == 5){
    if (message.includes("yes")){
      state = 6;
    } else if (message.includes("no")){
      state = 7;
    }
  } else if (state == 6){
    if (message.includes("yes")){
      state = 7;
    } else if (message.includes("no")){
      state = 8;
    }
  } else if (state == 7){
    if (message.includes("yes")){
      state = 8;
    } else if (message.includes("no")){
      state = 9 ;
    }
  } else if (state == 8){
    if (message.includes("yes")){
      state = 10;
    } else if (message.includes("no")){
      state = 11 ;
    }
  } else if (state == 9){
    if (message.includes("yes")){
      state = 10;
    } else if (message.includes("no")){
      state = 11 ;
    }
  } else if (state == 10){
  } else if (state == 11){
  }

  var responses = [
    "It appears your game has malfunctioned. Respond 'HELP' for additional service.",
    "We are here to help. Please enter your name and we will assess the issue.",
    "Your name is " + player[0] + "? Is that correct?",
    "Ok " + player[0] + ", this may take a few moments. Please answer the following questions: Did you experience adequate gameplay before the crash?",
    "That's odd, my sources show the app was only open for a matter of seconds, but ok. Did you have any difficulty opening the app?",
    "I see. It looks as though you could only access the game for a few seconds. Did you have any difficulty opening the app?",
    "Strange, there do not appear to be any errors in start log. Are you certain you hit the start button hard enough?",
    "This must be a developement error. Would you like me to send a report to the developer?",
    "I lack that capability. But I can offer you alternate gameplay? Are you interested in automated companionship?",
    "Good, I am unable to preform that function. Are you interested in automated companionship?"];
  response = responses[state];


  console.log(state);
  console.log(player);
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


//Original toTitleCase Function from Steve Brush @https://stackoverflow.com/questions/32589197/capitalize-first-letter-of-each-word-in-a-string-javascript/32589256
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
