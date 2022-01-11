import React, {Component} from 'react';

import './globalStyle.css';
import Ripples from 'react-ripples'
import {Col, Row} from "react-bootstrap";



const Home = (props) => {


        return(
            <div>
                <main className="menu">
                    <div className="list-group">
<container >


        {/*<Row className="homeButtonLineToText">*/}
            <a href="/about" className="list-group-item list-group-item-action  homeButton">About</a>
        {/*</Row>*/}
            <a href="/contact" className="list-group-item list-group-item-action  homeButton">Contact</a>
            <a href="/more" className="list-group-item list-group-item-action   homeButton">More/Side Project</a>


</container>
                    </div>
                </main>
                <a href="/more" className="list-group-item list-group-item-action bg-dark text-light disabled"> Wesbite made by Daoqin.</a>

            </div>
        )


}
export default Home;