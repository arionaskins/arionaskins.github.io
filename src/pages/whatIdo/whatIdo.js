import React from 'react';
import StrengthCard from '../../components/Cards/StrengthCard.js';
import icons from '../../icons.js'

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
                            <span className='card-text'>
                                I have a vast experience in software and libraries for computational analysis
                                and statistical modelling of large datasets. I am passionate in quality 
                                data preprocessing and cleaning to ensure maximum accuracy in results. 
                                Some python libraries I have utilized are scikit-learn and pandas, as well as Tableau
                                to produce data-driven storytelling visualizations and dashboards.
                            </span>
                    </StrengthCard>

                    <StrengthCard
                        id='design' 
                        class='odd'
                        icon={icons.design}
                        altTxt='tools for creative design (ruler, etc)'
                        cardTitle='Design'>
                            <span className='card-text'>
                                I am a creative at heart and I utilize this to brainstorm ideas for web and product design.
                                I have a strong deisgn pricniple background incorporating aspects such as color scheme 
                                and web accessability. Additionally, I have conducted UI/UX Research in innovating 
                                web applications as well as product design features. Figma, Canva, and Adobe Photoshop
                                are a few software I have experience using. 
                            </span>                    
                    </StrengthCard>

                    <StrengthCard
                        id='collab' 
                        class='even'
                        icon={icons.collab}
                        altTxt='team working on task icon'
                        cardTitle='Collaborate'>
                        <span className='card-text'>
                                In addition to personal projects, I have collaborated with colleagues in
                                various technical projects. With experience in Project Management, task delegation 
                                and strategic decision masking, as well as formal contract documentation are my
                                practices to contribute in a result-oriented team. Platforms I have utilized for 
                                group communication are GroupMe, Zoom, Trello.
                            </span>
                    </StrengthCard>

                    <StrengthCard
                        id='develop' 
                        class='odd'
                        icon={icons.develop}
                        altTxt='algorithm icon with desktop'
                        cardTitle='Develop'>
                            <span className='card-text'>
                                I have a vast experience in software and libraries for computational analysis
                                and statistical modelling of large datasets. I am passionate in quality 
                                data preprocessing and cleaning to ensure maximum accuracy in results. 
                                Some python libraries I have utilized are scikit-learn and pandas, as well as Tableau
                                to produce data-driven storytelling visualizations and dashboards.
                            </span>
                    </StrengthCard>
                    </div>
                </div>
            </div>
         );
    }
}
 
