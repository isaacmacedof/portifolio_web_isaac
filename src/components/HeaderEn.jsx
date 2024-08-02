import linkedInLogo from '../images/logo-do-linkedin.png'
import gitHubLogo from '../images/github.png'
import '../styles/components/Header.css'

const HeaderEn = () => {
  return (
    <header className='header'>
      <section className='left-header'>
        <p className='my-name'>Isaac Macêdo</p>
      </section>
      <section className='mid-header'>
        <nav className='nav-header'>
            <a className='header-link' href="/about">About</a>
            <a className='header-link' href="/">Projects</a>
            <a className='header-link' href="/contact">Contact</a>
        </nav>
      </section>
      <section className='right-header'>
        <a href="https://www.linkedin.com/in/isaac-macedo-dev/" target="_blank" rel="noreferrer">
          <img className='img-link' src={ linkedInLogo } alt="linkedin" />
        </a>
        <a href="https://github.com/isaacmacedof" target="_blank" rel="noreferrer">
          <img className='img-link' src={ gitHubLogo } alt="github" />
        </a>
      </section>
    </header>
  )
}

export default HeaderEn;
