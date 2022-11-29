import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import feedbackContext  from "../context/FeedbackContext"
import Spinner from '../shared/Spinner'
function FeedbackList() {
    const { feedback, isLoading} = useContext(feedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0))
    {
        return <p>No Feedback Yet</p>
    }
    return isLoading ? <Spinner /> : (<div className="feedback-list">
    {
        
        feedback.map((feedbackItem) =>(
            <FeedbackItem key={feedbackItem.id} item={feedbackItem} />
        ))
    }
    </div>)
}

export default FeedbackList
