import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import feedbackContext  from "../context/FeedbackContext"
function FeedbackList() {
    const { feedback } = useContext(feedbackContext)
    if(!feedback || feedback.length === 0)
    {
        return <p>No Feedback Yet</p>
    }
  return (

    <div className="feedback-list">
    {
        
        feedback.map((feedbackItem) =>(
            <FeedbackItem key={feedbackItem.id} item={feedbackItem} />
        ))
    }
    </div>
  )
}

export default FeedbackList
