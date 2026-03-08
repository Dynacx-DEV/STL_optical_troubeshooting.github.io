document.getElementById("search")

.addEventListener("keyup",function(){

let term=this.value.toLowerCase()

let items=document.querySelectorAll("#menu div")

items.forEach(i=>{

if(i.innerText.toLowerCase().includes(term)){

i.style.display="block"

}else{

i.style.display="none"

}

})

})
