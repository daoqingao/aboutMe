import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

class navbarTop extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bgDark">
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link text-light" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/contact">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light " href="/more">More</a>
                            </li>

                            <li>

                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default navbarTop;