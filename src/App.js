import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Container from './components/Container';

const todoTypes = [
  {
    name: "Important & Urgnet",
    class: "half",
    priority: true,
    urgency: true,
    done: false
  },
  {
    name: "Important & Not Urgnet",
    class: "half",
    priority: true,
    urgency: false,
    done: false
  },
  {
    name: "Not Important & Urgnet",
    class: "half",
    priority: false,
    urgency: true,
    done: false
  },
  {
    name: "Not Important & Not Urgnet",
    class: "half",
    priority: false,
    urgency: false,
    done: false
  }
]

function App() {
  const handleAdd = (task) => {
    setItems(old => ([...old, task]))
  }
  const handleDel = (id) => {
    setItems(old => old.filter( i => i.id !== id))
  }
  const handleProperty = (id, item) => {
    setItems(old => old.map(i => i.id === id ? {...i, [item]: !i[item]} : i))
  }
  const [items, setItems] = useState ([
    {
      id: 0,
      name: 'task1',
      priority: true,
      urgency: true,
      done: false,
    },
    {
      id: 1,
      name: 'task2',
      priority: true,
      urgency: false,
      done: false
    },
    {
      id: 2,
      name: 'task3',
      priority: false,
      urgency: true,
      done: false
    },
    {
      id: 3,
      name: 'task4',
      priority: false,
      urgency: false,
      done: false
    },
    {
      id: 4,
      name: 'task5',
      priority: false,
      urgency: true,
      done: true
    }
  ])
  return (
    <div className="App">
      <AddTodo handleAdd = {handleAdd} />
      {
        todoTypes.map((todo, index) =>{
          return(
              <Container
                name = {todo.name}
                key = {index}
                classType = {todo.class}
                handleDel={handleDel}
                handleProperty={handleProperty}
                items = {items.filter(item => item.done === todo.done && item.priority === todo.priority && item.urgency === todo.urgency)}
              />
          )
        })
      }
        <Container
          name = "Done"
          classType = "done"
          handleDel={handleDel}
          handleProperty={handleProperty}
          items = {items.filter(item => item.done === true)}
        />
    </div>
  );
}

export default App;
