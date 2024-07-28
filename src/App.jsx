import { useState } from 'react'
import {contactsData} from './contactsData'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

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
 

  return (
    <div>
  <h1>Phonebook</h1>
  <SearchBox searchFieldValue={searchField} updateSearch={setSearchField} />
  <ContactList dataList={visibleContacts} onDelete={deleteContact}/>
  {/* <ContactForm /> */}
 
 
</div>

  )
}

export default App
