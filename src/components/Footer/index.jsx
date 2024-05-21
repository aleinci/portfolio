import { Canvas } from '../Canvas'
import './style.css'

const Footer = () => {
    return(
        <footer id='contact-me' className="footer-container">
            <Canvas type={2} />
            <div className='footer-container-row'>
                
                <h2>Contáctame</h2>
                <div className='footer-contactme'>
                    
                    <a target='_blank' href="https://wa.me/584246606130" className='footer-icon-container'>
                        <div className='icon-container'>            
                                <img src="assets/whatsapp.png" alt="logo de whatsapp" />
                            
                        </div>
                        <h3>+58424-6606130</h3>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/alejandro-inciarte-52a760215/" className='footer-icon-container'>
                            <div className='icon-container'>
                                    <img src="assets/linkedin.png" alt="logo de linkedin" />
                            </div>
                        
                        <h3>LinkedIn</h3>
                    </a>
                    

                    <a className='footer-icon-container'>
                        <div className='icon-container'>
                            <img src="assets/gmail.png" alt="logo de gmail" />
                        </div>
                        <h3>aleinciarte8@gmail.com</h3>
                    </a>

                </div>
            </div>
        </footer>
    )
}

export { Footer }