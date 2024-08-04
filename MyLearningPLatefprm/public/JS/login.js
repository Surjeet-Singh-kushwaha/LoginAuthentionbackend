const form = document.getElementById("form");
form.addEventListener('submit',()=>{
    event.preventDefault();
    const login ={
        email :document.getElementById("email").value ,
        password: document.getElementById("password").value
    }

    fetch('/api/login',{
        method:"POST",
        body:JSON.stringify(login),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res =>res.json())
    .then(data => {
        if(data.status=='error'){
            success.style.display='none';
            error.style.display='block'
            error.innerText =data.error;
        }else{
            success.style.display='block';
            error.style.display='none'
            success.innerText =data.success;
            console.log(data.success)
        }
    })
})