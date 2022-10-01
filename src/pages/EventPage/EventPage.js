import React from 'react'
import EventAction from '../../components/EventAction/EventAction'
import EventImage from '../../components/EventImage/EventImage'
import "./EventPage.css"
import { FaCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const EventPage = () => {
  return (
    <div className='event_page_container'>
        <EventImage/>
        <div className='event_details'>
            <div className='event_text'>
                <h1>Birthday Bash</h1>
                <div>Hosted by Elyisa</div>
            </div>
            <div className='action_arrow'>
                <EventAction up_content={"18 August 6:00PM"} down_content={"to 19 August 1:00PM UTC +10"} icon={<FaCalendarAlt color='#8456EC'/>}/>
                <EventAction up_content={"Street name"} down_content={"Suburb, State, Postcode"} icon={<GoLocation color='#8456EC'/>}/>
            </div>
        </div>
    </div>
  )
}

export default EventPage