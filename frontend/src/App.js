import React, { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <Header />

      <section
        className="main-section hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Aprendiendo y creando soluciones que impactan</h1>
        <img src={profilePhoto} alt="Rosa López" className="profile-photo" />
        <h2>Hola, soy Rosa López</h2>
        <p>
          Estudiante de Diseño y Desarrollo de Software | Diseñadora Gráfica
        </p>
      </section>

      <section id="about" className="section about hidden">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            Soy una estudiante de 4to ciclo de la carrera de Diseño y Desarrollo de Software en TECSUP, con habilidades en liderazgo, trabajo en equipo y adaptabilidad. Manejo herramientas como JavaScript, React y Bootstrap para interfaces de usuario y diseño web responsivo.
          </p>
          <div className="about-details">
            <div className="about-education">
              <h3>Educación</h3>
              <ul>
                <li>
                  <strong>TECSUP:</strong> Diseño y Desarrollo de Software (2023 - Actualmente)
                  <br />
                  <em>Beca BCP</em>
                </li>
                <li>
                  <strong>CIBERTEC:</strong> Diseño Gráfico (2021 - 2022)
                </li>
                <li>
                  <strong>CEPEA:</strong> Diseño Gráfico (2019)
                </li>
              </ul>
            </div>
            <div className="about-skills">
              <h3>Habilidades</h3>
              <ul>
                <li>Adobe XD, HTML, CSS</li>
                <li>JavaScript, React, Bootstrap</li>
                <li>Adobe Illustrator, Photoshop, InDesign</li>
                <li>Microsoft Office</li>
                <li>Inglés (Básico)</li>
              </ul>
            </div>
          </div>
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

      <section id="quote" className="section quote hidden">
        <h2>"Transformo ideas en realidades visuales y digitales impactantes."</h2>
      </section>

      <section id="experience" className="section experience hidden">
        <h2>Mis Experiencias</h2>
        <div className="experience-grid">
          {/* Experiencia Académica */}
          <div className="experience-academic">
            <h3>Académica</h3>
            <div className="card-grid">
              <div className="card academic-card">
                <div className="card-image">
                  <img src={profilePhoto1} alt="Proyecto 1" />
                </div>
                <div className="card-content">
                  <h4>III Ciclo</h4>
                  <p><strong>Cursos:</strong> Diseño de Aplicaciones en Internet e Ingeniería de Requerimientos</p>
                  <p><strong>Título:</strong> Sistema de gestión administrativa de citas</p>
                  <p><strong>Descripción:</strong> Se creó un sistema que permite crear, eliminar, editar y listar pacientes, doctores y agendar citas en un horario.</p>
                  <a
                    href="https://github.com/XaviNole/Proyecto-Herramienta-Administrativa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="card academic-card">
                <div className="card-image">
                  <img src={profilePhoto2} alt="Proyecto 2" />
                </div>
                <div className="card-content">
                  <h4>IV Ciclo</h4>
                  <p><strong>Cursos:</strong> Diseño de Aplicaciones web y Diseño de Aplicaciones Empresariales</p>
                  <p><strong>Título:</strong> Sistema Web de Juegos de Matemáticas para Niños</p>
                  <p><strong>Descripción:</strong> Desarrollo de un sistema interactivo que permite a los usuarios registrarse, acceder a lecciones personalizadas y participar en juegos educativos.</p>
                  <a
                    href="https://github.com/RosaLopezC/proyecto.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div className="experience-work">
            <h3>Laboral</h3>
            <div className="card-grid">
              <div className="card work-card">
                <div className="card-image">
                  <img src={profilePhoto3} alt="Trabajo 1" />
                </div>
                <div className="card-content">
                  <h4>Diseñadora Gráfica y Fotógrafa</h4>
                  <p><strong>Empresa:</strong> Movimiento Misionero Mundial</p>
                  <p><strong>Descripción:</strong> Diseño de banners, volantes y anuncios publicitarios para grandes eventos.</p>
                  <p><em>Enero 2021 - Actualmente</em></p>
                </div>
              </div>
              <div className="card work-card">
                <div className="card-image">
                  <img src={profilePhoto1} alt="Trabajo 2" />
                </div>
                <div className="card-content">
                  <h4>Diseñador Gráfico</h4>
                  <p><strong>Empresa:</strong> Audiovisuales para Iglesias</p>
                  <p><strong>Descripción:</strong> Practicante con conocimientos en Adobe Photoshop e Illustrator.</p>
                  <p><em>Enero 2022 - Junio 2022</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer hidden">
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
        <p>
          Repositorio de GitHub:{" "}
          <a
            href="https://github.com/RosaLopezC"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/RosaLopezC
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;