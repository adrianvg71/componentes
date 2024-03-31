document.addEventListener('DOMContentLoaded', function () {
  let loginBtn = document.getElementById("login");
  let registerBtn = document.getElementById("register");

  loginBtn.addEventListener("click", toggleLogin);
  registerBtn.addEventListener("click", toggleLogin);

  let loginDiv = document.getElementById("login-form");
  let registerDiv = document.getElementById("register-form");
  let span = document.createElement("span");
  span.classList.add("error");

  function toggleLogin() {
    loginBtn.classList.toggle("not-selected");
    registerBtn.classList.toggle("not-selected");
    loginDiv.classList.toggle("hidden");
    registerDiv.classList.toggle("hidden");
  }

  // Registro de usuarios
  const registerForm = document.querySelector('.registro');

  registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      span.remove();

    const formData = new FormData(registerForm);
    const formJSON = Object.fromEntries(formData.entries());

    console.log(formJSON)

    fetch('/user/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formJSON)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al registrar usuario');
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuario registrado:', data);
        window.location.href = '/login';
        
    })
    .catch(error => {
        span.textContent = "El correo ya esta en uso";
        span.
        console.error('Error:', error);
    });
  })

  //Inicio de sesion
  const loginForm = document.querySelector(".login")

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    span.remove();

    const formData = new FormData(loginForm);
    const formJSON = Object.fromEntries(formData.entries());

    console.log(formJSON)

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formJSON)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al iniciar sesion');
        }
        return response.json();
    })
    .then(data => {
        console.log('Iniciado sesion:', data);
        window.location.href = '/home';
        return;
    })
    .catch(error => {
        span.textContent = "Correo y/o contraseña incorrectas";
        console.log(loginForm.childNodes)
        loginForm.childNodes[5].before(span);
        console.error('Error:', error);
    });
  })

});
