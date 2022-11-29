import { createContext, useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState([{item: {}, edit: false}])
    useEffect(() => {
      fetchFeedBackData()
    }, [])


    const fetchFeedBackData = async () => {
       const response = await fetch("/feedback?_sort=id&_order=desc")
       const data = await response.json();
       setFeedback(data)
       setIsLoading(false)
    }

   
    const deleteFeedbackItem = (id) => {
        if(window.confirm("Are you sure you want to delete feedback?")){
            deleteFeedbackIte(id)
        }
    }

    const deleteFeedbackIte = async (id) =>{
        const response = await fetch(`/feedback/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          
        })
        if(response.status == 200){
           setFeedback(feedback.filter(item => item.id !==id))
        }

    }
    const addFeebackItem = (addNewFeedback) => {

        addFeedBack(addNewFeedback)

    }

    const addFeedBack = async (feedBack) => {
        const response = await fetch(`/feedback`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(feedBack),
            headers: {
                'Content-Type': 'application/json'
            }
          
        })
        console.log(response)
        if(response.status == 201){
           setFeedback([await response.json(), ...feedback])
        }
    }
    const  editFeedbackItem = (item) => {

        setFeedbackEdit({item, edit: true})
    }

    const updateFeedback = (id, updateitem) => {
        updateFeedbackItem(id, updateitem)
        
    }

    const updateFeedbackItem = async (id, updateitem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(updateitem),
            headers: {
                'Content-Type': 'application/json'
            }
          
        })
        const data = await response.json()
        if(response.status == 200){
            setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
        }
    }
    return <FeedbackContext.Provider value={{feedback, deleteFeedbackItem, addFeebackItem, editFeedbackItem, feedbackEdit, updateFeedback, isLoading}}>
    {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext