import React from 'react'
import './projects.styles.css'
import { useNavigate } from "react-router-dom";

const Projects = (props) => {
    const history = useNavigate();

    const getRedirected = (id) => {
        history(`/project?id=${id}`);
    }

    return(
   <div className="main-p">
    <h1 className="project-title"><spann style={{color: '#ffa680'}}>My</spann> Projects</h1>
    <div id="projects" className="project-container">
    <main className="project">
            {props.projectData.data.map((project, index) => {



                return(
                        <div key={index} onClick={() => getRedirected(project.id)} className="card" style={{
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundImage: `url('${project.imageUrl}')`
                        }}> 
                        <h2 className="project-title">{project.title}</h2>
                        <h3 className="project-subtitle">view more details</h3>
                </div>
                )
            })}
    </main>
    </div>
   </div>
    )
}

export default Projects