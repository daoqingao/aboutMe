
import {Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import React, { useState } 				from 'react';
import PictureMemoryMain from "./PictureMemory/PictureMemoryMain";
import './globalStyle.css';




const More  = (props) => {

    const [itemNum, setItemNum] = useState(-1);

        return(
            <div>


                {itemNum===-1 &&
                    <Container className="mazedollFont text-light aboutHeader">
                        {"Library of my other broken side project"}
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => {setItemNum(1)}}>
                            Picture Memory
                        </button>
                    </Container>
                }

                {itemNum===1 && <PictureMemoryMain/>}


            </div>
        )


}

export default More