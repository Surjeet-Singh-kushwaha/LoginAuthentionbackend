const form = document.getElementById("form");
form.addEventListener('submit', () => {
    event.preventDefault();
    const register = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    fetch('/api/register', {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
          const error=  document.getElementById('error')
          const success=  document.getElementById('success')
            if (data.status == 'error') {
                success.style.display = 'none';
                error.style.display = 'block'
                error.innerText = data.error;
                console.log(data.error)
            } else {
                success.style.display = 'block';
                error.style.display = 'none'
                success.innerText = data.success;
                console.log(data.success)
            }
        })
})