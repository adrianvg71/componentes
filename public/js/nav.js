window.onload = function() {
    let modal = document.getElementById("authModal");
    let abrirModalBtn;
    let cerrarModalBtn = document.querySelector(".cerrarModal");
    let cerrarModalBtn2 = document.querySelector(".cerrarModal2");
    let loginModal = document.getElementById("loginModal");
    let registerModal = document.getElementById("registerModal");
    let loginModalBtn = document.querySelector("#loginModal #cambiar");
    let registerModalBtn = document.querySelector("#registerModal #cambiar");
    let carrito;
    const usuario = JSON.parse(user.value);

    
    if(usuario.isLoggedIn) {
        getCarrito();
    }

    let ojos = document.querySelectorAll("#ojo");
    ojos.forEach(ojo => {
        ojo.addEventListener("click", function() {
            if(ojo.firstElementChild.id === "text") {
                ojo.parentNode.parentElement.firstElementChild.type = "text"
                ojo.innerHTML = `
                <svg id="password" class="size-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5" stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                `
            } else {
                ojo.parentNode.parentElement.firstElementChild.type = "password"
                ojo.innerHTML = `                            
                <svg id="text" class="size-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
            }
        })
    })

    // Función para cerrar el modal
    cerrarModalBtn.addEventListener("click", function() {
        cerrarModal();
    });

    cerrarModalBtn2.addEventListener("click", function() {
        cerrarModal();
    });

    // Función para cerrar el modal si se presiona la tecla "Escape"
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.opacity !== "0") {
            cerrarModal();
        }
    });

    // Función para cerrar el modal si se hace clic fuera de él
    document.addEventListener("mousedown", function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.opacity = 0;
        modal.classList.toggle("invisible")
        document.body.classList.remove("overflow-hidden");
        // modal.style.pointerEvents = "none";
    }

    // Cambiar contenido del modal
    loginModalBtn.addEventListener("click", function() {
        registerModal.classList.toggle("hidden")
        loginModal.classList.toggle("hidden")
    })

    registerModalBtn.addEventListener("click", function() {
        loginModal.classList.toggle("hidden")
        registerModal.classList.toggle("hidden")
    })

    let span = document.createElement("span");
    span.classList.add("error");


    const loginForm = document.querySelector("#loginForm")
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        span.remove();

        const formData = new FormData(loginForm);
        const formJSON = Object.fromEntries(formData.entries());

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
            } else {
                window.location.href = "/" 
            }
             
        })
        .catch(error => {
            span.textContent = "Correo y/o contraseña incorrectas";
            loginForm.childNodes[5].append(span);
            console.error('Error:', error);
        });
    })

    const registerForm = document.querySelector("#registerForm")
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        span.remove();
  
      const formData = new FormData(registerForm);
      const formJSON = Object.fromEntries(formData.entries());
  
  
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
          } else {
            registerModal.classList.toggle("hidden")
            loginModal.classList.toggle("hidden")
          }
      })
      .then(data => {
          console.log('Usuario registrado:', data);
        //   registerModal.classList.toggle("hidden")
        //   loginModal.classList.toggle("hidden")
      })
      .catch(error => {
          span.textContent = "El correo ya esta en uso";
          registerForm.childNodes[7].append(span);
          console.error('Error:', error);
      });
    })

    // Dropdown perfil
    const abrirDropdown = document.getElementById("abrirDropdown");
    const dropdown = document.querySelector(".perfil-dropdown-content")
    // Dropdown cesta
    const abrirDropdownCesta = document.getElementById("abrirDropdownCesta");
    const dropdownCesta = document.querySelector(".cesta-dropdown-content")



    if(abrirDropdown) {
        abrirDropdown.addEventListener("click", function() {
            if(dropdown.classList.contains("invisible")) {
                dropdown.classList.toggle("invisible")
                dropdown.style.opacity = "1";
            } else {
                dropdown.classList.toggle("invisible")
                dropdown.style.opacity = "0";
            }
        })
    }

        document.addEventListener("mousedown", function(event) {
            if(abrirDropdown) {
                if (!dropdown.contains(event.target) && !abrirDropdown.contains(event.target)) {
                    dropdown.classList.add("invisible");
                    dropdown.style.opacity = "0";
                }
                if (!document.getElementById("cesta-dropdown-content").contains(event.target) && !abrirDropdownCesta.contains(event.target)) {
                    dropdownCesta.classList.add("invisible");
                    dropdownCesta.style.opacity = "0";
                }
            }
        });



    if(abrirDropdownCesta) {
        abrirDropdownCesta.addEventListener("click", function() {
            if(dropdownCesta.classList.contains("invisible")) {
                dropdownCesta.classList.toggle("invisible")
                dropdownCesta.style.opacity = "1";
            } else {
                dropdownCesta.classList.toggle("invisible")
                dropdownCesta.style.opacity = "0";
            }
        })
    }

    let categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", seleccionarCategoria)
    });

    let categoria = "todos";
    async function seleccionarCategoria(event) {
        categoria = "todos";
        const categoriaSeleccionada = event.currentTarget;
        if(categoriaSeleccionada.classList.contains("selected")) {
            categorias.forEach(categoria => {
                categoria.style.opacity = "1"
                categoria.classList.remove("selected");
            })
            await filtrarProductos(categoria)
            return;
        }

        categoria = categoriaSeleccionada.children[1].textContent
        await filtrarProductos(categoria)

        categoriaSeleccionada.classList.add("selected")

        if(categoriaSeleccionada.style.opacity === "0.3") {
            categoriaSeleccionada.style.opacity = "1";
        }

        categorias.forEach(categoria => {
            if(categoria !== categoriaSeleccionada) {
                categoria.classList.remove("selected");
                categoria.style.opacity = "0.3"
            }
        })

    };

    var productos;
    filtrarProductos(categoria)
    async function filtrarProductos(categoria) {
        if(categoria === "todos") {
            const response = await fetch('/productos');
            productos = await response.json();
        } else {
            const response = await fetch(`/productos/${categoria}`);
            productos = await response.json();
        }
        pintarProductos(productos, categoria);
    }

    const divProductos = document.getElementById("productos")
    async function pintarProductos(productos, categoria) {
        const titulo = document.getElementById("tituloProds")
        if(categoria === "todos") {
            titulo.classList.remove("hidden");
            titulo.textContent = "TODOS LOS PRODUCTOS"
        } else if(categoria === "nada") {
            titulo.classList.add("hidden");
        } else {
            titulo.classList.remove("hidden");
            titulo.textContent = categoria.toUpperCase();
        }

        divProductos.innerHTML = "";
        await getCarrito();

        productos.forEach(producto => {
        let existe = false;
        if(carrito) {
            existe = carrito.some(carrito => carrito.idproducto === producto.idproducto)
        }
        divProductos.innerHTML += `
            <div class="producto cursor-pointer flex flex-col items-center justify-start bg-orange-300/80 border-4 border-stone-800/60 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105" onClick="window.location.href='/productos/producto/${producto.idproducto}'">
              <div class="relative w-full">
                <img class="w-full h-auto max-h-56 object-cover border-b-2 border-stone-900/60" src="${producto.img}" alt="${producto.nombre}">
              </div>
              <h3 class="text-center mt-2 mb-1 text-base font-semibold text-stone-800 px-4">${producto.nombre}</h3>
              <p class="mb-2 text-lg font-semibold text-stone-700">${producto.precio}€</p>
              ${existe ? `<button onClick='event.stopPropagation();' class="mb-4 px-4 py-2 text-white bg-gray-500/80 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500' focus:ring-opacity-50 rounded-lg cursor-not-allowed" data-id="${producto.idproducto}">Añadir al carrito</button>` : `<button id="${usuario.isLoggedIn ? 'añadirCesta' : 'abrirModal'}" class="mb-4 px-4 py-2 text-white bg-orange-500/80 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500' focus:ring-opacity-50 rounded-lg" data-id="${producto.idproducto}">Añadir al carrito</button>`}
              
            </div>
            `
        })

        abrirModalBtn = document.querySelectorAll("#abrirModal");
        abrirModalBtn.forEach(abrirModalBtn => {
            // Función para abrir el modal
            abrirModalBtn.addEventListener("click", abrirModal)
        })

        let añadirCestaBtn = document.querySelectorAll("#añadirCesta");

        añadirCestaBtn.forEach(añadirCestaBtn => {
            añadirCestaBtn.addEventListener("click", añadirCesta)
        })
    }


    function abrirModal() {
        event.stopPropagation();
        modal.classList.toggle("invisible")
        modal.style.opacity = 1;
        document.body.classList.add("overflow-hidden");
        // modal.style.pointerEvents = "all";
    }

    async function getCarrito() {
        const response = await fetch('/carrito');
        carrito = await response.json();
        pintarCarrito(carrito);
    }

    function pintarCarrito(carrito) {
        let divCesta = document.getElementById("cesta-dropdown-content");
        let finalizarCompra = document.getElementById("finalizarCompra");
        divCesta.innerHTML = "";
        finalizarCompra.innerHTML = "";
        if(carrito.length === 0) {
            divCesta.innerHTML = `
            <div class="flex-grow flex flex-col justify-center items-center gap-4 text-stone-400 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            <p>No hay productos en el carrito</p>            
          </div>`
        } else {
            carrito.forEach(carrito => {
                divCesta.innerHTML += `
                <div onClick="window.location.href='/productos/producto/${carrito.idproducto}'" class="bg-[#e79a5c] cursor-pointer rounded-lg p-2 text-yellow-800 flex flex-row shadow-xl divide-orange-900 divide-x-4 justify-between content-center hover:scale-105 transition-transform">
                <img class="size-16 rounded-lg" src="${carrito.img}" alt="">
                <div class="flex flex-col w-[70%] text-end pr-6 content-end ">
                <p class="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis pl-4" title="${carrito.nombre}">${carrito.nombre}</p>
                <div class="flex flex-row justify-end gap-6 content-center flex-wrap items-center">
                <p class="text-xl font-bold">${carrito.precio}€</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-600/80 font-semibold cursor-pointer hover:text-red-800/80">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>                    
                </div>
                </div>
                </div>
                `
            })

            
            finalizarCompra.innerHTML = `
            <div class="rounded-b-lg bg-orange-400 text-center hover:bg-orange-500 transition-colors group">
                <a class="p-3 h-full w-full block text-white font-semibold text-xl group-hover:text-stone-300 transition-colors" href="/comprar">Finalizar compra</a>
            </div>
            `

            divCesta.querySelectorAll("svg").forEach((svg, index) => {
                svg.addEventListener("click", () => {
                    let carritoId = carrito[index].id_carrito;
                    deleteCarrito(carritoId);
                })
            })
        }
    }

    async function añadirCesta() {
        event.stopPropagation();

        abrirDropdownCesta.firstElementChild.classList.remove("animate-tada2");
        setTimeout(() => {
            abrirDropdownCesta.firstElementChild.classList.add("animate-tada2");
        }, 10);

        let nombreProducto = this.parentNode.querySelector("h3").textContent
        try {
            const response = await fetch('/carrito/insertar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombreProducto })
            });
            if (response.ok) {
                await getCarrito();
                actualizarProducto(this);
            } else {
                console.error('Error al insertar producto en el carrito:', response.statusText);
            }
        } catch(error) {
            console.error('Error al realizar la solicitud:', error);
        }

    }

    function actualizarProducto(boton) {
        boton.classList = "mb-4 px-4 py-2 text-white bg-gray-500/80 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500' focus:ring-opacity-50 rounded-lg cursor-not-allowed";
        boton.removeEventListener("click", añadirCesta);
        boton.addEventListener("click", function(even) {
            even.stopPropagation();
            return;
        })
    }


    async function deleteCarrito(id) {
        event.stopPropagation();
        let productoId = carrito.find(carrito => carrito.id_carrito === id).idproducto;
        let botones = document.querySelectorAll(".producto button");
        botones.forEach(boton => {
            if(boton.getAttribute('data-id') == productoId){
                boton.classList = "mb-4 px-4 py-2 text-white bg-orange-500/80 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500' focus:ring-opacity-50 rounded-lg"
                boton.id = "añadirCesta"
                boton.addEventListener("click", añadirCesta)
            }
        })

        try {
            const response = await fetch(`/carrito/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            if (response.ok) {
                await getCarrito();
            } else {
                console.error('Error al eliminar el recurso:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }

    }

    let search = document.getElementById("search")
    if(window.location.pathname === '/home') {
        search.parentNode.classList.remove("hidden")
    } else {
        search.parentNode.classList.add("hidden")
    }

    let searchTimer = null;

    search.addEventListener("input", buscarProducto)
    
    async function buscarProducto() {
        let ocultar = document.getElementById("ocultar");
        var resultado = search.value.trim();
        const divMensaje = document.querySelector("#mensaje");
        if (divMensaje.innerHTML !== '') {
            divMensaje.innerHTML = "";
        }
    
        // Cancelar el temporizador anterior si existe
        if (searchTimer) {
            clearTimeout(searchTimer);
        }
    
        if (resultado !== '') {
            ocultar.classList.add("hidden");
    
            // Establecer un temporizador antes de realizar la búsqueda
            searchTimer = setTimeout(async () => {
                try {
                    const response = await fetch('/productos/producto/search/' + resultado);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    if (data.length === 0) {
                        divProductos.innerHTML = "";
                        divMensaje.innerHTML = `<h3 class='text-6xl text-center text-yellow-800 font-bold italic mt-20'>No se han encontrado resultados</h3>`;
                    } else {
                        await pintarProductos(data, "nada");
                    }
                } catch (error) {
                    console.error('Error en la solicitud de búsqueda:', error);
                }
            }, 30); // Esperar 300 milisegundos antes de realizar la búsqueda
        } else {
            ocultar.classList.remove("hidden");
            filtrarProductos("todos");
            console.log("vacio");
        }
    }
    
    

    
          
}