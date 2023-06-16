import { useState } from 'react'
import { Book } from "./components/Book/Book";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import './App.css'

const App = (props) => {

  const [phoneBook, setPhoneBook] = useState(props.phoneBook);
  const [valueInput, setValueInput] = useState('') 
  const [phoneVallue, setPhoneValue] = useState('') 
  const [filterBook, setFilterBook] = useState(true)

  const handleFilter = () => {
    setFilterBook( () => !filterBook )
  }

  const sendData = (event) => {

    event.preventDefault()

    const newData = {
      id: phoneBook.length + 1 ,
      name: valueInput,
      phoneNumer:  phoneVallue,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 ,
    }

    setPhoneBook([...phoneBook, newData])
    setValueInput('')
    setPhoneValue('')
  }

  const handleValueInput = (event) => {
    const addNewNote = event.target.value;
    setValueInput(addNewNote)
  }

  const handlePhoneValue = (event) => {
    const newPhoneValue = event.target.value;
    setPhoneValue(newPhoneValue)
  }

  const textButtonImportant = filterBook ? 'Contactos importantes' :  'Todas los contactos';
  
  return (
    <>
      <h1>Phone Book</h1>

       <Form handleSubmit={sendData} valueInput={handleValueInput} valueToSendName={valueInput} phoneValue={handlePhoneValue} valueToSenPhone={phoneVallue}  />

        <Button 
          handleEventClick={handleFilter}
          textValue={textButtonImportant}
        />
      {
        phoneBook
        .filter( (item) =>{
          if (filterBook === true) return true 
          return item.important === true 
        } )
        .map( item => (
          <Book key={item.id} {...item} />
        ) )
      }
    </>
  )
}

export default App
