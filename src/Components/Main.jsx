import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="nav-bar">
                <ul className="nav-menu">
                    <li className="nav-items ">Home</li>
                    <li className="nav-items">Services
                        <ul className="departement-items">
                            <li className="departement-item">For students</li>
                            <li className="departement-item">For entrepreneurs</li>
                            <li className="departement-item">For hobbyists </li>
                        </ul>
                    </li>
                    <li className="nav-items">Contact</li>
                </ul>
            </nav>
        )
    }
}
export default Main;