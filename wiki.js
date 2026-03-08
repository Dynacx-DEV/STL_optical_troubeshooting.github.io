fetch("articles.json")

.then(r=>r.json())

.then(data=>{

let menu=document.getElementById("menu")

data.forEach(article=>{

let div=document.createElement("div")

div.innerText=article.title

div.onclick=()=>showArticle(article)

menu.appendChild(div)

})

})

function showArticle(article){

document.getElementById("title").innerText=article.title

document.getElementById("article").innerHTML=article.content

}
