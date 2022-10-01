import React from 'react'
import "./EventAction.css"
import { MdOutlineArrowForwardIos } from "react-icons/md";

const EventAction = ({up_content,down_content,icon}) => {
  return (
    <div className='event_action_container'>
        <div className='event_meta'>
            <div className='event_icon'>
                {icon}
            </div>
            <div className='event_action_text'>
                <div className='up_content'>{up_content}</div>
                <div className='down_content'>{down_content}</div>
            </div>
        </div>
        <div className='event_arrow'>
            <MdOutlineArrowForwardIos color='#BDBDBD'/>
        </div>
    </div>
  )
}

export default EventAction