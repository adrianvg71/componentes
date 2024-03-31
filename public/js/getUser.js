let user = ""

fetch('/getUser')
  .then(response => response.json())
  .then(data => {
    user = data.username;
    // Manejar la respuesta y utilizar el username
    console.log('Username:', data.username);
    // Aquí puedes hacer cualquier operación con el username recuperado
    document.dispatchEvent(new Event('userReady'));
  })
  .catch(error => {
    console.error('Error al obtener el username:', error);
  });


export { user }