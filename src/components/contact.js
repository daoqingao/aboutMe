import React, {Component} from 'react';

import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import './globalStyle.css';

class contact extends Component{
    render(){
        return(
            <div>

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