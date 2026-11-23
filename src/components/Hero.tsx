import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <section id="accueil" className="hero">
            <div className="container">
                <div className="text-hero">
                    <p className="intro">Bonjour, je suis</p>
                    <h1>Dylan</h1>
                    <p className="text">Développeur Web & Application | Titre Professionnel Développement Web et Web Mobile | Recherche d'un Stage</p>
                    <div className="d-flex gap-2">
                        <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn btn-outline-primary">Me contacter</a>
                    </div>
                    <div className="d-flex gap-2 mt-4">
                        <a href="https://github.com/Dylanpel" target="_blank" rel="noopener noreferrer" className="contact-lien">
                            <FontAwesomeIcon icon={faGithub} />
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/dylan-peltier-51597a33a/" target="_blank" rel="noopener noreferrer" className="contact-lien">
                            <FontAwesomeIcon icon={faLinkedin} />
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero