import React from 'react';
import StrengthCard from '../../components/Cards/StrengthCard.js';
import icons from './strength-icons.js'

export default class Strengths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='strengths-container' id='whatIdo'>
                <h2>What I Do</h2>
                <br />
                <div className='strength-wrapper'>
                    <div className='strength-cards-container'>
                    <StrengthCard
                        id='analyze' 
                        class='even'
                        icon={icons.analyze}
                        altTxt='desktop with graph and calculations'
                        cardTitle='Analyze'>
                            <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                            </span>
                    </StrengthCard>

                    <StrengthCard
                        id='design' 
                        class='odd'
                        icon={icons.design}
                        altTxt='tools for creative design (ruler, etc)'
                        cardTitle='Design'>
                            <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                            </span>                    
                    </StrengthCard>

                    <StrengthCard
                        id='collab' 
                        class='even'
                        icon={icons.collab}
                        altTxt='team working on task icon'
                        cardTitle='Collaborate'>
                        <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                        </span>
                    </StrengthCard>

                    <StrengthCard
                        id='develop' 
                        class='odd'
                        icon={icons.develop}
                        altTxt='algorithm icon with desktop'
                        cardTitle='Develop'>
                            <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                            </span>
                    </StrengthCard>
                    </div>
                </div>
            </div>
         );
    }
}
 
