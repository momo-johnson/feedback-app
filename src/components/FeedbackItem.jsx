import PropTypes from 'prop-types'
import Card from '../shared/Card'
import { FaTimes, FaEdit} from "react-icons/fa"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const { deleteFeedbackItem, editFeedbackItem} = useContext(FeedbackContext)
    //const [feedbackItems, set] = useState()

  return (
    
    <Card>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => deleteFeedbackItem(item.id)} className="close"><FaTimes color='purple'/></button>
    <button onClick={() => editFeedbackItem(item)}className='edit'><FaEdit color='purple' /></button>
    <div className="text-display">
   {item.text}
    </div>
    </Card>
  )
}


export default FeedbackItem
