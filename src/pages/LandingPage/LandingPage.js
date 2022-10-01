import React from 'react'
import "./LandingPage.css"
import EventCard from '../../components/EventCard/EventCard'
import EventButton from '../../components/EventButton/EventButton'

const LandingPage = () => {
  return (
    <div className='landing_page_container'>
        
        <EventCard/>
        <div className='landing_page_text'>
            <h1>Imagine If<div className='highlight'>Snapchat</div><div>had Events.</div></h1>
            <div>Easily host and share events with your friends <br/>across any social media.</div>
        </div>
        <EventButton text={"🎉 Create my event"} link={"create"}/>
    </div>
  )
}

export default LandingPage