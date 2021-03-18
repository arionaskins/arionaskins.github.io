import React from 'react'

export default class StrengthCard extends React.Component {

    render() { 
        return ( 
            <div className='strength-card' id={this.props.id}>
                <div className='strength-icon' href={this.props.iconSrc} alt={this.props.altTxt}>img hea</div>
                <div><h4 className='strength-title'>{this.props.cardTitle}</h4></div>
                {this.props.children}
            </div>
         );
    }
}
