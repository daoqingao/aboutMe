import React, { useRef, useEffect } from 'react'
import {Container} from "react-bootstrap";

const Attractors = props => {

    const canvasRef = useRef(null)


    let x=0.01
    let y=0.01
    let z=0.01

    let a=10.0
    let p=28.0
    let b=8/3

    let dx=1.0
    let dy=1.0
    let dz=1.0
    let dt=0.02
    let dDelta=2

    let disX=0
    let disY=0
    let disZ=0

    let width=500
    let height=600

    let scale=10

    let vecArr= []

    const attractorCalculate = () => {

        dx=(a*(y-x))*dt
        dy=(x*(p-z)-y)*dt
        dz=(x*y-b*z)*dt
         x+=dx/dDelta
         y+=dy/dDelta
         z+=dz/dDelta

        disX=x*scale+width/2
        disY=y*scale+250
        disZ=z*scale+500

        let dict={
            x:disX,
            y:disY,
            z:disZ,
        }
        vecArr.push(dict)


        console.log(disX+","+disY+","+z)
    }




    const draw = (ctx, frameCount) => {


        ctx.fillStyle = '#ffffff'

        var gradient = ctx.createLinearGradient(0, 0, 170, 500);
        gradient.addColorStop(".25", "white");
        gradient.addColorStop(".9" ,"green");
        gradient.addColorStop("1.0", "yellow");


        ctx.beginPath()

        if(vecArr.length>2)
            ctx.moveTo(vecArr[vecArr.length-2].x, vecArr[vecArr.length-2].y);

        ctx.lineTo(vecArr[vecArr.length-1].x, vecArr[vecArr.length-1].y);



        ctx.strokeStyle=gradient
        ctx.lineWidth = 0.5;
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
            attractorCalculate()
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
            <canvas
                width={width}
                height={height}
                ref={canvasRef} {...props}/>
        </Container>

    </div>
}

export default Attractors