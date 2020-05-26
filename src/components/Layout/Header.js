import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">
                        <i className="fas fa-camera-retro mx-1"></i>
                        SloMoBooths    
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="text-white nav-link" href="/">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link" href="/">Book Me</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
