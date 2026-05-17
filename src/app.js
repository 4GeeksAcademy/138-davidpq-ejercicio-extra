import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let optionBot = ["Piedra", "Papel", "Tijera"]
let player = window.prompt("Elige: Piedra, papel, tijera");
let bot = optionBot[Math.floor(Math.random() * optionBot.length)];
let result = false;
document.querySelector("#bot").innerHTML= `BOT: ${bot}`;
document.querySelector("#player").innerHTML= `PLAYER: ${player}`;
if (player === bot) {
  document.querySelector("#result").innerHTML= "Empate";
  result = true;
}

if (player === "Tijera" && bot === "Papel") {
  document.querySelector("#result").innerHTML = "Has ganado";
  result = true;
} else if(player === "Papel" && bot === "Tijera"){
  document.querySelector("#result").innerHTML= "Has perdido";
}  


if (player === "Papel" && bot === "Piedra") {
  document.querySelector("#result").innerHTML = "Has ganado";
  result = true;
} else if(player === "Piedra" && bot === "Papel") {
  document.querySelector("#result").innerHTML= "Has perdido";
}  


if (player === "Piedra" && bot === "Tijera") {
  document.querySelector("#result").innerHTML = "Has ganado";
  result = true;
} else if(player === "Tijera" && bot === "Piedra"){
  document.querySelector("#result").innerHTML= "Has perdido";
}  


