import React, {useRef, useEffect, useState, useCallback} from 'react'
const EvaStudy = (props) => {
    const [text,setText] = useState("")
    const [currentPairIndex,SetCurrentPairIndex] = useState(0)
    const [quesAnsPair,setQuesAnsPair] = useState([])

    const [showAns,setShowAns] = useState(false)


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    useEffect(() => {
        console.log("init")
        const json = localStorage.getItem("quesAnsPair");
        const wordDefPair = JSON.parse(json);

        console.log(json)
        if (wordDefPair) {
            setQuesAnsPair(wordDefPair);
        }
    },[])

    useEffect(() => {
        const json = JSON.stringify(quesAnsPair);
        localStorage.setItem("quesAnsPair", json);
    }, [quesAnsPair]);

    const handleText = (inputText) => {
        let text = inputText
        let lineLst = text.split("\n")
        let newWordDef  = []
        for(let i=0;i<lineLst.length;i++){
            let lineContentArr = lineLst[i].split("=")
            let ques = lineContentArr[0]
            let ans = lineContentArr[1]
            let pair = {
                ques:ques,
                ans:ans,
            }
            if(ques=== undefined || ans === undefined)
                continue
            newWordDef.push(pair)
            console.log(pair)
        }
        setQuesAnsPair(newWordDef)
        console.log(newWordDef)
        SetCurrentPairIndex(0)
    }

    const IndexPrev = () => {
        SetCurrentPairIndex(currentPairIndex => currentPairIndex-1)
    }
    const IndexNext = () => {
        SetCurrentPairIndex(currentPairIndex => currentPairIndex+1)
    }

    const ToggleShowAns = () => {
        setShowAns(showAns => !showAns)
    }

    const handleKeyPress = (event) => {
        if(event.key === " "){
            ToggleShowAns()
        }
        if(event.key === "ArrowRight"){
            IndexNext()
        }
        if(event.key === "ArrowLeft"){
            IndexPrev()
        }
    };


    return (

        <>
            <div >
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{quesAnsPair[currentPairIndex]?.ques}</h5>
                        {showAns && <p className="card-text">{quesAnsPair[currentPairIndex]?.ans}</p>}
                    </div>

                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={IndexPrev}>Prev</button>
                    <button type="button" className="btn btn-primary" onClick={ToggleShowAns}>Show</button>
                    <button type="button" className="btn btn-primary" onClick={IndexNext}>Next</button>

                </div>
                <button type="button" className="btn btn-primary" onClick={e=> {handleText(text)}}>Basic</button>

                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" onChange={event => (setText(event.target.value))}></textarea>
                </div>
            </div>

        </>
    )
}

export default EvaStudy