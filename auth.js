async function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

let hash=await hashPassword(p)

let user=USERS.find(x=>x.username===u && x.password===hash)

if(user){

localStorage.setItem("sessionUser",u)
localStorage.setItem("sessionRole",user.role)

window.location="dashboard.html"

}else{

document.getElementById("msg").innerText="Login inválido"

}

}
