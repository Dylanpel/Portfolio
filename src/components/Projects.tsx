import ProjectCard from "./ProjectCard";

type Projet = {
    titre: string
    upper: string,
    description: string
    technos: string[]
    lien?: string
}

const projets: Projet[] = [
    {
        titre: 'Portfolio',
        upper: 'P',
        description: 'Site vitrine développée avec React, TypeScript et Bootstrap',
        technos: ['React', 'TypeScript', 'Bootstrap', 'Vite'],
        lien: 'https://github.com/Dylanpel/Portfolio'
    },
    {
        titre: 'HereWeGo',
        upper: 'H',
        description: 'Site de covoiturage avec inscription à des événements. Application web réalisée en duo dans le contexte du titre Pro.',
        technos: ['PHP','Bootstrap','GIT'],
        lien: 'https://github.com/Dylanpel/Here-We-Go'
    },
    {
        titre: 'Rugby Manager',
        upper: 'R',
        description: "Jeu de management d'une équipe de Rugby (transfert, match, entrainement). C'est un projet personnel pour approfondir la langage Java.  Projet en cours de réalisation.",
        technos: ['Java']
    }
]

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projets</h2>
                <p className="text">Une sélection de ce que j'ai produits ou en cours de production.</p>
                <div className="row row-cols-1 row-cols-lg-3">
                    {projets.map((projet) => (
                        <div className="col mt-5">
                            <ProjectCard key={projet.titre} projet={projet} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects