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

let adminItems = document.querySelectorAll(".admin")

adminItems.forEach(x => x.style.display = "none")

}

}