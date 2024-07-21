
import React, { useState } from 'react';
// import Style from './form.module.css';


// prevent page submission default✔️
//Take control of the inout elsments so rhat you can chnange them the way you want them to be✔️
//Now take care of the form and and render the element✖️
//How to do i want the form to look like❌
//Store my set of state in an array..push using using an array✔️
//pasing the button to another component.✔️

export default function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [credentials, setCredentials] = useState('');
  // const [items, setItems] = useState([]);//this it naturally create an array
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });




  function FormSubmit(e) {
    e.preventDefault();
    if (!name || !surname || !credentials) return;
    const newItem = { id: Date.now(), name, surname, credentials, packed: false };

    const newItems = [...items, newItem];//adding
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));

    setName('');
    setSurname('');
    setCredentials('');
    console.log(newItems)
  }

  // function FormSubmit(e) {
  //   e.preventDefault();
  //   setName('');
  //   setSurname("");
  //   setCredentials("");
  //   HandleAddSubmit(HandleAddSubmit);
  //   if (!name && surname) return;
  //   const NewArray = { name, surname, packed: false };
  //   console.log(NewArray);
  //
  //
  // }
  // function HandleAddSubmit(item) {
  //   setItems((items) => [...items, item]);
  //   console.log(items);
  // }
  //
  return (
    <div >
      <form onSubmit={FormSubmit}>
        <label>Surname😊:</label>
        <input
          type='text'
          placeholder='CHAUKE'
          value={surname}
          onChange={(e) => setSurname(e.target.value)} />

        <label>Name😒:</label>
        <input
          type='text'
          placeholder='CHAUKE'
          value={name}
          onChange={(e) => setName(e.target.value)} />


        <label>Credentials😍:</label>
        <input
          type='text'
          placeholder='CHAUKE'
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)} />


        <button type="submit"
          value={items}
          onChange={(e) => (setItems(e.target.value))}
        >Submit::✔️</button>
      </form>
    </div>
  );
}