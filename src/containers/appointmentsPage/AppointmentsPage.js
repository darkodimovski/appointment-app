import React from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { useState } from "react";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [ title, setTitle ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if(props.appointments && props.appointments.filter(app => {
      return app.itemThree === date && app.itemFour === time;
    }).length > 0) {
      alert('There is already an appointment booked for this day/time!');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      itemOneTitle: title,
      itemTwo: contact,
      itemThree: date.split('-').reverse().join('-'),
      itemFour: time
    }

    props.setAppointments((prev) => [newAppointment, ...prev]);
    clearForm()
   
  };

  const clearForm = () => {
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  }

  const removeItem = (idToRemove) => {
    props.setAppointments(prev => (prev.filter(item => item.id !== idToRemove)));
    localStorage.setItem('appointments', JSON.stringify(props.appointments))
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          contacts={props.contacts}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList removeItem={removeItem} data={props.appointments} />
      </section>
    </div>
  );
};