import { useRef, useEffect, useState } from 'react'
import './style.css'
import { act } from 'react'
import { codeParticles, cubeParticles, sideParticles, trailParticles } from './codeParticles'


const Canvas = ({type}) => {

    const [canvasContext, setCanvasContext] = useState(null)
    const [size, setSize] = useState({})
    const canvasRef = useRef(null)

    const types =  ["btn", "code", "side", "trail"]
    const particle = []

   

    
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        let activeParticle = false;
        setCanvasContext(context);

        const canvasResize = () =>{
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = context.webkitBackingStorePixelRatio ||
                                    context.mozBackingStorePixelRatio ||
                                    context.msBackingStorePixelRatio ||
                                    context.oBackingStorePixelRatio ||
                                    context.backingStorePixelRatio || 1;
            var ratio = devicePixelRatio / backingStoreRatio;

            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;

            
            context.scale(ratio, ratio);
            
            if(canvas.width != canvas.offsetWidth){
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
        }

        const timeoutId = setTimeout(() => {
            canvasResize()
            
          }, 100);
        

        const main = () => {
            const Update = () =>{
                if (types[type] == types[1]){
                    codeParticles({particle, canvas, context})
                }
                
                if(types[type] == types[0]){
                    cubeParticles({particle, canvas, context, activeParticle})
                }
                if(types[type] == types[2]){
                    sideParticles({particle, canvas, context});
                }
                if(types[type] == types[3]){
                    trailParticles({particle, canvas, context});
                }
            }
    
            const interval = setInterval(Update, 1000/30);
            
        }
        main()
        
        
        
        window.addEventListener("resize", canvasResize)

        canvas.addEventListener("mouseover", ()=>{
            if(canvas.width == 0){canvasResize}
            activeParticle = true;
        });
        canvas.addEventListener("mouseout", ()=>{
            if(canvas.width == 0){canvasResize}
            activeParticle = false;
        });

        return() => {
            window.removeEventListener("resize", canvasResize)

            canvas.removeEventListener("mouseover", ()=>{
                activeParticle = true;
            })
            canvas.addEventListener("mouseout", ()=>{
                activeParticle = false;
            });
        }
        
        
    }, [])

    return (
        <canvas className='canvas' ref={canvasRef}></canvas>
    )
}
export { Canvas }