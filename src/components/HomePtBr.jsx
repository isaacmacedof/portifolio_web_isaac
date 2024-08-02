import Header from "./HeaderBr";
import imgPro from "../images/img-program-true.jpg";

const HomePtBr = () => {
  return (
    <main>
      <Header />
      <section className="section-apresentation">
        <article className="main-containt-apresentation">
          <p id="apresentation-basic">Olá! Me chamo Isaac,</p>
          <p id="apresentation-title">Web Developer</p>
          <p id="apresentation-description">Sou um desenvolvedor Full Stack brasileiro que adora estar por dentro das tecnologias! Atualmente desenvolvendo ainda mais meus conhecimentos em React, Docker, MySQL e Node.js </p>
          <button className="button-contact">
            <div className="art-button">
              <p className="text-button-contact">
                Fale comigo agora!
              </p>
            </div>
          </button>
        </article>
        <figure>
          <img id="img-pro" src={ imgPro } alt="Programador" />
        </figure>
      </section>
    </main>
  )
}

export default HomePtBr;
