import React, { useState } from "react";
import { ContactList,ContactManager } from "./components";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {id:"1", name: "Pippi",phone:"0123456789",email:"pippi@catworld.co.uk" },
    {id:"2", name: "Cat",phone:"07593539374",email:"cat@happypurring.co.uk" },
    {id:"3",name: "Felina",phone:"0964827485",email:"felina@cathouse.co.uk" },
  ]);
  contacts.sort();
  console.log(contacts);
  const addContacts = (data)=>{
    setContacts(
      contacts.filter((contact)=>contact.name !==data.name).concat(data),)
  }
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactManager onSubmit={addContacts} />
      <ContactList listOfContacts={contacts} />
      {/* {contacts.map(
        (elem)=>(<div>{elem.name}</div>))} */}
    </div>
  );
}

export default App;
