import './style.css'

const MySkills = () =>{
    return(
        <div className='skill-container'>
            <h2>Habilidades</h2>
            <div>
                <div>
                    <h3>Lenguajes de programacion y framework</h3>
                    <div className="skill-tags-container">
                        <span className="tag-html">
                                {/* <img src="./assets/html.png" alt="logo de html" /> */}
                            <span>HTML</span>
                        </span>
                        <span className="tag-css">
                                {/* <img src="./assets/css.png" alt="logo de css" /> */}
                            <span>CSS</span>
                        </span>
                        <span className="tag-js">
                                {/* <img src="./assets/js.png" alt="logo de js" /> */}
                            <span>JAVASCRIPT</span>
                        </span>
                        <span className="tag-react">
                            {/* <img src="./assets/react.png" alt="logo de react" /> */}
                            <span>REACT</span>
                        </span>
                    </div>
                </div>

                <div className='skill-curso-container'>
                    <h3>Cursos</h3>
                    <div>
                        <p>bootcamp de html, css, js, php, sql</p>
                        <p>Curso de React.js en <span className="platzi">platzi</span></p>
                        <p>Curso Full Stack en <span className="platzi">platzi</span> (en curso)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {MySkills}