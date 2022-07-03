import React from "react";


export const ContactPicker = (props) => {
  return (
    <select onChange={props.addContact} name='contacts' id='contacts' defaultValue={'DEFAULT'}>
      <option id='default' key='1' disabled hidden value='DEFAULT'>Please select contact</option>
      {props.contacts.map(contact => {
        return <option key={contact.id} id={contact.id}  value={`${contact.itemOne} ${contact.itemTwo}`}>{contact.itemOne} {contact.itemTwo}</option>
      })}
    </select>
  )
};