import ProjectCard from "./ProjectCard";

type Projet = {
    titre: string
    description: string
    technos: string[]
    lien?: string
}

const projets: Projet[] = [
    {
        titre: 'Portfolio',
        description: 'Site vitrine développée avec React, TypeScript et Bootstrap',
        technos: ['React', 'TypeScript', 'Bootstrap', 'Vite'],
        lien: 'https://github.com/Dylanpel/portfolio'
    },
    {
        titre: 'HereWeGo',
        description: 'Site de covoiturage avec inscription à des événements. Application web réalisée en duo dans le contexte du titre Pro.',
        technos: ['PHP','Bootstrap','GIT']
    },
    {
        titre: 'Rugby Manager',
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
                <div className="grid-card">
                    {projets.map((projet) => (
                        <ProjectCard key={projet.titre} projet={projet} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects