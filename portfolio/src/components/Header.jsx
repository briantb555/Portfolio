import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <div id="header" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink className="navbar-brand" to="/">Brian</NavLink>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        </ul>
                    <Navigation/>

                </div>
            </div>
        </div>
    )
}

export default Header