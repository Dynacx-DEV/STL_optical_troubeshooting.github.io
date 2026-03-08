document.addEventListener("DOMContentLoaded",()=>{

let input=document.getElementById("search")

input.addEventListener("keyup",()=>{

let f=input.value.toLowerCase()

document.querySelectorAll(".sidebar a").forEach(a=>{

a.style.display=
a.innerText.toLowerCase().includes(f)?"block":"none"

})

})

})