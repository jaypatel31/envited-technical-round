import React from 'react'
import "./EventForm.css"

const EventForm = () => {
  return (
    <div className='event_form_container'>
        <form className='event_form'>
            <div className='input_element'>
                <label htmlFor='event_name'>Event Name:</label>
                <input type="text" name="event_name" id="event_name" />
            </div>
            <div className='input_element'>
                <label htmlFor='host_name'>Host Name:</label>
                <input type="text" name="host_name" id="host_name" />
            </div>
            <div className='input_element'>
                <label htmlFor='event_loc'>Event Location:</label>
                <input type="text" name="event_loc" id="event_loc" />
            </div>
            <div className='input_element'>
                <label htmlFor='st_time'>Event Start Time:</label>
                <input type="datetime-local" name="st_time" id="st_time" />
            </div>
            <div className='input_element'>
                <label htmlFor='ed_time'>Event End Time:</label>
                <input type="datetime-local" name="ed_time" id="ed_time" />
            </div>
            <div className='input_element'>
                <label htmlFor='event_photo'>Event Photo:</label>
                <input type="file" name="event_photo" id="event_photo" />
            </div>
        </form>
    </div>
  )
}

export default EventForm