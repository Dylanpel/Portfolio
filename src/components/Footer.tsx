import { Link } from 'react-router-dom'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='site-footer'>
            <p>
                @ {currentYear} Dylan Peltier 
                <span className='separator'>|</span>
                <Link to="/mention-legales">Mention légales</Link>
            </p>
        </footer>
    )
}

export default Footer