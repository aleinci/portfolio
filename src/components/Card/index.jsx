import { Canvas } from '../Canvas'
import './style.css'

const Card = ({project}) => {
    return(
        <div className='card-container'>
            <figure className='card-img-container'>
                <img src={project.image} alt="todo" />
            </figure>

            <div className='card-info-container'>
                <div className=''>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div className='card-tags-container'>
                    {
                        project.tags.map(tag => (
                            <span key={tag} className='card-tag'>{tag}</span>
                        ))
                    }
                </div>
                <div className={`${project.urlGit == "" ? "card-link-center" : "card-link-between"} card-link-container`}>
                    {
                        project.urlGit != "" && <a className='card-btn-repository' href={project.urlGit}>Repositorio</a>
                    }
                    
                    <a className='card-btn-page' href={project.urlPage}>Ver</a>
                </div>
            </div>
        </div>
    )
}
export { Card }