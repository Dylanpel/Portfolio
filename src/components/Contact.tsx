import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <section id="contact">
            <h2 className="text-center mb-5 titre-contact">Contact</h2>

            <div className="contact">
                <div className="contact-utile">
                    <a href="mailto:peltierdylan38@gmail.com" className="email">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />Envoyer-moi un mail
                    </a>

                    <a href="/CV Peltier Dylan.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary cv">
                        Télécharger mon CV
                    </a>
                </div>
                <div className="contact-link">
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
        </section>
    )
}

export default Contact