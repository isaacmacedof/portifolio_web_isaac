import tfc from '../images/tfc.png'
import '../styles/components/Projects.css'

const Projects = () => {
  return (
    <section className="section-projects">
      <p id='section-projects-title'>Projetos.</p>
      <article className='projects-container'>
        <div className='projects'>
          <div className='projects-img'>
            <img src={ tfc } alt='Projeto 1' />
          </div>
          <div className='projects-infos'>
            <div className='projects-title'>Futebol Clube</div>
            <div className='projects-tags'>TypeScript - NodeJS - Sequelize</div>
            <div className='projects-description'>O TFC é um site informativo sobre futebol. Eu construí um backend dockerizado com modelagem de dados do Sequelize, seguindo as diretrizes de uso do frontend do projeto.</div>
          </div>
          <div className='projects-links'>
            <div className='deployed-link'>
              <div className='deployed-link-bg'>
                <a href='noopener noreferrer' target='_blank' rel='noreferrer' className='deploy-button-text'>Deploy</a>
              </div>
            </div>
            <div className='repository-link'>
              <div className='repository-link-bg'>
                <a href='noopener noreferrer' target='_blank' rel='noreferrer' className='repo-button-text'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects;