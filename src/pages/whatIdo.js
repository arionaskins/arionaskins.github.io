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
            <div className='strength-cards-container'>
                <StrengthCard
                    id='analyze-card' 
                    iconSrc='no src luv'
                    altTxt='nun'
                    cardTitle='Analyze'>
                        also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.
                </StrengthCard>

                <StrengthCard
                    id='design-card' 
                    iconSrc='no src luv'
                    altTxt='nun'
                    cardTitle='Design'>
                        also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.
                </StrengthCard>

                <StrengthCard
                    id='collab-card' 
                    iconSrc='no src luv'
                    altTxt='nun'
                    cardTitle='Collaborate'>
                        also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.
                </StrengthCard>

                <StrengthCard
                    id='develop-card' 
                    iconSrc='no src luv'
                    altTxt='nun'
                    cardTitle='Develop'>
                        also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.
                </StrengthCard>

                </div>
            </div>
         );
    }
}
 
