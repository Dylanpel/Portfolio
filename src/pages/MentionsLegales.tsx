import { Link } from "react-router-dom"

function MentionsLegales() {
    return (
        <section className="mention-legales">
            <div className="container">
                <Link to="/" className="btn btn-outline-primary">Retour au Portfolio</Link>

                 <h1 className="mb-5 mt-5">Mentions légales</h1>

                <h2 className="mb-3 mt-5">Éditeur du site</h2>
                <p>
                    Dylan PELTIER<br />
                    Contact : peltierdylan38@gmail.com
                </p>

                <h2 className="mb-3 mt-5">Hébergement</h2>
                <p>
                    Ce site est hébergé par GitHub Pages, GitHub Inc.<br />
                    88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis
                </p>

                <h2 className="mb-3 mt-5">Nom de domaine</h2>
                <p>
                    Ce nom de domaine est enregistré auprès d'OVH SAS.<br />
                    2 rue Kellermann, 59100 Roubaix, France
                </p>

                <h2 className="mb-3 mt-5">Données personnelles</h2>
                <p>
                    Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie de suivi. Comme pour tout site web, l'hébergeur (GitHub Pages) peut traiter des données techniques de connexion, comme l'adresse IP, conformément à sa propre politique de confidentialité. Aucun formulaire de contact ne transmet ou ne stocke d'informations : les liens de contact ouvrent directement votre client mail ou votre application téléphone.
                </p>

                <h2 className="mb-3 mt-5">Propriété intellectuelle</h2>
                <p>
                    L'ensemble de ce site (contenu, design, code) est la propriété de Dylan Peltier, sauf mention contraire.
                </p>
            </div>
        </section>
    )
}

export default MentionsLegales