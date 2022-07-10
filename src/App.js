import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Container from './components/Container';

const todoTypes = [
  {
    name: "Important & Urgnet",
    important: true,
    urgent: true
  },
  {
    name: "Important But Not Urgnet",
    important: true,
    urgent: false
  },
  {
    name: "Not Important But Urgnet",
    important: false,
    urgent: true
  },
  {
    name: "Not Important & Not Urgnet",
    important: false,
    urgent: false
  },
]

function App() {
  const handleAdd = (task) =>{
    setItems(old => ([...old, task]))
  }
  const [items, setItems] = useState ([
    {
      name: 'task1',
      important: true,
      urgent: true
    },
    {
      name: 'task2',
      important: true,
      urgent: false
    },
    {
      name: 'task3',
      important: false,
      urgent: true
    },
    {
      name: 'task4',
      important: false,
      urgent: false
    },
  ])
  return (
    <div className="App">
      {
        todoTypes.map((todo, index) =>{
          return(
            <Container 
              key={index}
              classType={todo.name}
              items={items.filter(item => item.important === todo.important && item.urgent === todo.urgent)}
            />
          )
        })
      }
      <AddTodo />
    </div>
  );
}

export default App;
