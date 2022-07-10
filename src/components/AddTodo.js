import { useState } from 'react'

const AddTodo = () => {
    const [name, setName] = useState('')
    const [important, setImportant] = useState(false)
    const [urgent, setUrgent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <label htmlFor="name">Task</label>
            <input onChange={e => setName(e.target.value)} value={name} name="name" id="name" type="text" />
            <br />
            <label htmlFor="important">Important</label>
            <input onChange={e => setImportant(e.target.checked)} checked={important} name="important" id="important" type="checkbox" />
            <br />
            <label htmlFor="urgent">Urgent</label>
            <input onChange={e => setUrgent(e.target.checked)} checked={urgent} name="urgent" id="urgent" type="checkbox" />
            <br />
            <input id="submit" type="submit" value="Add"/>
        </form>
    )
}

export default AddTodo