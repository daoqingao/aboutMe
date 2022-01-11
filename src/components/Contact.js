import React, {Component} from 'react';

import {Container, Row, Col, Card} from 'react-bootstrap';
import './globalStyle.css';

class Contact extends Component{
    render(){
        return(
            <div>

                <Col>
                    <h1 className="mazedollFont text-light aboutHeader">
                        My Contacts
                    </h1>
                </Col>

                <Container>

                    <div className="list-group mazedollFont ">
                        <a href="https://github.com/daoqingao/aboutMe" className="list-group-item list-group-item-action bg-dark text-light menuHov">Github -> website source code</a>

                        <a href="mailto:daoqingao@gmail.com" className="list-group-item list-group-item-action bg-dark text-light">Email -> daoqingao@gmail.com</a>
                        <a href="https://www.linkedin.com/in/daoqin-gao/" className="list-group-item list-group-item-action bg-dark text-light">LinkedIn -> Profile Page</a>
                        <a href="" className="list-group-item list-group-item-action bg-dark text-light">Phone -> (646)-820-4690</a>
                    </div>

                </Container>

            </div>
        )


    }

}
export default Contact