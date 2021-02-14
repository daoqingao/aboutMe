import React, {Component} from 'react';

import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import './globalStyle.css';

class more extends Component{
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
                        More
                    </h1>
                </Col>
                <a href="https://github.com/daoqingao/aboutMe" className="list-group-item list-group-item-action bg-dark text-light menuHov">Source Code</a>

            </div>
        )


    }

}
export default more