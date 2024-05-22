let imglight = new Image();
imglight.src="assets/light.png";

const randomCode = () =>{
    // const textCode = ["function sum(num1, num2){ return num1 + num2 }", "let name = 'Alejandro'", '<script src="main.js" />', "<head></head>", "<ul></ul>", "<body>", '<a href="#">Link</a>', "<h1>PORTFOLIO</h1>", "<html>", "<div>", "<p>Hello world</p>", '<img src="/logo.png" alt="logo" />', "if (Input.mouseFire) {ChangeColor()}"]
    const textCode = ["0", "1"]
    return textCode[Math.floor(Math.random()* textCode.length - 0)]
}
const random = (min, max) =>{
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

// PARTICULAS DE CODIGOS HTML JS ********************
const drawParticleCode = (particle, canvas, context) => {

    context.clearRect(0,0, canvas.width, canvas.height);

    for(let i in particle){
        let j = particle[i]


        context.save();
        context.imageSmoothingEnabled = false;
        context.fillStyle = "white";
        context.font = j.size + "px Arial";
        context.fillText(j.text, j.x, j.y);
        context.restore();

        j.textChange.current++;

        if(j.textChange.current >= j.textChange.end){
            j.text = randomCode();
            j.textChange.current = 0;
        }

        j.x -= (j.speed * 0.5)

        j.death.current++
        
        if (j.x <= -250) {delete particle[i]}
    }
    particle.filter(item => item);
}

const createParticleCode = (particle, canvas) => {
    if(Math.floor(Math.random()*100) < 30){
        particle.push({
            x:canvas.width,
            y:random(0, canvas.height),
            text:randomCode(),
            size:random(12,22),
            speed:random(1,3),
            textChange:{current:0, end:random(2,5)},
            death:{current:0, end:random(8,15)}
        })
    }
}

const codeParticles = ({particle, canvas, context}) => {
    createParticleCode(particle, canvas);
    drawParticleCode(particle, canvas, context);
}

// PARTICULAS DE CUBOS ********************

const drawParticleCube = (particle, canvas, context) => {

    context.clearRect(0,0, canvas.width, canvas.height);

    for(let i in particle){
        let j = particle[i]

        context.save();
        context.fillStyle = "white";
        context.fillRect(j.x, j.y, j.size, j.size);
        context.restore();

        j.y -= j.speed

        j.death.current++
        
        if (j.death.current >= j.death.end) {delete particle[i]}
    }
    particle.filter(item => item);
}

const createParticleCube = (particle, canvas) => {
    particle.push({
        x:random(0, canvas.width),
        y:canvas.height,
        size:random(2,8),
        speed:random(1,4),
        death:{current:0, end:random(8,15)}
    })
}

const cubeParticles = ({particle, canvas, context, activeParticle}) => {
    if(activeParticle) {createParticleCube(particle, canvas)}
    drawParticleCube(particle, canvas, context);
}



// APRTICULAS TRAILS ********************


const drawParticleSide = (particle, canvas, context) => {

    context.clearRect(0,0, canvas.width, canvas.height);
    

    for(let i in particle){
        let j = particle[i]

        context.save();
        context.fillStyle = "white";
        context.fillRect(j.x, j.y, j.size, j.size);
        context.restore();

        j.x -= j.speed

        j.death.current++
        
        if (j.death.current >= j.death.end) {delete particle[i]}
    }
    particle.filter(item => item);
}

const createParticleSide = (particle, canvas) => {
    if(Math.floor(Math.random()*2) == 1){
        particle.push({
            x:canvas.width,
            y:random(0, canvas.height),
            size:random(2,8),
            speed:random(1,4),
            death:{current:0, end:random(20,35)}
        })
    }else{
        particle.push({
            x:0,
            y:random(0, canvas.height),
            size:random(2,8),
            speed:random(1,4)*-1,
            death:{current:0, end:random(20,35)}
        })
    }
}

const sideParticles = ({particle, canvas, context}) => {
    createParticleSide(particle, canvas)
    drawParticleSide(particle, canvas, context);
}


// APRTICULAS TRAILS ********************


const drawParticleTrail = (particle, canvas, context) => {

    // context.clearRect(0,0, canvas.width, canvas.height);

    context.fillStyle = 'rgba(255, 255, 255, .1)';
    context.fillRect(0,0, canvas.width, canvas.height);
    

    for(let i in particle){
        let j = particle[i]

        context.save();
        context.fillStyle = "rgb(70 79 229)";
        context.drawImage(imglight, j.x, j.y, j.size, j.size);
        context.restore();

         j.x -= j.speed;
        
         j.y -= Math.cos(j.current + Math.PI/90 * 2) * 1;

        j.current-=0.05;
         j.death.current++;
        if (j.death.current >= j.death.end) {delete particle[i]}
    }
    particle.filter(item => item);
}

const createParticleTrail = (particle, canvas) => {
    if(Math.floor(Math.random()*100) < 8){
        if(Math.floor(Math.random()*2) == 1){
            particle.push({
                x:canvas.width,
                y:random(0, canvas.height),
                size:random(4,12),
                speed:random(1,4),
                current:0,
                death:{current:0, end:random(100,130)}
            })
        }else{
            particle.push({
                x:0,
                y:random(0, canvas.height),
                size:random(4,12),
                speed:random(1,4)*-1,
                current:0,
                death:{current:0, end:random(70,100)}
            })
        }
    }
}

const trailParticles = ({particle, canvas, context}) => {
    createParticleTrail(particle, canvas)
    drawParticleTrail(particle, canvas, context);
}




export {codeParticles, cubeParticles, sideParticles, trailParticles}