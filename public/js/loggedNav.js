import { user } from "./getUser.js"

const usu = user
const loggedNav = `
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

nav {
    background-color: #ff6000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 20px 30px;
    align-items: center;
}

ul {
    display: flex;
    list-style: none;
    width: auto;
}

a {
    text-decoration: none;
}

ul li a {
    display: block;
    color: #ddd;
    font-size: 1.6rem;
    transition: background-color .3s ease-in-out, color .3s ease-in-out;
    margin-left: 30px;
    margin-right: 30px;
    padding: 10px;
    border-radius: 20px;
}

ul li a:hover {
    background-color: #F2F2F2;
    color: #333333;
}

.titulo {
    font-size: 2.3rem;
    
}

.perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
}

.iniciarSesion {
    display: flex;
    flex-flow: column;
    gap: 2px;
}

.perfil-dropdown {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: baseline;
    position: relative;
}

.user {
    align-self: center;
}

.perfil-dropdown i {
    font-size: 40px;
}

.perfil-dropdown .small {
    margin-left: -6px;
    font-size: 25px;
}

.perfil-dropdown-content {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 10%;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    transition: opacity .3s ease-in-out;
}

.perfil-dropdown:hover .perfil-dropdown-content {
    opacity: 1;
    pointer-events: all;
}
.perfil-dropdown-content form input {
    background-color: transparent;
    padding: 12px 16px;
    border: none;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    color: #333333;
}

.perfil-dropdown-content form input:hover {
    background-color: #f1f1f1;
}

</style>
<nav>
<div class="titulo">Componentes</div>
<ul>
    <li class="navbar-item"><a href="#">Inicio</a></li>
    <li class="navbar-item"><a href="#">Productos</a></li>
    <li class="navbar-item"><a href="#">Contacto</a></li>
</ul>
<div class="perfil">
    <div class="perfil-dropdown">
        <div class="user">
            <p class="username">Bienvenido/a </p>
        </div>
        <div>
            <i class='bx bxs-user-circle'></i>
            <i class='small bx bx-chevron-down'></i>
            <div class="perfil-dropdown-content">
                <form action="/logout" method="post">
                    <input type="submit" value="Cerrar sesion">
                </form>
            </div>
        </div>
    </div>
</div>
</nav>
<script>
console.log("entra en el script")
document.addEventListener('userReady', function() {
    console.log("entra en la funcion")
    console.log(usu)
let p = document.querySelector(".username");
p.textContent = "Bienvenido/a " + usu;
});
</script>
`

export { loggedNav }