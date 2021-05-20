import React, {Component} from 'react';

import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";


class about extends Component{
    render(){
        return(
            <div>



                <Col>
                    <h1 className="mazedollFont text-light aboutHeader">
                        About me
                    </h1>
                </Col>

                <Container>
                    <Row>
                        <Col>
                            <div className="mazedollFont text-light aboutMeParagraph">
                                Hello, my name is Daoqin, but many people call me Dao.
                                I am a Computer Science major undergrad student at Stony Brook University living in New York.<br/><br/>
                                I am someone that enjoys to explore and do new things.<br/>
                                Some of the things I like to do in my free time ranges from  playing Tetris to playing with stock market Options strategies.

                            </div>
                        </Col>
                        <Col>
                            <div className="mazedollFont text-light aboutMeParagraph">
                                Nice pictures
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
        )


    }

}
export default about;