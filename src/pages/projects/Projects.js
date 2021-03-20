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
            <div id='projects'>
                <h2>PrOJEKKts</h2>

                <div className='project-card-container'> {/* flex column, justify space around, alighn center*/}
                    
                    {project_data.map((project, index) => (
                        <div className='project-card' key={index}>
                            <ProjectCard
                                name={project.project_name} 
                                description={project.description} />
                        </div>
                    ))}


                </div>
            </div>
        )
    }
}

// json must be right to run
//     all project keys and values
// pass key values (project data) to Card component as props
//     use these props when creating card:
//         name of project, description...