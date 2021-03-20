import React, { Component } from 'react'

export default class ProjectCard extends Component {

    render() {
        return (
            <>
                <div id='project-card-top'> 
                <p>icon♥</p>
                <p className='tag'>Tag</p>
                </div>
                <div id='project-card-bttm'>
                        <h4>{this.props.name}</h4>
                        <p>{this.props.description}</p>
                        <a> View on Git</a>
                </div>
            </>
        )
    }
}
