const login = async () => {
    const payload = {
      correo: document.getElementById('correo').value,
      contrasena: document.getElementById('contrasena').value
    }
    console.log("Login", payload);
    const result = await fetch('http://localhost:3000/usuarios/login', {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(payload),
      method: 'POST'
    });
    const response = await result.json();
    if (!response || !response.status) {
      alert("Usuario/Contraseña incorrecta");
    } else {
      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      window.location.href = '/profile.html';
    }
    console.log(response);
  };