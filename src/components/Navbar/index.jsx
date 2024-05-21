import { Canvas } from '../Canvas';
import './style.css' 
import { useState, useEffect } from 'react';

const Navbar = () =>{

    const [isOpenNav, setIsOpenNav] = useState(false);

    const changeResize = () =>{
        if(window.innerWidth >= 560){
            setIsOpenNav(true)
        } else{
            setIsOpenNav(false);
        }
    }
    const closeNav = () => {
        if(window.innerWidth < 560){
            setIsOpenNav(false)
        }
    }

    useEffect(() =>{ 
        changeResize();
        window.addEventListener("resize", changeResize)
        
        return() => {window.removeEventListener("resize", changeResize)}
    }, [])

    return(
        <nav className='nav-container'>
            <div onClick={() => setIsOpenNav(true)} className={`${isOpenNav ? 'hidden' : ''} navbar-open`}>
                
                 <img className='navbar-open-close-button' src = "assets/menu.svg" alt="menu icon"/>
            </div>

            <div className={`${!isOpenNav ? 'hidden' : ''} navbar`}>
                <div className='navbar-close'>
                     <img onClick={() => setIsOpenNav(false)} className='navbar-open-close-button' src = "assets/close.svg" alt="close icon"/>
                </div>
                <ul className='navbar-list'>
                    <li>
                        <a onClick={() => closeNav()} href="#my-projects">    
                            <Canvas type={0} />
                            Mis proyectos
                        </a>
                    </li>
                    <li>
                        <a onClick={() => closeNav()} href="#about-me">
                            <Canvas type={0} />
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a onClick={() => closeNav()} href="#contact-me">
                            <Canvas type={0} />
                            Contáctame
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Navbar }