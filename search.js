document.getElementById("search")
.addEventListener("keyup",function(){

let term=this.value.toLowerCase()

if(term.length<2){

buildMenu(articles)
return

}

let results=articles.filter(a=>{

let text=""

text+=a.title+" "
text+=a.problem+" "

text+=a.tags.join(" ")+" "
text+=a.symptoms.join(" ")+" "
text+=a.diagnostics.join(" ")+" "
text+=a.resolution.join(" ")

return text.toLowerCase().includes(term)

})

buildMenu(results)

})
