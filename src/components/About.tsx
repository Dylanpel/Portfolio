import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"

function About() {
    return(
        <section id="about">
            <div className="container">
                <h2 className="mb-5">À propos</h2>
                <div className="row">
                    <div className="profil col-lg-4">
                        <p>D</p>
                    </div>
                    <div className="col-lg-8">
                        <p className="text">
                            Après un parcours professionnel dans un tout autre domaine, j’ai choisi de me reconvertir dans le développement web. J’ai obtenu le titre professionnel Développeur Web et Web Mobile, qui m’a donné de solides bases en conception et en réalisation d’applications.
                        </p>
                        <p className="text">
                            Aujourd’hui, je prépare une Licence professionnelle Métiers de l’informatique : conception, développement et test de logiciels à l’Université de Poitiers. Cette année me permet d’approfondir mes connaissances et de découvrir de nouveaux langages, comme le Java.
                            Pour compléter ma formation et acquérir une expérience professionnelle, je suis à la recherche d’un stage.
                        </p>
                        <div className="d-flex gap-3">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="localisation text">Poitiers, FRANCE</p>
                        </div>
                        <a href={`${import.meta.env.BASE_URL}CV%20Peltier%20Dylan.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
