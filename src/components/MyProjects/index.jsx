import { Card } from "../Card"
import { projectInfo } from "../Card/projectInfo"
import "./style.css"

const MyProjects = () => {
    return(
        <div id='my-projects' className="my-projects">
            <div className="my-projects-title">
                <h2>Mis Proyectos</h2>
            </div>
            <div className="project-container">
                {
                    projectInfo.map((project, index) => (
                        <Card key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export { MyProjects }