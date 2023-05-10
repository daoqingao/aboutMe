import React, { useRef, useEffect,useState } from 'react'
const EvaStudy = (props) => {
    const [text,setText] = useState("")
    const [currentPairIndex,SetCurrentPairIndex] = useState(0)
    const [quesAnsPair,setQuesAnsPair] = useState([])

    const [showAns,setShowAns] = useState(false)

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
        }
        setQuesAnsPair(newWordDef)
        SetCurrentPairIndex(0)
    }
    return (

        <>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{quesAnsPair[currentPairIndex]?.ques}</h5>
                {showAns && <p className="card-text">{quesAnsPair[currentPairIndex]?.ans}</p>}


            </div>

        </div>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={e=>{SetCurrentPairIndex(currentPairIndex-1)}}>Prev</button>
                <button type="button" className="btn btn-primary" onClick={e=>{setShowAns(!showAns)}}>Show</button>
                <button type="button" className="btn btn-primary" onClick={e=>{SetCurrentPairIndex(currentPairIndex+1)}}>Next</button>

            </div>
            <button type="button" className="btn btn-primary" onClick={e=> {handleText(text)}}>Basic</button>

            <div className="form-group">
                <textarea className="form-control" rows="5" id="comment" onChange={event => (setText(event.target.value))}></textarea>
            </div>
        </>
    )
}

export default EvaStudy