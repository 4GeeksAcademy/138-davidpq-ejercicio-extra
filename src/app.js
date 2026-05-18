import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const optionBot = ["Piedra", "Papel", "Tijera"]
const player = window.prompt("Elige: Piedra, papel, tijera");
const bot = optionBot[Math.floor(Math.random() * optionBot.length)];

function checkWin(player, bot) {
  if (player === bot) {
    return "Empate";
  }
  
  if (player === "Tijera" && bot === "Papel") {
    return "Has ganado";
  } 
  
  if(player === "Papel" && bot === "Tijera"){
    return "Has perdido";
  }  
  
  if (player === "Papel" && bot === "Piedra") {
    return "Has ganado";
  } 
  
  if(player === "Piedra" && bot === "Papel") {
    return "Has perdido";
  }  
  
  if (player === "Piedra" && bot === "Tijera") {
    return "Has ganado";
  } 
  
  if(player === "Tijera" && bot === "Piedra"){
    return "Has perdido";
  }  
}

function render(bot, player) {
  document.querySelector("#bot").innerHTML= `BOT: ${bot}`;
  document.querySelector("#player").innerHTML= `PLAYER: ${player}`;
  document.querySelector("#result").innerHTML = checkWin(player, bot);
}

render(bot,player);
