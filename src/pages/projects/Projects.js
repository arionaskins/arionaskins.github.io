import React from 'react'
import project_data from './project_data.js'
import ProjectCard from '../../components/Cards/ProjectCard.js'

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <section className='projects' id='projects'>
                <br />
                <h2>Projects</h2>

                <div className='project-card-container'> {/* flex column, justify space around, alighn center*/}
                    
                    {project_data.map((project, index) => (
                        <div className='project-card' key={index}>
                            <ProjectCard
                                name={project.project_name} 
                                description={project.description}
                                url={project.link} 
                                tag={project.tag} />
                        </div>
                    ))}
        
                </div>
            </section>
        )
    }
}


