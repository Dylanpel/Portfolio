import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faHtml5, faCss3Alt, faJs, faBootstrap, faGitAlt, faDocker, faJava, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type Competence = {
    nom: string
    icon: IconDefinition
    couleur: string 
}

const competences: Record<string, Competence[]> = {
    backend: [
        { nom: 'PHP / Symfony', icon: faPhp, couleur: '#d46438' },
        { nom: 'SQL', icon: faDatabase, couleur: '#d46438' }
    ],
    frontend: [
        { nom: 'HTML5', icon: faHtml5, couleur: '#d46438' },
        { nom: 'CSS', icon: faCss3Alt, couleur: '#d46438' },
        { nom: 'JavaScript', icon: faJs, couleur: '#d46438' },
        { nom: 'Bootstrap', icon: faBootstrap, couleur: '#d46438' },
    ],
    outils: [
        { nom: 'Git', icon: faGitAlt, couleur: '#d46438' },
        { nom: 'VS Code', icon: faCode, couleur: '#d46438' },
    ],
    decouvrir: [
        { nom: 'Java', icon: faJava, couleur: '#d46438' },
        { nom: 'Python', icon: faPython, couleur: '#d46438' },
        { nom: 'React', icon: faReact, couleur: '#d46438' },
        { nom: 'Docker', icon: faDocker, couleur: '#d46438' }
    ]
}

function Skills() {
    const groupes = [
        { titre: 'Back-end', liste: competences.backend },
        { titre: 'Front-end', liste: competences.frontend },
        { titre: 'Outils', liste: competences.outils },
        { titre: 'Apprentissage', liste: competences.decouvrir }
    ]

    return (
        <section id="skills">
            <div className="container">
                <h2>Compétences</h2>
                <p className="text">Les technologies avec lesquelles je travaille ou que je découvre.</p>

                {groupes.map((groupe) => (
                    <div className="mb-5 mt-5" key={groupe.titre}>
                        <h3 className="text-center mb-4">{groupe.titre}</h3>
                        <div className="comp-grille">
                            {groupe.liste.map((comp) => (
                                <div className="comp-card">
                                    <FontAwesomeIcon
                                        icon={comp.icon}
                                        style={{ color: comp.couleur }}
                                        className="comp-icon"
                                    /> 
                                    <span>{comp.nom}</span>  
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills