import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {

  const addTitle = (e) => {
    props.setTitle(e.target.value);
  }

  const addContact = (e) => {
    props.setContact(e.target.value);
  }

  const addDate = (e) => {
    props.setDate(e.target.value);
  }

  const addTime = (e) => {
    props.setTime(e.target.value);
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-EN")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getTimeNow = (e) => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    return `${hours}:${mins}`;
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='title'>Title</label><input onChange={addTitle} id='title' type='text' value={props.title} required></input>
      <label htmlFor='contacts'>Contact</label>
      <ContactPicker contacts={props.contacts} addContact={addContact} />
      <label htmlFor='date'>Date</label><input onChange={addDate} id='date' type='date' min={getTodayString()} value={props.date} required></input>
      <label htmlFor='time'>Time</label><input onChange={addTime} id='time' type='time' min={props.date === getTodayString() ? getTimeNow() : ''} value={props.time} required></input>
      <input type='submit'></input>
    </form>
  );
};