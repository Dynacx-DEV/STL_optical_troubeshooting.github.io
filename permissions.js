function checkAdmin(){

let role = localStorage.getItem("sessionRole")

if(role !== "admin"){

alert("Acesso restrito")

window.location = "dashboard.html"

}

}

function showAdminFeatures(){

let role = localStorage.getItem("sessionRole")

if(role !== "admin"){

document.querySelectorAll(".admin")
.forEach(x => x.style.display="none")

}

}
