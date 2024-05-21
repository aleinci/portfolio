import './style.css'

const AboutMe = () => {
    return(
        <div id='about-me' className='about-me-container'>
            <h2>Sobre mi</h2>
            <div className="about-me-info">
                <div className="about-me-img">
                    <img src="assets/me.png" alt="Foto sobre mi" />
                </div>
                <div className="about-me-text">
                    <p>
                    Soy un desarrollador web frontend junior con un enfoque autodidacta. 
                    Me apasiona ver cómo los proyectos y funcionalidades toman forma en la página web. 
                    Disfruto del proceso creativo y de la resolución de problemas. 
                    En mi tiempo libre, también soy un entusiasta de los videojuegos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export { AboutMe }