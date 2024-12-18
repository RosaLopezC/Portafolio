import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import background from "./assets/background.jpg";
import profilePhoto1 from "./assets/uno.jpg";
import profilePhoto2 from "./assets/dos.jpg";
import profilePhoto3 from "./assets/tres.jpg";
import profilePhoto from "./assets/profile.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight / 2 + section.offsetHeight / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Header />

      <section
        className="main-section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Aprendiendo y creando soluciones que impactan</h1>
        <img src={profilePhoto} alt="Rosa López" className="profile-photo" />
        <h2>Hola, soy Rosa López</h2>
        <p>
          Estudiante de Diseño y Desarrollo de Software | Diseñadora Gráfica
        </p>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            Estudiante de 4to ciclo de la carrera de Diseño y Desarrollo de Software en TECSUP,
            con habilidades en liderazgo, trabajo en equipo y adaptabilidad. Manejo de herramientas 
            como JavaScript, React y Bootstrap para interfaces de usuario y diseño web responsivo.
          </p>
          <h3>Educación Superior</h3>
          <ul>
            <li>
              <strong>Instituto de Educación Superior Privado TECSUP:</strong>
              <br></br> 
              Diseño y Desarrollo de Software (2023 - Actualmente)
              <br></br>
              <em>Acreedora de la beca BCP</em>
            </li>
            
            <li>
              <strong>CIBERTEC:</strong>
              <br></br> 
              Diseño Gráfico (2021 - 2022)
            </li>
            <li>
              <strong>Instituto de Educación Superior CEPEA:</strong> 
              <br></br>
              Diseño Gráfico (2019)
            </li>
          </ul>
          <h3>Habilidades Adicionales</h3>
          <ul>
            <li>Nivel intermedio de Adobe XD, HTML, CSS – Cibertec (2020 – 2022)</li>
            <li>Nivel básico de inglés – Conversa (Actualmente estudiando)</li>
            <li>Nivel intermedio de Microsoft Office – Cibertec (2020 – 2022)</li>
            <li>Nivel intermedio de Adobe Illustrator, Photoshop e InDesign – Cibertec (2020 – 2022)</li>
          </ul>
        </div>
        <div className="about-carousel">
          <div
            id="aboutCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={profilePhoto1} className="d-block w-100" alt="Foto 1" />
              </div>
              <div className="carousel-item">
                <img src={profilePhoto2} className="d-block w-100" alt="Foto 2" />
              </div>
              <div className="carousel-item">
                <img src={profilePhoto3} className="d-block w-100" alt="Foto 3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section id="quote" className="section quote">
        <h2>"Transformo ideas en realidades visuales y digitales impactantes."</h2>
      </section>

      <section id="experience" className="section experience">
      <strong><h2>Experiencias</h2></strong>
        <div className="experience-container">
        <div className="card academic-experience">
          <h3>Experiencia Académica</h3>
          <div className="card-content">
            <h4>III Ciclo:</h4>
            <p><strong>Cursos:</strong> Diseño de Aplicaciones en Internet e Ingeniería de Requerimientos</p>
            <p><strong>Título:</strong> Sistema de gestión administrativa de citas</p>
            <p><strong>Descripción:</strong> Se creó un sistema que permite crear, eliminar, editar y listar pacientes, doctores y agendar citas en un horario.</p>
            <hr />
            <h4>IV Ciclo:</h4>
            <p><strong>Cursos:</strong> Diseño de Aplicaciones web y Diseño de Aplicaciones Empresariales</p>
            <p><strong>Título:</strong> Sistema Web de Juegos de Matemáticas para Niños</p>
            <p><strong>Descripción:</strong> Desarrollo de un sistema interactivo que permite a los usuarios registrarse, acceder a lecciones personalizadas y participar en juegos educativos.</p>
          </div>
        </div>

        <div className="card work-experience">
          <h3>Experiencia Laboral</h3>
          <div className="card-content">
            <p>
              <strong>Diseñadora gráfica y Fotógrafa</strong> - Movimiento Misionero Mundial<br />
              He obtenido experiencias diseñando banners, volantes y anuncios publicitarios para grandes eventos.<br />
              <em>Enero 2021 - Actualmente</em>
            </p>
            <hr />
            <p>
              <strong>Diseñador Gráfico</strong> - Audiovisuales para Iglesias<br />
              Practicante con conocimientos en Adobe Photoshop e Illustrator.<br />
              <em>Enero 2022 - Junio 2022</em>
            </p>
          </div>
        </div>
      </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Rosa Elena López Clemente</p>
        <p>
          Teléfono: 933 785 009 | Correo:{" "}
          <a href="mailto:rosa.lopez@tecsup.edu.pe">rosa.lopez@tecsup.edu.pe</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rosalopezc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/rosalopezc/
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
