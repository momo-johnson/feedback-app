import React from "react";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useEffect } from "react";
import FeedbackData from "../data/feedbackdata";
//.item.rating
function RatingSelect({select}) {
  const { feedbackEdit } = useContext(FeedbackContext)
  const [selected, setSelected] = useState(10)
  useEffect(()=> {
    //setSelected()
    if(feedbackEdit.edit){
      setSelected(Number(feedbackEdit['item'].rating))
    }
   

  }, [feedbackEdit])
  
  
  const  handleChange = (event) => {
    setSelected(Number(event.target.value))
    select(+event.target.value)
  }
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="num1"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="num2"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="num3"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="num4"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="num5"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="num6"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="num7"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="num8"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
          
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="num9"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="num10"
          id="num10"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

RatingSelect.propTypes = {};

export default RatingSelect;
