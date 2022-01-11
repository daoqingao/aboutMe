import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";


class About extends Component{
    render(){
        return(
            <div className="mazedollFont text-light ">

                <Col>
                    <h1  className=" aboutHeader">

                    </h1>
                </Col>

                <Container>
                    <br/>
                    <Row>
                        <Col>
                            <h1  className=" aboutHeader">
                                About me
                            </h1>
                            <div className=" text-light aboutMeParagraph">
                                Hello, my name is Daoqin, but many people call me Dao.
                                I am a Computer Science major undergrad student at Stony Brook University living in New York.<br/><br/>
                                I am someone that enjoys to explore and do new things.<br/>
                                Some of the things I like to do in my free time ranges from playing Tetris to playing with stock market Options strategies as well as trying to create music via FL Studio.

                            </div>
                        </Col>

                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                            <h1  className=" aboutHeader">
                                About This website
                            </h1>
                            <div className=" text-light aboutMeParagraph">
                                This website was made for the purpose to display more information about myself. <br/>
                                And it also serves another purpose to show off what I can do with my React.js skills. <br/>
                                The website is made with pure React.js written by myself without any template.<br/>
                                I intent to add more projects mainly to the More page, so please check that out instead.

                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
        )


    }

}
export default About;