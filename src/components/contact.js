import React, {Component} from 'react';

import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import './globalStyle.css';

class contact extends Component{
    render(){
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bgDark ">
                        {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                        {/*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                        {/*    <span className="navbar-toggler-icon"></span>*/}
                        {/*</button>*/}
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link text-light mazedollFont" href="/home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link text-light mazedollFont" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mazedollFont" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mazedollFont " href="/more">More</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


                <Col>
                    <h1 className="mazedollFont text-light aboutHeader">
                        Contacts
                    </h1>
                </Col>

                <Container>

                    <div className="list-group mazedollFont ">
                        <a href="https://github.com/daoqingao/aboutMe" className="list-group-item list-group-item-action bg-dark text-light menuHov">Source Code</a>

                        <a href="mailto:daoqingao@gmail.com" className="list-group-item list-group-item-action bg-dark text-light">daoqingao@gmail.com</a>
                        <a href="/more" className="list-group-item list-group-item-action bg-dark text-light">More</a>
                    </div>

                </Container>

            </div>
        )


    }

}
export default contact