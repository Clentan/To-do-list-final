import React, { useEffect, useState } from 'react';
import Styles from './packlist.module.css';

export default function Packlist() {
  const [items, setItems] = useState([]);
  const [editedItem, setEditedItem] = useState({});

  // Load items from localStorage when component mounts
  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Handle deletion of an item
  const handleDeleteItems = (itemIdToRemove) => {
    const updatedItems = items.filter(item => item.id !== itemIdToRemove);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  // Handle completion toggle
  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId
        ? { ...item, completed: !item.completed }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  // Handle priority change
  const handlePriorityChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle checkbox to toggle edit mode
  const handleEditClick = (item) => {
    setEditedItem({ ...item });
  };

  // Handle change in edited item fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle saving the edited item
  const handleSaveItem = () => {
    const updatedItems = items.map(item =>
      item.id === editedItem.id
        ? { ...item, name: editedItem.name, surname: editedItem.surname, priority: editedItem.priority }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setEditedItem({});


  };

  // Get CSS class for priority
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return Styles.highPriority;
      case 'Medium':
        return Styles.mediumPriority;
      case 'Low':
        return Styles.lowPriority;
      default:
        return '';
    }
  };

  return (
    <div className={Styles.Packlist}>
      <h1>ITEMS FOR TO-DO-LIST</h1>
     
      <input tyoe='tex' ></input>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className={getPriorityClass(item.priority)}>
              <input
                type="checkbox"
                checked={item.completed || false}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {editedItem.id === item.id ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editedItem.name || ''}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="surname"
                    value={editedItem.surname || ''}
                    onChange={handleChange}
                  />
                  <select
                    name="priority"
                    value={editedItem.priority || 'Medium'}
                    onChange={handlePriorityChange}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <button onClick={handleSaveItem}>Save</button>
                </div>
              ) : (
                <div>
                  Name: {item.name} | Surname: {item.surname} | Priority: {item.priority}
                  <button onClick={() => handleEditClick(item)}>✏️</button>
                  <button onClick={() => handleDeleteItems(item.id)}>❌</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}
