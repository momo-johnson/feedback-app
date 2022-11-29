import React from 'react'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext  from '../context/FeedbackContext';

function Feedbackstats() {
  const {feedback } = useContext(FeedbackContext)
 let average = feedback.reduce((acc, current) => {
    return acc + current.rating;
 }, 0) /feedback.length;
   average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
    <h4>{feedback && feedback.length ? `${feedback.length} ${feedback.length > 1 ? "reviews" : "Review"}`: `0 Review`}</h4>
    <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>

  )
}

export default Feedbackstats
