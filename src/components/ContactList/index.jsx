import React from "react";
import './ContactList.css';
import {Contact} from '..';

const ContactList = ({ className, listOfContacts =[] }) => (
  <table className={`contact-list-base${className ? `${className}` : ""}`}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {listOfContacts.map((contact) => (
          <Contact {...contact}/>
      ))}
    </tbody>
  </table>
);

export default ContactList;
