
import React, { useState } 				from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';





const PictureMemoryMain = (props) => {
    {

        const [showPicMemMenu, setPicMemMenu] 	= useState(true);
        const [showPic,setShowPic] = useState(true);
        const [counter, setCounter] = React.useState(5);


        const picQuestions = ["What color are the shoes","What color is the shirt","What color are the eyes","What color are the pants"]


        // let picCont={}
        // picCont["/toonGirl.jpg"]={
        //     "What color are the shoes":"brown",
        //     "What color are the eyes":"black",
        //     "What color is the shirt":"red",
        //     "What color is the pant":"white/pink"
        // }


        const [questionRand, setQuestionRand] = React.useState(Math.floor(Math.random() * picQuestions.length));

        React.useEffect(() => {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

            if(counter===0)
            {
                setShowPic(false)
                setQuestionRand(Math.floor(Math.random() * picQuestions.length))
            }

        }, [counter]);




        let listOfFiles = ["1.jpg","2.jpg","toonGirl.jpg"]

        let publicPath= process.env.PUBLIC_URL;
        publicPath+="PictureMemoryPictures/"


        const [Pic, setPic] = React.useState(publicPath+listOfFiles[(Math.floor(Math.random() * listOfFiles.length))]);



        const [showNext, setNext] = React.useState(false);

        const resetCounter = () => {
            setPicMemMenu(false)
            setShowPic(true)
            setCounter(5)
            setNext(false)
            setPic(publicPath+listOfFiles[(Math.floor(Math.random() * listOfFiles.length))])
        }
        const showPrevPic = () => {
            setNext(true)
            setShowPic(true)
        }


        return(
            <div>

                {showPicMemMenu &&
                <Container>
                    <h1 className="mazedollFont text-light aboutHeader">
                        Picture Memory
                    </h1>
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{resetCounter()}}>Click to Start</button>
                    <h1 className="mazedollFont text-light aboutHeader">
                        You are shown a picture and you have some time to remember the details of the picture.
                    </h1>
                </Container>}

                {/*//Picture section*/}
                {(!showPicMemMenu && showPic) &&
                <Container>

                    <div className="card">
                        <img className="picMemPic" src={Pic} alt="Card image cap"></img>
                    </div>

                    <div className="mazedollFont text-light aboutHeader">Countdown: {counter === 0 ? "Time over" : counter}</div>
                </Container>}

                {(!showPicMemMenu && !showPic) &&
                <Container>
                    <h1 className="mazedollFont text-light aboutHeader">
                        {picQuestions[questionRand]}
                    </h1>

                    <button type="button" className="btn btn-primary btn-lg btn-block"  onClick={()=>{showPrevPic()}}>Show Pic</button>
                    <button type="button" className="btn btn-primary btn-lg btn-block"  onClick={()=>{resetCounter()}}>Next</button>
                </Container>}

                {showNext &&                     <button type="button" className="btn btn-primary btn-lg btn-block"  onClick={()=>{resetCounter()}}>Next</button>}






            </div>
        )
    }

}
export default PictureMemoryMain