const anonNav = `
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
    justify-content: center;
    align-items: center;
}

.perfil-dropdown a {
    height: 100%;
    text-decoration: none;
    color: #fff;
}

.perfil-dropdown a i {
    display: block;
    font-size: 44px;
    height: 100%;
}
</style>
<nav>
<div class="titulo">Componentes</div>
<ul>
    <li class="navbar-item"><a href="#">Inicio</a></li>
    <li class="navbar-item"><a href="#">Productos</a></li>
    <li class="navbar-item"><a href="#">Contacto</a></li>
</ul>
<div class="perfil anon">
    <div class="iniciarSesion">
        <p>No has iniciado sesion</p>
        <a href="/login">Inicia sesion aqui</a>
    </div>
    <div class="perfil-dropdown">
        <a href="/login">
            <i class='bx bxs-user-circle'></i>
        </a>
    </div>
</div>
</nav>
`

export { anonNav }