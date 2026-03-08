function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

let found = USERS.find(u =>
u.username === user && u.password === pass
)

if(found){

localStorage.setItem("sessionUser",user)
localStorage.setItem("sessionRole",found.role)

window.location.href="dashboard.html"

}else{

document.getElementById("msg").innerText="Login inválido"

}

}
