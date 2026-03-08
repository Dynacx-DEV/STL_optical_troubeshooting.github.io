function saveArticle(){

let title=document.getElementById("title").value
let category=document.getElementById("category").value

let slug=title.toLowerCase().replace(/\s/g,"-")

alert("Crie manualmente arquivo: pages/"+slug+".html")

}
