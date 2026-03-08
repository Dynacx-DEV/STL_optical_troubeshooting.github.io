fetch("articles.json")
.then(r=>r.json())
.then(data=>{

window.articles=data
buildMenu(data)

})

function buildMenu(data){

let menu=document.getElementById("menu")
menu.innerHTML=""

let tree={}

data.forEach(a=>{

if(!tree[a.category]) tree[a.category]={}

if(!tree[a.category][a.subcategory]) tree[a.category][a.subcategory]=[]

tree[a.category][a.subcategory].push(a)

})

for(let cat in tree){

let catDiv=document.createElement("div")
catDiv.className="tree-category"
catDiv.innerHTML="▶ "+cat

let subContainer=document.createElement("div")
subContainer.className="tree-sub"

catDiv.onclick=()=>{

subContainer.style.display=
subContainer.style.display==="none"?"block":"none"

}

menu.appendChild(catDiv)
menu.appendChild(subContainer)

for(let sub in tree[cat]){

let subDiv=document.createElement("div")
subDiv.className="tree-subcategory"
subDiv.innerHTML="▶ "+sub

let artContainer=document.createElement("div")
artContainer.className="tree-articles"

subDiv.onclick=()=>{

artContainer.style.display=
artContainer.style.display==="none"?"block":"none"

}

subContainer.appendChild(subDiv)
subContainer.appendChild(artContainer)

tree[cat][sub].forEach(a=>{

let art=document.createElement("div")
art.className="tree-article"
art.innerText=a.title

art.onclick=()=>showArticle(a)

artContainer.appendChild(art)

})

}

}

}

function showArticle(a){

document.getElementById("breadcrumbs").innerHTML=

`<span>${a.category}</span> › <span>${a.subcategory}</span> › <b>${a.title}</b>`

let html=""

html+=`<h2>${a.title}</h2>`
html+=`<p><b>Problem:</b> ${a.problem}</p>`

html+="<h3>Symptoms</h3>"
a.symptoms.forEach(s=>html+=`<li>${s}</li>`)

html+="<h3>Diagnostics</h3>"
a.diagnostics.forEach(d=>html+=`<li>${d}</li>`)

html+="<h3>Resolution</h3>"
a.resolution.forEach(r=>html+=`<li>${r}</li>`)

html+="<h3>Tags</h3>"
a.tags.forEach(t=>html+=`<span class="tag">${t}</span>`)

if(a.images){

html+="<h3>Images</h3>"

a.images.forEach(i=>{

html+=`<img src="${i}" class="thumb" onclick="openImage('${i}')">`

})

}

if(a.diagrams){

html+="<h3>Diagrams</h3>"

a.diagrams.forEach(d=>{

html+=`<img src="${d}" class="thumb" onclick="openImage('${d}')">`

})

}

document.getElementById("article").innerHTML=html

}

function openImage(src){

let overlay=document.createElement("div")
overlay.className="image-overlay"

overlay.innerHTML=`

<div class="image-box">

<button class="close-btn">X</button>

<img src="${src}" class="fullscreen">

</div>
`

overlay.querySelector(".close-btn").onclick=()=>overlay.remove()

document.body.appendChild(overlay)

}
