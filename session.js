function checkSession(){

if(!localStorage.getItem("sessionUser")){

window.location="index.html"

}

}

function logout(){

localStorage.clear()

window.location="index.html"

}
