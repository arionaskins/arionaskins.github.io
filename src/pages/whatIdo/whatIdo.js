import React from 'react';
import StrengthCard from '../../components/Cards/StrengthCard.js';
import icons from '../../icons.js'

export default class Strengths extends React.Component {

    render() { 
        return ( 
            <section className='strengths-container' id='whatIdo'>
                <br />
                <h2>What I Do</h2>
                <br />
                <div className='strength-wrapper'>
                    <div className='strength-cards-container'>
                        <StrengthCard
                            id='develop' 
                            class='even'
                            icon={icons.develop}
                            altTxt='algorithm icon with desktop'
                            cardTitle='Develop'>
                                <span className='card-text'>
                                As a natural problem solver, I am inclined to logically 
                                approaching <a className='keyword'
                                                href='https://hbr.org/2021/11/how-to-navigate-the-ambiguity-of-a-digital-transformation'
                                                >ambiguous issues</a> and
                                formulating solutions. This easily translates over when handling data, in which
                                I have experience developing primarily data driven front-end
                                 <a className='keyword'
                                        href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'
                                        >responsive web applications</a> with some back-end knowledge. I have 
                                built apps with frameworks such as Spring, React.js, node.js, and Bootstrap.
                                </span>
                        </StrengthCard>


                    <StrengthCard
                        id='collab' 
                        class='odd'
                        icon={icons.collab}
                        altTxt='team working on task icon'
                        cardTitle='Collaborate'>
                        <span className='card-text'>
                                In addition to personal projects, I have collaborated among colleagues within teams 
                                in completing various technical projects. With experience in Project Management—task
                                delegation and <a className='keyword' href='https://www.umassd.edu/media/umassdartmouth/fycm/decision_making_process.pdf'
                                                >strategic decision making</a>, as well as formal contract documentation
                                are my practices to contribute in a result-oriented team. Platforms I have utilized for 
                                group engagement are Miro, Zoom, and GitHub.
                            </span>
                    </StrengthCard>

                    <StrengthCard
                        id='design' 
                        class='even'
                        icon={icons.design}
                        altTxt='tools for creative design (ruler, etc)'
                        cardTitle='Design'>
                            <span className='card-text'>
                                I am a creative at heart and I utilize this to brainstorm ideas for web and product design. I have a 
                                strong <a className='keyword' 
                                            href='https://www.freshconsulting.com/7-uiux-principles-fresh-web-experiences/'
                                            >design principle</a> background in designing prototypes and wireframes
                                for target audiences. Additionally, I have 
                                conducted <a className='keyword' 
                                            href='https://www.secretstache.com/blog/ui-ux-research-methods/'>UI/UX Research</a> in innovating 
                                web applications as well as product design features. Figma, Canva, and Photoshop
                                are a few software in my skill set. 
                            </span>                    
                    </StrengthCard>

                    <StrengthCard
                        id='analyze' 
                        class='odd'
                        icon={icons.analyze}
                        altTxt='desktop with graph and calculations'
                        cardTitle='Analyze'>
                            <span className='card-text'>
                                I have a vast experience in software and libraries for computational analysis 
                                and <a className='keyword' 
                                        href='https://www.omnisci.com/technical-glossary/statistical-modeling'>statistical modelling</a> of
                                 large datasets. I am passionate in quality <a className='keyword'
                                                                                 href='https://towardsdatascience.com/data-preprocessing-concepts-fa946d11c825'
                                                                                >data preprocessing</a> and cleaning
                                to ensure maximum accuracy in results. Some python libraries I have utilized
                                are scikit-learn and pandas, as well as Tableau to produce <a className='keyword'
                                                                                             href='https://mitsloan.mit.edu/ideas-made-to-matter/next-chapter-analytics-data-storytelling'
                                                                                            > data-driven storytelling</a> visualizations
                                and dashboards.
                            </span>
                    </StrengthCard>

                    </div>
                </div>
                <br />
            </section>
         );
    }
}
 
