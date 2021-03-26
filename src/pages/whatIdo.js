import React from 'react';
import StrengthCard from '../components/Cards/StrengthCard.js'

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
                        altTxt='nun'
                        cardTitle='Analyze'>
                            <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                            </span>
                    </StrengthCard>

                    <StrengthCard
                        id='design' 
                        class='odd'
                        altTxt='nun'
                        cardTitle='Design'>
                            <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                            </span>                    
                    </StrengthCard>

                    <StrengthCard
                        id='collab' 
                        class='even'
                        altTxt='nun'
                        cardTitle='Collaborate'>
                        <span className='card-text'>I have a vast knowledge in software and libraries for computational/statistical analysis.
                            I am passionate in quality data preprocessing and cleaning to ensure maximum
                            accuracy in results. I have utiized technologies such as Microsoft Excel, pandas, numPy, and Tableau.
                        </span>
                    </StrengthCard>

                    <StrengthCard
                        id='develop' 
                        class='odd'
                        altTxt='nun'
                        cardTitle='Innovate'>
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
 
