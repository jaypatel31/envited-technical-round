import React from 'react'
import EventButton from '../../components/EventButton/EventButton'
import EventForm from '../../components/EventForm/EventForm'
import "./CreatePage.css"


const CreatePage = () => {
  return (
    <div className='create_page_container'>
        <h1 className='title'>Create Event</h1>
        <EventForm/>
        <EventButton text={"Next"} link={"event"}/>
    </div>
  )
}

export default CreatePage