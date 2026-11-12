import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Collapse } from "bootstrap";

function Navbar() {
    const navRef = useRef<HTMLDivElement>(null)

    const closeMenu = () => {
        if(navRef.current) {
            const bsCollapse = Collapse.getInstance(navRef.current)
            bsCollapse?.hide()
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container">
                <HashLink className="navbar-brand title" to="/#accueil">PELTIER Dylan</HashLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu" ref={navRef}>
                    <ul className="navbar-nav ms-auto li-nav">
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#about" onClick={closeMenu}>A propos</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#skills" onClick={closeMenu}>Compétences</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#projects" onClick={closeMenu}>Projets</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#parcour" onClick={closeMenu}>Parcours</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#contact" onClick={closeMenu}>Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
