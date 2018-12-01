import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Contact from './Contact';
import Student from './Student';
import Entrepreneurs from './Entrepreneurs';
import Hobbyists from './Hobbyists';
class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main">
            <nav className="nav-bar">
                <ul className="nav-menu">
                    <li className="nav-items "><Link className="item" to="/">Home</Link></li>
                    <li className="nav-items">Services
                        <ul className="departement-items">
                            <li className="departement-item"><Link className="item" to="/Student">For students</Link></li>
                            <li className="departement-item"><Link className="item" to="/Entrepreneurs">For entrepreneurs</Link></li>
                            <li className="departement-item"><Link className="item" to="/Hobbyists">For hobbyists </Link></li>
                        </ul>
                    </li>
                    <li className="nav-items"><Link className="item" to="/Contact">Contact </Link></li>
                </ul>
            </nav>
            <div>
                    <Route exact path="/Main" component={Main} />
                    <Route path="/Contact" render={() => <Contact phoneNumber='25962593' email='mounirasgh@gmail.com' />} />
                    <Route path="/Student" component={Student} />
                    <Route path="/Entrepreneurs" component={Entrepreneurs} />
                    <Route path="/Hobbyists" component={Hobbyists} />
                </div>
            </main>
        )
    }
}
export default Main;