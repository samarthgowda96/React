import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Footer = (props) => {
   
    return (
        <nav className="nav-wrapper red darken-3">
             <p style = {{ textAlign: "center" }} > Copyright© Gowda </p> </nav >
            
        
    )
}

export default withRouter(Footer)