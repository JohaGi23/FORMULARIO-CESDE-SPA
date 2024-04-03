//Controlador
// Función de exportación que representa la aplicación
export function App() {
const objetoDOM = document;
//Código HTML que representa la barra de navegación
const nav = `
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/App/assets/img/logo.png" alt="Bootstrap" width="" height="26">
        </a>
      </div>
      <div class="container-fluid">

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nosotros ⌵
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Quienes somos</a></li>
                <li><a class="dropdown-item" href="#">Calidad</a></li>
                <li><a class="dropdown-item" href="#">Proveedores</a></li>
                <li><a class="dropdown-item" href="#">Sostenibilidad</a></li>
                <li><a class="dropdown-item" href="#">Trabaje con nosotros</a></li>
                <li><a class="dropdown-item" href="#">Linea de Transpariencia</a></li>
                <li><a class="dropdown-item" href="#">Informe y gestion</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">Empresa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nuestros programas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">eCesde</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Escuela ⌵
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Nuevas tecnologias</a></li>
                <li><a class="dropdown-item" href="#">Industria creativa</a></li>
                <li><a class="dropdown-item" href="#">Gastronomia y turismo</a></li>
                <li><a class="dropdown-item" href="#">Desarrollo empresarial</a></li>
                <li><a class="dropdown-item" href="#">Agro</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sedes ⌵
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Medellín</a></li>
                <li><a class="dropdown-item" href="#">Bello</a></li>
                <li><a class="dropdown-item" href="#">Rio negro</a></li>
                <li><a class="dropdown-item" href="#">La pintada</a></li>
                <li><a class="dropdown-item" href="#">Apartado</a></li>
                <li><a class="dropdown-item" href="#">Bogota</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nuestros servicios ⌵
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Quienes somos</a></li>
                <li><a class="dropdown-item" href="#">Calidad</a></li>
                <li><a class="dropdown-item" href="#">Proveedores</a></li>
                <li><a class="dropdown-item" href="#">Sostenibilidad</a></li>
                <li><a class="dropdown-item" href="#">Trabaje con nosotros</a></li>
                <li><a class="dropdown-item" href="#">Linea de Transpariencia</a></li>
                <li><a class="dropdown-item" href="#">Informe y gestion</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;
// Código HTML que representa el contenido principal
const main =`
      <main class="d-flex flex-row" id="main">
        <section class="container contenedor1">
          <div class="col">
            <div class="col">
              <article id="desarrollo" class="article text-white position-relative">
                <h3 class="text">Escuela de Desarrollo Empresarial</h3>
                <a href="#" class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#2bb1aa"
                    class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </a>
              </article>
            </div>
            <div class="col">
              <article id="gastronomia" class="article text-white position-relative">
                <h3 class="text">Escuela de Gastronomía y Turismo</h3>
                <a href="#" class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#e89900"
                    class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </a>
              </article>
            </div>
          </div>
          <div class="col">
            <article id="industria" class="article text-white position-relative">
              <h3 class="text">Escuela de industrias Creativas</h3>
              <a href="#" class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#bb00e5"
                  class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </a>
            </article>
          </div>
          </div>
          <div class="col">
            <article id="tecnologia" class="article text-white position-relative">
              <h3 class="text">Escuela de Nueva Tecnologias</h3>
              <a href="#" class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#03045e"
                  class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </a>
            </article>
          </div>
          <div class="col">
            <article id="salud" class="article text-white position-relative">
              <h3 class="text">Escuela de Salud y Cuidado</h3>
              <a href="#" class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#009ee2"
                  class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </a>
            </article>
          </div>
          <div class="col">
            <article id="agro" class="article text-white position-relative">
              <h3 class="text">Escuela del Agro</h3>
              <a href="#" class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="#6e9921"
                  class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </a>
            </article>
          </div>
          </div>
        </section>
        <section class="container mt-5 contenedor2">
          <h2 class="text">Conéctemonos con tu propósito</h2>
          <p class="text">Deja tus datos para comunicarnos contigo y resolver tus dudas.</p>
          <p class="text">Si eres <strong>menor de edad</strong>, todos los procesos deberán realizarse con tu
              acudiente.</p>
          <form>
            <div class="row mb-3">
              <div class="col">
                <div class="form-group">                 
                  <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <input type="text" class="form-control" id="apellidos" placeholder="Apellidos">
                </div>
              </div>
            </div>
            <div class="form-group">
              <input type="tel" class="form-control" id="telefono" placeholder="Número celular">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="correo" placeholder="Correo">
            </div>
            <div class="form-group">
              <select class="form-control" id="sede">
                <option>Seleccione sede</option>
                <option>Medellín</option>
                <option>Bello</option>
                <option>Bogotá</option>
                <option>Urabá</option>
                <option>La Pintada</option>
                <option>Rio negro</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control" id="programa">
                <option value="Seleccione programa">Seleccione programa</option>
                <option value="Técnico Laboral como Auxiliar Administrativo en Salud en Medellín">Técnico Laboral como Auxiliar
                  Administrativo en Salud en Medellín</option>
                <option value="Técnico Laboral como Auxiliar en Servicios Farmacéuticos en Medellín">Técnico Laboral como Auxiliar en
                  Servicios Farmacéuticos en Medellín</option>
                <option value="Técnico Laboral en Atención Integral a la Primera Infancia en Medellín">Técnico Laboral en Atención
                  Integral a la Primera Infancia en Medellín</option>
                <option value="Técnico Laboral en Auxiliar en Enfermería en Medellín">Técnico Laboral en Auxiliar en Enfermería en
                  Medellín</option>
                <option value="Técnico Laboral en Atención y Cuidado a Personas Mayoresen Medellín">Técnico Laboral en Atención y
                  Cuidado a Personas Mayoresen Medellín</option>
                <option value="Técnico Laboral como Asistente de Animación 3D/VFX en Medellín">Técnico Laboral como Asistente de
                  Animación 3D/VFX en Medellín</option>
                <option value="Técnico Laboral como Asistente en Desarrollo de Software en Medellín">Técnico Laboral como Asistente en
                  Desarrollo de Software en Medellín</option>
                <option value="Técnico Laboral como Asistente en Desarrollo de Videojuegos en Medellín">Técnico Laboral como Asistente
                  en Desarrollo de Videojuegos en Medellín</option>
                <option value="Técnico Laboral como Asistente en Diseño de Modas en Medellín">Técnico Laboral como Asistente en Diseño
                  de Modas en Medellín</option>
                <option value="Técnico Laboral como Asistente en Diseño Gráfico en Medellín">Técnico Laboral como Asistente en Diseño
                  Gráfico en Medellín</option>
                <option value="Técnico Laboral como Asistente en Electromecánica en Medellín">Técnico Laboral como Asistente en
                  Electromecánica en Medellín</option>
                <option value="Técnico Laboral como Instalador de Redes de Energía Eléctrica y Solar en Medellín">Técnico Laboral como
                  Instalador de Redes de Energía Eléctrica y Solar en Medellín</option>
                <option value="Técnico Laboral como Auxiliar en Producción Audiovisual en Medellín">Técnico Laboral como Auxiliar en
                  Producción Audiovisual en Medellín</option>
                <option value="Técnico Laboral como Asistente en Producción Fotográfica en Medellín">Técnico Laboral como Asistente en
                  Producción Fotográfica en Medellín</option>
                <option value="Técnico Laboral como Auxiliar en Publicación de Contenidos Digitales en Medellín">Técnico Laboral como
                  Auxiliar en Publicación de Contenidos Digitales en Medellín</option>
                <option value="Técnico Laboral en Soporte de Sistemas Informáticos en Medellín">Técnico Laboral en Soporte de Sistemas
                  Informáticos en Medellín</option>
                </select>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control" id="medio">
                <option value="Medio por cual se entero">Medio por cual se entero</option>
                <option value="Redes sociales">Redes sociales</option>
                <option value="Eventos">Eventos</option>
                <option value="Página web">Página web</option>
                <option value="Publicidad">Publicidad</option>
                <option value="Recomendación">Recomendación</option>
                <option value=""></option>
              </select>
            </div>
            <a href="#" class="politica text-decoration-none mb-3 d-block">Política de Tratamiento y Protección de Datos Personales</a>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="terminos">
              <label class="form-check-label" for="terminos">He leído los términos y condiciones</label>
            </div>
            <button type="submit" class="btn ">Enviar</button>
          </form>
        </section>
      </main>

`
// Establece el contenido HTML generado en el elemento con ID "root"
objetoDOM.getElementById("root").innerHTML = `${nav} ${main}`;
}