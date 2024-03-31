import { user } from "./getUser.js";
import { loggedNav } from "./loggedNav.js";

document.addEventListener('userReady', function() {
    // El evento 'userReady' se dispara cuando la información del usuario está lista
    // Ahora puedes acceder a la variable user
    let h1 = document.querySelector("h1");
    let span = document.createElement("p");
    span.textContent = `Bienvenido/a ${user}`;
    h1.append(span);
  });

window.onload = function() {
    let header = document.querySelector("header");

    header.innerHTML = loggedNav;

    let p = document.querySelector(".username");
    let span = document.createElement("span");
    span.textContent = user;
    span.style.color = "#333333";
    p.append(span)
}