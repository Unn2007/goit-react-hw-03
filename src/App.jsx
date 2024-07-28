import { useState } from 'react'
import {contactsData} from './contactsData'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import { nanoid } from 'nanoid'

import './App.css'

function App() {
  const [contacts, setContacts] = useState(contactsData)
  const [searchField,setSearchField]=useState("")
  const deleteContact = (deletedId)=>{
     setContacts((prevContacts)=>{
      return prevContacts.filter(({id})=>id!==deletedId)

     })
  }

  const visibleContacts=contacts.filter(({name})=>name.toLowerCase().includes(searchField.toLowerCase()))
  const addContact = (nameContact,numberContact) => {
    setContacts((prevState)=>{
      return [...prevState,{id: nanoid(), name:nameContact, number:numberContact }]
    }) 
  }

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm updateContctList={addContact} />
  <SearchBox searchFieldValue={searchField} updateSearch={setSearchField} />
  <ContactList dataList={visibleContacts} onDelete={deleteContact}/>
  
 
 
</div>

  )
}

export default App
