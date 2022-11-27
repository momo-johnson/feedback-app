import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from "../data/feedbackdata";
const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState([{item: {}, edit: false}])
    const deleteFeedbackItem = (id) => {
        if(window.confirm("Are you sure you want to delete feedback?")){
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    
    const addFeebackItem = (addNewFeedback) => {
        addNewFeedback.id = uuidv4()
        
        setFeedback([addNewFeedback, ...feedback]);

    }

    const  editFeedbackItem = (item) => {

        setFeedbackEdit({item, edit: true})
    }

    const updateFeedback = (id, updateitem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateitem} : item))
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedbackItem, addFeebackItem, editFeedbackItem, feedbackEdit, updateFeedback}}>
    {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext