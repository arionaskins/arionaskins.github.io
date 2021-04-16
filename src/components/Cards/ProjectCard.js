import React, { Component } from 'react'
import icons from  '../../icons.js'

export default class ProjectCard extends Component {

    render() {
        return (
            <>
                <div id='project-card-top'> 
                    <p className='tag'><span className='tag-icon'><img className='tag-icon' src={icons.tag}alt='tag icon' >
                                      </img></span> {this.props.tag}</p>
                </div>
                <div id='project-card-bttm'>
                        <h4>{this.props.name}</h4>
                        <p className='project-description'>{this.props.description}</p>
                        <a href={this.props.url} className='view-code-link'>view code &#62;</a>
                </div>
            </>
        )
    }
}
