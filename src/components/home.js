import React, {Component} from 'react';
import ReactDOM from 'react-dom'


import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import './globalStyle.css';
import navbarTop from './NavbarTop';



class home extends Component{
    render(){
        return(
            <div>
                <main className="bg-dark text-light menu">
                    <div className="list-group">
                        <a href="/about" className="list-group-item list-group-item-action bg-dark text-light menuHov">About</a>
                        <a href="/contact" className="list-group-item list-group-item-action bg-dark text-light">Contact</a>
                        <a href="/more" className="list-group-item list-group-item-action bg-dark text-light">More</a>
                    </div>
                </main>
                <a href="/more" className="list-group-item list-group-item-action bg-dark text-light disabled"> Wesbite made by Daoqin.</a>

            </div>
        )
    }

}
export default home;