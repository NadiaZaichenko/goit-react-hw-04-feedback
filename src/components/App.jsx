
import { useState } from 'react'
import { StyledContainer, SectionContainer } from './App.styled'
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Statistics } from './Feedback/Statistics'
import Section from './Feedback/Section'
import Notification from './Feedback/Notification'


export const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const options = Object.keys({good, neutral, bad});


 const onLeaveFeedBack = options => {
  switch (options) {
    case 'good' :
      setGood(prevState => prevState + 1);
      break;
    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
    case 'bad' : 
    setBad(prevState => prevState + 1);
    break;
    default:
    break;
  }
}; 

const countTotalFeedback = () => {
  return good + neutral + bad;
};


const countPositiveFeedbackPercentage = () => {
      return  Math.round(
        (good / countTotalFeedback()) * 100) || 0;
}

return (
              <StyledContainer>
                <SectionContainer>
                  <Section title='Please leave feedback'>
                   <FeedbackOptions 
                  options = {options} 
                  onLeaveFeedBack = {onLeaveFeedBack}/>
                </Section>
                 <Section title = 'Statistics'>
  
                   {countTotalFeedback() > 0 ? (
                      <Statistics
                  good = {good} 
                  neutral = {neutral} 
                  bad = {bad} 
                  total = {countTotalFeedback()}
                  positivePercentage ={countPositiveFeedbackPercentage()}
                  />
                   ) : (
                    <Notification message="There is no feedback" />
                   )} 
                    </Section>  
                </SectionContainer>      
              </StyledContainer>
          )
}
