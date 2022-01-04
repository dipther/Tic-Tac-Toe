const gameBoard = (()=>{
arrayTablero=[]
body=document.querySelector(".body")
function crearTablero(){
grande=document.querySelector(".grande")
for(i=0;i<9;i++){
    arrayTablero[i]=grande.appendChild(document.createElement("div"))
    arrayTablero[i].className="cuadro"
}
}
crearTablero()
pequeños=document.querySelectorAll(".cuadro")

function ponerFigura(){
let contador=0
    pequeños.forEach((div) => {
        div.addEventListener('click', () => {
          if(div.textContent==""){
          if(contador%2==0){
           div.textContent=jugador1.figura
           jugador2.printearJugador()
           contador+=1
           
         }
         else if(contador%2!=0){
          div.textContent=jugador2.figura
          jugador1.printearJugador()
          contador+=1
        }
      }
        console.log(contador)
        });
 });
}
ponerFigura()
return{
  ponerFigura:ponerFigura,
  arrayTablero,
}
})();

function crearJugadores(figura){
turno=document.querySelector(".turno")
return{
  figura,
  printearJugador(){
    turno.textContent= "turno del jugador " + figura
  }
}
}
let jugador1= crearJugadores("X")
let jugador2= crearJugadores("O")
function ganar(){
const overlay=document.getElementById("overlay")
const modal=document.getElementById("modal")  
const header=document.querySelector(".modalHeader")  
  if(gameBoard.arrayTablero[0].textContent=="X" && gameBoard.arrayTablero[1].textContent=="X" && gameBoard.arrayTablero[2].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[0].textContent=="O" && gameBoard.arrayTablero[1].textContent=="O" && gameBoard.arrayTablero[2].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[0].textContent=="X" && gameBoard.arrayTablero[4].textContent=="X" && gameBoard.arrayTablero[8].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[0].textContent=="O" && gameBoard.arrayTablero[4].textContent=="O" && gameBoard.arrayTablero[8].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[3].textContent=="X" && gameBoard.arrayTablero[4].textContent=="X" && gameBoard.arrayTablero[5].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[3].textContent=="O" && gameBoard.arrayTablero[4].textContent=="O" && gameBoard.arrayTablero[5].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[6].textContent=="X" && gameBoard.arrayTablero[7].textContent=="X" && gameBoard.arrayTablero[8].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[6].textContent=="O" && gameBoard.arrayTablero[7].textContent=="O" && gameBoard.arrayTablero[8].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[8].textContent=="X" && gameBoard.arrayTablero[5].textContent=="X" && gameBoard.arrayTablero[2].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[8].textContent=="O" && gameBoard.arrayTablero[5].textContent=="O" && gameBoard.arrayTablero[2].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[0].textContent=="X" && gameBoard.arrayTablero[3].textContent=="X" && gameBoard.arrayTablero[6].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[0].textContent=="O" && gameBoard.arrayTablero[3].textContent=="O" && gameBoard.arrayTablero[6].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[1].textContent=="X" && gameBoard.arrayTablero[4].textContent=="X" && gameBoard.arrayTablero[7].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[1].textContent=="O" && gameBoard.arrayTablero[4].textContent=="O" && gameBoard.arrayTablero[7].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[2].textContent=="X" && gameBoard.arrayTablero[4].textContent=="X" && gameBoard.arrayTablero[6].textContent=="X")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador X gana"
    }
    if(gameBoard.arrayTablero[2].textContent=="O" && gameBoard.arrayTablero[4].textContent=="O" && gameBoard.arrayTablero[6].textContent=="O")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="jugador O gana"
    }
    if(gameBoard.arrayTablero[0].textContent!="" &&gameBoard.arrayTablero[1].textContent!="" &&gameBoard.arrayTablero[2].textContent!="" &&
    gameBoard.arrayTablero[3].textContent!="" &&gameBoard.arrayTablero[4].textContent!="" &&gameBoard.arrayTablero[5].textContent!="" &&
    gameBoard.arrayTablero[6].textContent!="" &&gameBoard.arrayTablero[7].textContent!="" &&gameBoard.arrayTablero[8].textContent!="")
    {
      modal.classList.add("active")
      overlay.classList.add("active")
      header.textContent="empate"
    }
    
    setTimeout(ganar,500)
}
ganar()

function reiniciar(){
  const tryAgain=document.querySelector(".tryAgain")
  tryAgain.addEventListener("click",()=>{
    location.reload()
  })
}
reiniciar()