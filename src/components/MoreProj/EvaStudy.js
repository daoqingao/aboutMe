import React, {useRef, useEffect, useState, useCallback} from 'react'
import {Paper} from "@mui/material";
import * as PropTypes from "prop-types";
import StudyTable from "./StudyTable";

const EvaStudy = (props) => {

    const str = "Male reproductive system\n" +
        "part A\n" +
        "1. sperm are formed in the seminiferous tubules [testes]\n" +
        "2. epididymis \n" +
        "3. vas deferens - seminal vesicles\n" +
        "4. ejaculatory duct \n" +
        "5. urethra (passes through prostate gland, bulbourethral glands), which prasses through \n" +
        "6. penis -> sperm leaves the body\n" +
        "\n" +
        "part B\n" +
        "1. epididymis = one of a pair of long, tightly coiled tubes above each testis; carries and stores sperm\n" +
        "2. prostate gland = exocrine gland at the base of male urinary bladder \n" +
        "3. seminiferous tubules = narrow coiled tubules that produce sperm in the testes \n" +
        "4. spermatozoon = sperm cell\n" +
        "5. prepuce = foreskin\n" +
        "6. testis = male gonad; produces testosterone and sperm cells\n" +
        "7.  seminal vesicles = paired sac-like exocrine glands that secrete fluid into vas deferens\n" +
        "8. scrotum = external sac that contain the testes \n" +
        "9. vas deferens = narrow tube carrying sperm from the epididymis toward the urethra\n" +
        "10. bulbourethral glands pair of exocrine glands near the male urethra; cowper glands\n" +
        "\n" +
        "part C\n" +
        "1. flagellum = hair-like projection on sperm cell that makes it motile\n" +
        "2. glans penis = sensitive tip of penis\n" +
        "3. ejaculatory duct = tube through which semen enters urethra\n" +
        "4. identical twins = two infants resulting from division of one fertilized egg into separate embryos\n" +
        "5. perineum = external region between anus and scrotum \n" +
        "6. parenchymal tissue = essential distinctive cells of an organ\n" +
        "7. fraternal twins = two infants resulting from fertilization of two ova by two sperm cells \n" +
        "8. erectile dysfunction = inability of an adult male to achieve erection; impotence\n" +
        "9. interstitial cells specialized cells that lie adjacent to seminiferous tubules\n" +
        "10. ejaculation ejection of sperm and fluid from urethra  \n" +
        "\n" +
        "part D\n" +
        "1. penis = male external organ of reproduction\n" +
        "2. semen = sperm cells and seminal fluid\n" +
        "3. testosterone = hormone secreted by interstitial cells of the testes\n" +
        "4. stromal tissue = supportive connective tissue of an organ\n" +
        "5. aspermia = lack of semen \n" +
        "6. azoospermia = lack of sperm cells in semen \n" +
        "7. sterilization = procedure that removes person's ability to produce or release reproductive cells\n" +
        "8. oligospermia = semen with low concentration of sperm \n" +
        "9. testicle = male gonad\n" +
        "10. impotence = inability of a male to sustain or achieve an erection\n" +
        "\n" +
        "part E\n" +
        "1. inflammation of testes = orchitis \n" +
        "2. inflammation of the tube that carries spermatozoa to vas deferens = epididymitis\n" +
        "3. resection of prostate gland = prostatectomy\n" +
        "4. inflammation of prostate gland = prostatitis\n" +
        "5. process of producing (formation of) sperm cells = spermatogenesis\n" +
        "6. fixation of undescended testicle = orchiopexy\n" +
        "7. inflammation of glans penis = balanitis\n" +
        "8. condition of scanty sperm = oligospermia \n" +
        "9. lack of semen = aspermia\n" +
        "10. pertaining to a testicle = testicular\n" +
        "\n" +
        "part F\n" +
        "1. True = cryogenic surgery uses cold temperatures to destroy tissue \n" +
        "2. Estrogen is NOT an androgen; testosterone is an androgen\n" +
        "3. castration (orhiectomy, oophorectomy) = example of sterilization = removal of testis \n" +
        "4. spermolytic = destruction of sperm\n" +
        "7. azoospermia = lack of sperm cells in semen = infertility\n" +
        "8. aspermia = lack of semen = can result from retrograde ejaculation (when semen goes backward to urinary bladder, not ejaculated)\n" +
        "9. seminiferous tubules = parenchymal cells of testes\n" +
        "10. testosterone = produced by interstitual cells (leydig cells) \n" +
        "11. vasectomy = sperm cannot leave body, DOES NOT AFFECT the production of sperm; just the movement of it outwards\n" +
        "12. vasovasostomy = anastomosis that can restore fertility \n" +
        "\n" +
        "part G\n" +
        "1. castration = orchiectomy\n" +
        "2. semen analysis = test of fertility (reproductive ability) \n" +
        "3. ejaculation = ejection of sperm and fluid from urethra\n" +
        "4. purulent = pus-filled\n" +
        "5. vasectomy = removal of a piece of the vas deferens\n" +
        "6. circumcision = removal of the prepuce\n" +
        "7. ligation = to tie off or bind\n" +
        "8. cryosurgery = destruction of tissue by freezing\n" +
        "9. seminoma = malignant tumor of the testis \n" +
        "10. phimosis = narrowing (stricture) of the opening of the prepuce of glans penis \n" +
        "\n" +
        "part H\n" +
        "1. prostatic enlargement, nonmalignant = benign prostatic hyperplasia \n" +
        "2. opening of the urethra on the undersurface of the penis = hypospadias\n" +
        "3. infection of skin and genital mucosa with HSV = herpes genitalis \n" +
        "4. malignant tumor of the prostate gland = adenocarcinoma of the prostate\n" +
        "5. enlarged, swollen veins near the testes = variocele \n" +
        "6. sexually transmitted disease with primary stage marked by formation of chancre = syphilis\n" +
        "7. infection of skin and mucous membranes in anogential region by human papillomavirus = HPV\n" +
        "8. STI caused by berry-shaped bacteria and marked by inflammation of genital mucosa and mucopurulent discharge = gonorrhea\n" +
        "9. undescended testicles = cryptorchidism \n" +
        "10. sac of clear fluid in the scrotum = hydrocele \n" +
        "\n" +
        "part I\n" +
        "1. prostate-specific antigen = high serum levels of this protein show protein carcinoma \n" +
        "2. benign prostatic hyperplasia = noncancerous enlargement of prostate gland \n" +
        "3. transurethral resection of prostate = removal of portions of prostate gland through the urethra\n" +
        "4. transurethral ultrasound = manual diagnostic procedure to examine prostate gland\n" +
        "5. digital rectal examination = helpful procedure in guiding a prostatic biopsy needle\n" +
        "6. herpes simplex virus = causes sexually transmitted disease causes blister formation\n" +
        "7. sexually transmitted infection = chlamydia, gonorrhea, and syphillis \n" +
        "8. robotic assisted laparoscopic prostatectomy = assisted laparoscopic surgery to remove prostate gland\n" +
        "\n" +
        "part K\n" +
        "1. prostate cancer = radical (complete) prostatectomy\n" +
        "2. cryptorchidism = orchiopexy (bring the testes into scrotum) \n" +
        "3. sterilization = vasectomy\n" +
        "4. benign prostatic hyperplasia = photoselective vaporization of prostate\n" +
        "5. abnormal collection of fluid in scrotal sac = hydrocelectomy \n" +
        "6. reversal of sterilization = vasovasovectomy\n" +
        "7. embryonal carcinoma of testes = orchiectomy\n" +
        "8. phimosis = circumsion\n" +
        "9. ligation of swollen, twisted veins above testes = variocelectomy\n" +
        "\n" +
        "part J\n" +
        "1. -one = hormone\n" +
        "2. -stomy = new opening\n" +
        "3. semin/i = semen\n" +
        "4. -cele = hernia\n" +
        "5. -pexy = fixation\n" +
        "6. -genesis = formation\n" +
        "7. -plasia = growth\n" +
        "8. prostat/o = prostate gland\n" +
        "9. orch/o = testis\n" +
        "10. terat/o = monster \n" +
        "11. gon/o = seed \n" +
        "12. hydr/o = water\n" +
        "13. pen/o = penis\n" +
        "14. balan/o = glans penis \n" +
        "15. varic/o = varicose veins \n" +
        "16. vas/o = vessel, duct; vas deferens\n" +
        "17. test/o = testis\n" +
        "18. zo/o = animal life\n" +
        "19. crypt/o = hidden\n" +
        "20. andr/o = male (androgen = testosterone)"
    const [text,setText] = useState("")
    const [currentPairIndex,SetCurrentPairIndex] = useState(0)
    const [quesAnsPair,setQuesAnsPair] = useState([])
    const [showAns,setShowAns] = useState(false)



    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [quesAnsPair,currentPairIndex]);

    //getting the questionData
    useEffect(() => {
        console.log("init")
        const json = localStorage.getItem("quesAnsPair");
        const wordDefPair = JSON.parse(json);

        console.log(json)
        if (wordDefPair) {
            setQuesAnsPair(wordDefPair);
        }
        // handleText(str)
    },[])

    //saving the quesAnsData
    useEffect(() => {
        const json = JSON.stringify(quesAnsPair);
        localStorage.setItem("quesAnsPair", json);
    }, [quesAnsPair]);

    const handleText = (inputText) => {
        let text = inputText
        if(text===""){
            text = str
        }
        let lineLst = text.split("\n")
        let newWordDef  = []
        for(let i=0;i<lineLst.length;i++){
            let lineContentArr = lineLst[i].split("=")
            let ques = lineContentArr[0]
            let ans = lineContentArr[1]
            let pair = {
                ques:ques,
                ans:ans,
                correct:false,
            }
            if(ques=== undefined || ans === undefined)
                continue
            newWordDef.push(pair)
            console.log(pair)
        }
        setQuesAnsPair(newWordDef)
        SetCurrentPairIndex(0)
    }

    const IndexPrev = () => {
        SetCurrentPairIndex(currentPairIndex => currentPairIndex-1 <0 ? currentPairIndex: currentPairIndex-1)
    }
    const IndexNext = () => {
        SetCurrentPairIndex(currentPairIndex => currentPairIndex+1 >=quesAnsPair.length ? currentPairIndex: currentPairIndex+1)
    }
    const ToggleCorrect = (boolean) => {
        let copy =  quesAnsPair
        if(boolean===undefined)
            boolean = !copy[currentPairIndex].correct
        copy[currentPairIndex].correct = boolean
        setQuesAnsPair(prev=> {
            return [...copy]
        })
    }

    const ToggleShowAns = () => {
        setShowAns(showAns => !showAns)
    }

    const [prevData,setPrevData] = useState([])
    const FilterIncorrect = () => {
        console.log("filter")
        console.log(prevData)
    if(prevData.length!== 0){
        setQuesAnsPair(prev=>{
            return [...prevData]
        })
        setPrevData([])
        return
    }
        setPrevData([...quesAnsPair])
        let copy =  quesAnsPair
        copy = copy.filter(x=>{
            return !x.correct
        })
        console.log(copy)
        setQuesAnsPair(prev=>{
            return [...copy]
        })

    }

    const handleKeyPress = (event) => {
        if(event.key === " "){
            event.preventDefault();
            ToggleShowAns()
        }
        if(event.key === "ArrowRight"){
            IndexNext()
        }
        if(event.key === "ArrowLeft"){
            IndexPrev()
        }
        if(event.key === "ArrowUp"){
            event.preventDefault();
            ToggleCorrect(true)
        }
        if(event.key === "ArrowDown"){
            event.preventDefault();
            ToggleCorrect(false)
        }
        if(event.key === "s"){
            event.preventDefault();
            handleShuffle()
        }
        if(event.key === "q"){
            FilterIncorrect()
        }
        if(event.key === "Enter"){
            handleText(text)
        }
    };

    const handleShuffle = () => {
        let copy = quesAnsPair
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
        shuffle(copy)
        setQuesAnsPair(copy1 => [...copy])
        SetCurrentPairIndex(0)
    }

    return (

        <>
            <div >
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{quesAnsPair[currentPairIndex]?.ques }</h5>
                        <h5 className="card-title">{quesAnsPair[currentPairIndex]?.correct?"✅":"❌"}</h5>

                        {showAns && <p className="card-text">{quesAnsPair[currentPairIndex]?.ans}</p>}
                    </div>

                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={IndexPrev}>Prev</button>
                    <button type="button" className="btn btn-primary" onClick={ToggleShowAns}>Show</button>
                    <button type="button" className="btn btn-primary" onClick={IndexNext}>Next</button>
                    <button type="button" className="btn btn-primary" onClick={ToggleCorrect}>Mark Correct/Incorrect</button>
                    <button type="button" className="btn btn-primary" onClick={e=> {handleShuffle()}}>Shuffle</button>
                    <button type="button" className="btn btn-primary" onClick={e=> {FilterIncorrect()}}>Filter Corrects</button>

                </div>


                <button type="button" className="btn btn-primary" onClick={e=> {handleText(text)}}>Submit Text</button>


                <h5 className="card-title" style={{color:"White"}}>
                    Format: [Insert Question] = [Insert Answer] <br/>
                    Each pair must be separated by a line<br/>
                </h5>

                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" onChange={event => (setText(event.target.value))}></textarea>
                </div>

                <StudyTable quesAnsPair={quesAnsPair}
                            setQuesAnsPair={setQuesAnsPair}/>
            </div>

        </>
    )
}

export default EvaStudy