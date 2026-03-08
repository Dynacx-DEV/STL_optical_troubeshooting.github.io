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

catDiv.className="menu-category"

let subContainer=document.createElement("div")

subContainer.style.display="none"

catDiv.onclick=()=>{

subContainer.style.display=
subContainer.style.display=="none"?"block":"none"

}

menu.appendChild(catDiv)

for(let sub in categories[cat]){

let subDiv=document.createElement("div")

subDiv.innerHTML=sub

subDiv.className="menu-sub"

let artContainer=document.createElement("div")

categories[cat][sub].forEach(a=>{

let art=document.createElement("div")

art.innerText=a.title

art.className="menu-article"

art.onclick=()=>showArticle(a)

artContainer.appendChild(art)

})

subContainer.appendChild(subDiv)

subContainer.appendChild(artContainer)

}

menu.appendChild(subContainer)

}

}

function showArticle(a){

let html=""

html+=`<h2>${a.title}</h2>`

html+=`<p><b>Problem:</b> ${a.problem}</p>`

html+="<h3>Symptoms</h3>"

a.symptoms.forEach(s=>{

html+=`<li>${s}</li>`

})

html+="<h3>Diagnostics</h3>"

a.diagnostics.forEach(d=>{

html+=`<li>${d}</li>`

})

html+="<h3>Resolution</h3>"

a.resolution.forEach(r=>{

html+=`<li>${r}</li>`

})

html+="<h3>Tags</h3>"

a.tags.forEach(t=>{

html+=`<span class="tag">${t}</span>`

})

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

overlay.innerHTML=`<img src="${src}" class="fullscreen">`

overlay.onclick=()=>overlay.remove()

document.body.appendChild(overlay)

}
