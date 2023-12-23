const display = document.querySelector('#compteur');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const reset = document.querySelector('#reset');
let cpt = 0;

function displayfnt (){
  display.textContent = "Total : "+ cpt;
}

document.addEventListener('keydown',(e)=>{
  if(e.key == "ArrowUp"){
    cpt++

    displayfnt ()
  }
  if(e.key == "ArrowDown"){
    cpt --
  
    displayfnt ()
  }
  if(e.key == "ArrowRight"){
    cpt +=2
   
    displayfnt ()
  }
})

b1.addEventListener("click",(e)=>{
  cpt--

  displayfnt ()
})

b2.addEventListener("click",(e)=>{
  cpt++

  displayfnt ()
})

b3.addEventListener("click",(e)=>{
  cpt +=2

  displayfnt ()
})

reset.addEventListener("click",(e)=>{
  if(confirm("Reset du compteur")){
    cpt = 0;
    displayfnt()
  }
})


