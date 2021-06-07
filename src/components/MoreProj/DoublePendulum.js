import React, { useRef, useEffect,useState } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const DoublePendulum = props => {

    const canvasRef = useRef(null)



    const [variables, setVariables] = useState({
        "p":28.0,
        "a":10.0,
        "b":8/3,
        "scale":10,
        "type":"lorenz",
        "speed":0.75,

    });



    let x=0.01
    let y=0.01
    let z=0.01

    let a=variables["a"]
    let p=variables["p"]
    let b=variables["b"]

    let dx=1.0
    let dy=1.0
    let dz=1.0
    let dt=0.02
    let speed=variables["speed"]
    let dDelta=1/speed

    let disX=0
    let disY=0
    let disZ=0

    let width=600
    let height=600
    let xOffSet=width/2
    let yOffSet=275

    let scale=variables["scale"]

    let vecArr= []

    const attractorCalculate = (type) => {

        // if(type==="aizawa"){
        //
        //
        //     dx=y
        //     dx=z
        //     dx=(-1*x)-(b*y)-z+x^3
        //
        //
        // }
        // else if(type==="halvorsen"){
        //     dx=((-1*a*x)-(4*y)-(4*z)-(y*y))
        //     dy=((-1*a*y)-(4*z)-(4*x)-(z*z))
        //     dz=((-1*a*z)-(4*x)-(4*y)-(x*x))
        //
        // }
        // else
        {
            dx=(a*(y-x))
            dy=(x*(p-z)-y)
            dz=(x*y-b*z)
        }
        x+=dx*dt/dDelta
        y+=dy*dt/dDelta
        z+=dz*dt/dDelta

        disX=x*scale+xOffSet
        disY=y*scale+yOffSet
        disZ=z*scale+500

        let dict={
            x:disX,
            y:disY,
            z:disZ,
        }
        vecArr.push(dict)

        // console.log(disX+","+disY+","+z)
    }


    const handleSlideChange = (type,val) => {

        if(type==="a")
            a=val
        if(type==="b")
            b=val
        if(type==="p")
            p=val
        if(type==="scale")
            scale=val
        if(type==="speed")
        {
            val=val/10
            speed=val
        }
        let temp = {...variables}
        temp[type]=val
        setVariables(temp)

        clearCanvas()
    }

    const handleSystemChange = (type) => {
        let temp = {...variables}
        temp["type"]=type
        setVariables(temp)
        clearCanvas()
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height);

    }

    const draw = (ctx, frameCount) => {


        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        if(vecArr.length>2)
            ctx.moveTo(vecArr[vecArr.length-2].x, vecArr[vecArr.length-2].y);
        ctx.lineTo(vecArr[vecArr.length-1].x, vecArr[vecArr.length-1].y);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle="#ffffff"
        ctx.stroke()

        // // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.arc(disX, disY, 1, 0, 2 * Math.PI, true);

        ctx.fill()
    }


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')


        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            attractorCalculate(variables["type"])
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])



    return <div className={"mazedollFont text-light aboutHeader"}>
        The lorenz attractor
        <Container>

            <Row>
                <canvas
                    width={width}
                    height={height}
                    ref={canvasRef} {...props}/>
                <Col>
                    <Col className={"attractorSlider"}>
                        <Col>
                            ρ:{variables["p"]}
                            <input type="range" min="1" max="100" defaultValue={p} onInput={(e)=>{
                                handleSlideChange("p",e.target.value)
                            }}/>
                        </Col>
                        <Col>
                            σ:{a}
                            <input type="range" min="1" max="100" defaultValue={a} onInput={(e)=>{
                                handleSlideChange("a",e.target.value)
                            }}/>
                        </Col>
                        <Col>
                            β:{Math.round(b)}
                            <input type="range" min="1" max="100" defaultValue={b} onInput={(e)=>{
                                handleSlideChange("b",e.target.value)
                            }}/>
                        </Col>

                        <Col>
                            Scale:{scale}
                            <input type="range" min="1" max="20" defaultValue={scale} onInput={(e)=>{
                                handleSlideChange("scale",e.target.value)
                            }}/>
                        </Col>

                        <Col>
                            Speed:{speed}
                            <input type="range" min="1" max="20" defaultValue={speed*10} onInput={(e)=>{
                                handleSlideChange("speed",e.target.value)
                            }}/>
                        </Col>
                    </Col>

                    <Container>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => {handleSystemChange("lorenz")}}>
                            Lorenz Attractor
                        </button>
                        {/*<button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => {handleSystemChange("aizawa")}}>*/}
                        {/*    Aizawa Attractor*/}
                        {/*</button>*/}
                    </Container>
                </Col>
            </Row>
        </Container>

    </div>
}

export default DoublePendulum