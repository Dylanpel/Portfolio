type Projet = {
    titre: string
    upper: string
    description: string
    technos: string[]
    lien?: string
}

function ProjectCard({projet }: { projet: Projet }) {
    return (
        <div className="card card-project p-2 h-100">
            <div className="upper-card">
                <p>{projet.upper}</p>
            </div>
            <h4 className="card-title fs-2xl">{projet.titre}</h4>
            <p className="card-text fs-xl">
                {projet.description}
            </p>
            {projet.lien && (
                <a href={projet.lien} className="mt-auto" target="_blank">Code</a>
            )}
        </div>
    )
}

export default ProjectCard