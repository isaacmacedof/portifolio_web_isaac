import grafic from '../images/pngwing.com.png'
import programer from '../images/programador.png'
import trabalho from '../images/trabalho.png'
import '../styles/components/About.css'

const About = () => {
  return (
    <main>
      <section className="section-about">
        <p id="about-title">Sobre.</p>
        <article className="about-description01">
          <p id="about-des01">Sou apaixonado por criar soluções web funcionais, intuitivas e atraentes. Anteriormente, trabalhei como técnico administrativo, onde desenvolvi soft skills essenciais, habilidades valiosas como comunicação, organização e proatividade.</p>
          <figure>
            <img id="img-grafic" src={ grafic } alt="Gráfico" />
          </figure>
        </article>
        <article className="about-description02">
          <figure>
            <img id="img-programador" src={ programer } alt="Programador" />
          </figure>
          <p className="about-des02">Decidi fazer a transição para o Desenvolvimento Web e me inscrevi na Trybe, onde aprendi HTML, JavaScript, CSS, SQL, Node.js, testes unitários com RTL, API Rest e React JS. Estou sempre aberto a aprender novas tecnologias e métodos para me aprimorar continuamente.</p>
        </article>
        <article className="about-description03">
          <p id="about-des03">Atualmente, estou em busca de oportunidades para trabalhar como desenvolvedor web, onde possa contribuir com minhas habilidades e aprender com profissionais experientes. Estou ansioso para me juntar a uma equipe de desenvolvimento e contribuir para projetos inovadores e desafiadores.</p>
          <figure>
            <img id="img-trabalho" src={ trabalho } alt="Trabalho" />
          </figure>
        </article>
      </section>
    </main>
  )
}

export default About;