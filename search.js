document.getElementById("search")

.addEventListener("keyup",function(){

let term=this.value.toLowerCase()

let filtered=articles.filter(a=>

a.title.toLowerCase().includes(term) ||

a.category.toLowerCase().includes(term) ||

a.tags.join(" ").toLowerCase().includes(term)

)

buildMenu(filtered)

})
