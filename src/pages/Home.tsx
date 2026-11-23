import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Parcours from "../components/Parcours"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


function Home() {
    return (
        <>
            <Hero />

            <About />

            <Skills />

            <Projects />

            <Parcours />

            <Contact />
        </>
    )
}

export default Home