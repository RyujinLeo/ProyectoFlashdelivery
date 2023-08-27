var restaurantes = [];

const cargarRestaurantes = async () => {
    let respuesta = await fetch("http://localhost:3000/empresas",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    restaurantes = await respuesta.json();
    console.log(restaurantes);
    renderizarRestaurantes();
}

cargarRestaurantes();

const renderizarRestaurantes = () => {

  restaurantes.forEach(empresa => {

      document.getElementById("contenedor-padre").innerHTML +=
      `
      <section class="seccion-imagen" id="seccion-imagen">
            <div id="contenedor-imagen-restaurante">
                <img class="imagen-restaurante" src="${empresa.imagenLocal}" alt="">
            </div>
            <div><i class="fa-solid fa-chevron-left flecha-retroceder"></i></div>
        </section>

        <section id="logo-nombre-empresa">
            <div class="margenes card-empresa">
                <div>
                    <img class="logo-empresa" style="border-radius: 100%;" src="${empresa.logo}" alt="">
                </div>
                <div style="width: 100%; padding-left: 10px; font-size: 1.3rem;">
                    <div class="nombre-empresa">
                        <span class="banner-nombre-empresa">${empresa.nombre}</span>
                        <div style="display: flexs; margin-top: 20px;">
                            <i class="fa-sharp fa-solid fa-star estrella" style="padding: 5px 10px;"></i>
                            <span>${empresa.calificacion}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tiempo-costo-categoria">
            <div class="tiempo-envio">
                <div>${empresa.tiempoEnvio} min</div>
                <div>Envío ${empresa.costoEnvio} Lps</div>
                <div>
                    <div>Categoria:</div>
                    <div style="color:#ffab04; display: flex; justify-content: center;">Hamburguesa</div>
                </div>
            </div>
        </section>

        <section id="secccion-recomendaciones" style="margin-top: -10px;">
            <div class="estilo-contenedor-recomendaciones">
                <div class="recomendaciones-div">
                    Recomendaciones
                </div>
                <div>
                    <img class="imagen-recomendacion" src="${empresa.recomendaciones.imagenProducto}" alt="">
                </div>
                <div class="informacion-recomendacion">
                    <div class="nombre-promo-recomendada">
                        <div style="font-size: 1.5rem;">${empresa.recomendaciones.nombreProducto}</div>
                        <div class="estilo-precio">Lps. ${empresa.recomendaciones.precio}</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="seccion-producto" class="section-producto">
            <div class="recomendaciones-div">Principales</div>
            <div class="scroll-producto">
                <div class="card-producto">
                    <div style="font-family: initial;">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="font-size: 1.5rem; color: #ffab04;">${empresa.productos.nombreProducto}</div>
                            <div class="estilo-precio">Lps. ${empresa.productos.precio}</div>
                        </div>
                        <div style="font-size: 1.2rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div style="margin-left: 5px;">
                        <img class="img-producto" src="${empresa.productos.imagenProducto}" alt="">
                    </div>
                </div>
            </div>
        </section>

      
      `;
  });

  
}

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