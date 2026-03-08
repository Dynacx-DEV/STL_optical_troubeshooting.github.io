async function loadWiki(){

let r=await fetch("data/articles.json")
let data=await r.json()

let menu=document.getElementById("menu")

let cats={}

data.forEach(a=>{

if(!cats[a.category])cats[a.category]=[]

cats[a.category].push(a)

})

for(let c in cats){

let h=document.createElement("h3")
h.innerText=c
menu.appendChild(h)

cats[c].forEach(a=>{

let link=document.createElement("a")

link.href=a.file
link.innerText=a.title

menu.appendChild(link)

})

}

}