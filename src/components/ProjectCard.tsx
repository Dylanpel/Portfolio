type Projet = {
    titre: string
    description: string
    technos: string[]
    lien?: string
}

function ProjectCard({projet }: { projet: Projet }) {
    return (
        <div className="container">
            <div className="card p-2 h-100">
                <h4 className="card-title">{projet.titre}</h4>
                <p className="card-text">
                    {projet.description}
                </p>
                {projet.lien && (
                    <a href={projet.lien} className="mt-auto" target="_blank">Code</a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard