const colliseum = new Arena("Colliseum")
const gladiatorImage = document.querySelectorAll(".gladiatorImage")
const messageDisplay = document.querySelector("#message")
const creatorDisplay = document.querySelector("#gladiatorCreator")
let activeImage = null
for(let i =0; i<gladiatorImage.length; i++){
  gladiatorImage[i].addEventListener("click", function(){
    activeImage=this.getAttribute("src")
    for(let j =0; j<gladiatorImage.length; j++){
        gladiatorImage[j].classList.remove("active")
    }
    this.classList.add("active")
  })
}

document.querySelector("#createGladiator").addEventListener("click", function (){
  const name = document.querySelector("#name")
  const weapon =document.querySelector("select").value
  if(!activeImage || !name.value ){
    alert("You should pick an image and a Name")
    return false
  }
  const newGladiator = new Gladiator(name.value, weapon, activeImage)
  colliseum.addGladiator(newGladiator)
  renderGladiators()
  name.value=""
  activeImage=null
  for(let j =0; j<gladiatorImage.length; j++){
      gladiatorImage[j].classList.remove("active")
  }
})

function renderGladiators(){
  const arenaDisplay = document.querySelector(".arena")
arenaDisplay.innerHTML=""
  colliseum.gladiators.forEach(function(gladiator){
    arenaDisplay.innerHTML+="<p class='gladiator'>"+gladiator.name+" <span> "+gladiator.weapon.name+" /// "+gladiator.agility/1000+"sec/attack - "+gladiator.strength+"strength - <span class='health'>" +gladiator.health+"hp</span></span></p><img class='gladiatorImage' src="+gladiator.image+">"
  })
  if(colliseum.gladiators.length===2){
  creatorDisplay.style.display="none"
}
}

document.querySelector("#fight").addEventListener("click", function(){
  colliseum.fight()
  const healthDisplay= document.querySelectorAll(".health")
  var healthTracker = setInterval(function(){
    for(let i = 0; i<healthDisplay.length; i++){
      healthDisplay[i].textContent =colliseum.gladiators[i].health+"hp"
    }
  })
    event.on("win", function(){
      const message = colliseum.gladiators[0].name+" wins!"
      messageDisplay.textContent=message+(colliseum.winningStrike>1?colliseum.currentWinner+" won "+colliseum.winningStrike+" consecutive times.":"" )
      creatorDisplay.style.display="block"
      renderGladiators()
      clearInterval(healthTracker)
    })
})


event.on("criticalAttack", function(gladiator){
  const message = "<br>"+gladiator.name +" made a Critical Attack!! "
  messageDisplay.innerHTML+=message
})

event.on("win", function(){
  if(colliseum.currentWinner===colliseum.gladiators[0].name){
    colliseum.winningStrike++
  }else{
    colliseum.currentWinner=colliseum.gladiators[0].name
    colliseum.winningStrike=1
  }
})
