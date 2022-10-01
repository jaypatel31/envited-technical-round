import React from 'react'
import "./EventButton.css"
import { MdCelebration } from "react-icons/md";
import { Link } from 'react-router-dom'

const EventButton = ({text,link}) => {
  return (
    <div className='event_button_container'>
        <Link to={`/${link}`}>{text}</Link>
    </div>
  )
}

export default EventButton