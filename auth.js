function login(){

console.log("botão clicado")

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

let user = USERS.find(x => x.username === u && x.password === p)

if(user){

console.log("login ok")

localStorage.setItem("sessionUser",u)
localStorage.setItem("sessionRole",user.role)

window.location="dashboard.html"

}else{

console.log("login falhou")

document.getElementById("msg").innerText="Login inválido"

}

}
