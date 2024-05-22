import { Canvas } from '../Canvas'
import './style.css'
const Header = () => {
    const name = "Alejandro"
    return(
        <header className="header-container">
            <Canvas type={1} />
            <div className='header-row'>
                <div className='header-presentation'>
                    <h1>Hola! soy
                        <div className='header-myName'>
                         {
                            name.split('').map((n, index) => (
                                <span key={n} className={`header-myName${index}`}>{n}</span>
                            ))
                        }
                        </div>
                    </h1>
                    <p>{"< "}un desarrollador frontend{" />"}</p>
                </div>
                <div className='header-particle-container'>
                    
                </div>
            </div>
        </header>
    )
}

export {Header}