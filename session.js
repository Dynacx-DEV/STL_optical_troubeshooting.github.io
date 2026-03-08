function checkSession(){

if(!localStorage.getItem("sessionUser")){

window.location.href="index.html"

}

}

function logout(){

localStorage.clear()

window.location.href="index.html"

}
