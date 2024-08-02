import HeaderEn from "./HeaderEn";
import imgPro from "../images/img-program-true.jpg";

const HomeEn = () => {
  return (
    <main>
      <HeaderEn />
      <section className="section-presentation">
        <article className="main-content-presentation">
          <p id="presentation-basic">Hello! My name is Isaac,</p>
          <p id="presentation-title">Web Developer</p>
          <p id="presentation-description">I am a Brazilian Full Stack developer who loves to stay up to date with technologies! Currently further developing my knowledge in React, Docker, MySQL, and Node.js</p>
          <button className="button-contact">
            <div className="art-button">
              <p className="text-button-contact">
                Contact me now!
              </p>
            </div>
          </button>
        </article>
        <figure>
          <img id="img-pro" src={ imgPro } alt="Programmer" />
        </figure>
      </section>
    </main>
  )
}

export default HomeEn;