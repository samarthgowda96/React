import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <nav className="nav-wrapper red darken-2">
                <div className="containerhead">
                    <a href className="Title"> Gowda 's Blog</a>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header)