

function signIn(){
    let Name = document.getElementById('Name').value
    let Email = document.getElementById('Email').value
    let Password= document.getElementById('Password').value
    let Conpassword= document.getElementById('Conpassword').value
    let message = document.getElementById('message');
    if(Name=="" || Email=="" || Password=="" || Conpassword==""){
        message.classList.add("Error");
        message.innerHTML=`Error : All the fields are mandatory`
    }
    else{
        message.classList.add("success");
        message.innerHTML=""
        message.innerHTML=`Successfully Signed Up!`
        updateLocalStorage();
    }
}
function updateLocalStorage(){
    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
    let password= document.getElementById('Password').value
    
    const user={
        Name : name,
        Email : email,
        Password : password,
    }
    const key = Math.random().toString(36).substring(2,36);
    console.log(key);
    window.localStorage.setItem(key,JSON.stringify(user));
    setTimeout(profile,3000);
    console.log('now1');
    location.href="profile.html";
}
 let profile = function profileInfo(key){
    console.log('now');
   let data = JSON.parse(window.localStorage.getItem(key));
   console.log(data.Name);
   console.log(data.Email);
   console.log(data.Password);
}
