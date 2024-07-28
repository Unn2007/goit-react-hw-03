import { useState } from 'react'
import {contactsData} from './contactsData'
import Contact from './components/Contact/Contact'

import './App.css'

function App() {
  const [contacts, setContacts] = useState(contactsData)
  const deleteContact = ()=>{}
 

  return (
    <div>
  <h1>Phonebook</h1>
  <Contact data={contactsData[0]} onDelete={deleteContact}/>
  {/* <ContactForm /> */}
  {/* <SearchBox /> */}
  {/* <ContactList /> */}
</div>

  )
}

export default App
