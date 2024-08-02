import HomePtBr from "../components/HomePtBr";
import About from "../components/About";
import Projects from "../components/Projects";
import '../styles/pages/Home.css';

const Home = () => {
  const whatHome = () => {
    return <HomePtBr />
  }

  return (
    <main className="home">
      { whatHome() }
      <About />
      <Projects />
    </main>
  )
}

export default Home;
