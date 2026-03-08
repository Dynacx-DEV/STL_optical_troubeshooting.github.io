fetch("articles.json")

.then(r=>r.json())

.then(data=>{

window.articles=data
buildMenu(data)

})

function buildMenu(data){

let menu=document.getElementById("menu")
menu.innerHTML=""

let categories={}

data.forEach(a=>{

if(!categories[a.category]){

categories[a.category]={}

}

if(!categories[a.category][a.subcategory]){

categories[a.category][a.subcategory]=[]

}

categories[a.category][a.subcategory].push(a)

})

for(let cat in categories){

let catDiv=document.createElement("div")
catDiv.innerHTML="<b>"+cat+"</b>"
catDiv.style.cursor="pointer"

let subContainer=document.createElement("div")
subContainer.style.marginLeft="15px"
subContainer.style.display="none"

catDiv.onclick=()=>{

subContainer.style.display =
subContainer.style.display=="none"?"block":"none"

}

menu.appendChild(catDiv)

for(let sub in categories[cat]){

let subDiv=document.createElement("div")
subDiv.innerHTML="<i>"+sub+"</i>"
subDiv.style.marginLeft="10px"

let artContainer=document.createElement("div")
artContainer.style.marginLeft="15px"

subContainer.appendChild(subDiv)

categories[cat][sub].forEach(a=>{

let art=document.createElement("div")

art.innerText=a.title

art.onclick=()=>showArticle(a)

artContainer.appendChild(art)

})

subContainer.appendChild(artContainer)

}

menu.appendChild(subContainer)

}


function openImage(src){

let overlay=document.createElement("div")

overlay.style.position="fixed"
overlay.style.top="0"
overlay.style.left="0"
overlay.style.width="100%"
overlay.style.height="100%"
overlay.style.background="rgba(0,0,0,0.8)"
overlay.style.display="flex"
overlay.style.alignItems="center"
overlay.style.justifyContent="center"

overlay.innerHTML=`<img src="${src}" style="max-width:90%;max-height:90%">`

overlay.onclick=()=>overlay.remove()

document.body.appendChild(overlay)

}
}
