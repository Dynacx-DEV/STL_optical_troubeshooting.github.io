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

categories[a.category]=[]

}

categories[a.category].push(a)

})

for(let cat in categories){

let h=document.createElement("h3")

h.innerText=cat

menu.appendChild(h)

categories[cat].forEach(a=>{

let div=document.createElement("div")

div.innerText=a.title

div.onclick=()=>showArticle(a)

menu.appendChild(div)

})

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

a.diagnostics.forEach(s=>{

html+=`<li>${s}</li>`

})

html+="<h3>Resolution</h3>"

a.resolution.forEach(s=>{

html+=`<li>${s}</li>`

})

html+="<h3>Tags</h3>"

a.tags.forEach(t=>{

html+=`<span class="tag">${t}</span>`

})

if(a.images){

html+="<h3>Images</h3>"

a.images.forEach(i=>{

html+=`<img src="${i}" width="400">`

})

}

if(a.diagrams){

html+="<h3>Diagrams</h3>"

a.diagrams.forEach(i=>{

html+=`<img src="${i}" width="500">`

})

}

document.getElementById("article").innerHTML=html

}
