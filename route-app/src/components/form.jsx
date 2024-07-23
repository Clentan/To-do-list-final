import React, { useState, useEffect } from 'react';
import './form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function FormSubmit(e) {
    e.preventDefault();
    if (!name || !surname) return;

    const newItem = { id: Date.now(), name, surname, packed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setName('');
    setSurname('');
  }

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.surname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <form>
        <input
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={() => setSearch('')}>Clear Search</button>
      </form>
      <form onSubmit={FormSubmit}>
        <label>ITEM: NAME:</label>
        <input
          type='text'
          placeholder='e.g: Banana'
          value={surname}
          onChange={(e) => setSurname(e.target.value)} 
        />
        <label>Description of your item:</label>
        <input
          type='text'
          placeholder='e.g: yellow in color'
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">ADD::😋</button>
      </form>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.surname} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
