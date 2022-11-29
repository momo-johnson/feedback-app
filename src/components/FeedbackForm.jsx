import React, { useContext } from 'react'
import Card from '../shared/Card'
import { useState, useEffect } from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const { addFeebackItem, feedbackEdit, updateFeedback  } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    useEffect(() => {
        if(feedbackEdit.edit){
            console.log(feedbackEdit.item.rating)
            setText(feedbackEdit.item.text)
            setRating(Number(feedbackEdit.item.rating))
            setBtnDisabled(false)
        }
    }, [feedbackEdit])

    const onChangeText = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Text must more be atleast 10")

        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim().length >= 10){
            const newFeeback = {
                rating,
                text
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeeback)
            }else {
                addFeebackItem(newFeeback)
            }
            setText("")
           
        }
    }
  return (
    <Card>
    <RatingSelect select={(rating) => setRating(rating)} />
    <h2>How would you rate your service with us?</h2>
    <form onSubmit={handleSubmit}>
    <div className="input-group">
    <input onChange={onChangeText} type="text" placeholder='write a review' value={text}/>
    <Button type="submit" version='secondary' isDisabled={btnDisabled}>
    Send
    </Button>
    </div>
    {message && <div className='message'>{message}</div>}
    </form>
    </Card>
  )
}

FeedbackForm.propTypes = {}

export default FeedbackForm
