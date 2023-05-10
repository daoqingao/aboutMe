
import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import React, { useState } 				from 'react';
import PictureMemoryMain from "./MoreProj/PictureMemoryMain";
import Attractors from "./MoreProj/Attractors";
import EvaStudy from "./MoreProj/EvaStudy";

import DoublePendulum from "./MoreProj/DoublePendulum";
import './globalStyle.css';




const More  = (props) => {

    const [itemNum, setItemNum] = useState(-1);

        return(
            <div>


                {itemNum===-1 &&
                    <Container className="mazedollFont text-light aboutHeader">
                        {"Library of my side projects"}
                        <button type="button" className="btn btn-primary btn-lg btn-block lightBlueButton" onClick={() => {setItemNum(1)}}>
                            Picture Memory
                        </button>

                        <button type="button" className="btn btn-primary btn-lg btn-block lightBlueButton" onClick={() => {setItemNum(2)}}>
                            Attractors
                        </button>

                        <button type="button" className="btn btn-primary btn-lg btn-block lightBlueButton" onClick={() => {setItemNum(3)}}>
                            Eva's website
                        </button>
                    </Container>
                }

                {itemNum===1 && <PictureMemoryMain/>}
                {itemNum===2 && <Attractors/>}
                {itemNum===3 && <EvaStudy/>}

            </div>
        )


}

export default More