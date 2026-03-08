function checkSession(){

if(!localStorage.getItem("user")){

window.location.href="index.html"

}

}

function logout(){

localStorage.clear()

window.location.href="index.html"

}
