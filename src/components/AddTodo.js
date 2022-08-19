import { useState } from 'react'
import { v4 as uuid } from 'uuid';

const AddTodo = ({ handleAdd }) => {
    const [name, setName] = useState('')
    const [important, setImportant] = useState(false)
    const [urgent, setUrgent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const unique_id = uuid();
        handleAdd({id: unique_id, name: name, priority: important, urgency: urgent, done: false})
    }
    return (
        <div className="container">
            
            <form className="addtask" onSubmit={handleSubmit}>
                <fieldset>
                    <input onChange={e => setName(e.target.value)} value={name} name="name" id="name" type="text" />
                </fieldset>
                <fieldset> 
                    <div>
                        <input onChange={e => setImportant(e.target.checked)} checked={important} name="important" id="important" type="checkbox" />
                        <label htmlFor="important">{ ' ' }Important</label>
                    </div>
                    <div>
                        <input onChange={e => setUrgent(e.target.checked)} checked={urgent} name="urgent" id="urgent" type="checkbox" />
                        <label htmlFor="urgent">{ ' ' }Urgent</label>
                    </div>
                </fieldset>
                <fieldset> 
                    <input id="submit" type="submit" value="Add"/>
                </fieldset>
            </form>
        </div>
    )
}

export default AddTodo