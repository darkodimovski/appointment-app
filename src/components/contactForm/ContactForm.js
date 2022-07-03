import React from "react";

export const ContactForm = (props) => {

  const addFirst = (e) => {
    props.setFirstName(e.target.value)
  }

  const addLast = (e) => {
    props.setLastName(e.target.value)
  }

  const addPhone = (e) => {
    props.setPhone(e.target.value)
  }

  const addEmail = (e) => {
    props.setEmail(e.target.value)
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='name'>First Name</label>
      <input onChange={addFirst}  id='name' type='text' value={props.firstName} required pattern='^[a-zA-Z\s]+$' title='Must contain letters and spaces only'></input>
      <label htmlFor='name'>Last Name</label>
      <input onChange={addLast}  id='name' type='text' value={props.lastName} required pattern='^[a-zA-Z\s]+$' title='Must contain letters and spaces only'></input>
      <label htmlFor='phone'>Phone</label>
      <input onChange={addPhone} id='phone' type='text' value={props.phone} required pattern='\d{11}' title='Must contain 11 digits'></input>
      <label htmlFor='email'>Email</label>
      <input onChange={addEmail} id='email' type='email' value={props.email} required></input>
      <input type='submit'></input>
    </form>
  );
};
