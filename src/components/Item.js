import { TaskAlt, Star, Bolt, Delete } from '@mui/icons-material';

const Item = ({ task, handleDel, handleProperty}) => {
    return ( 
        <div className='task'>
            <div className='task-header' id={task.id}>
                <div className='task-title' onClick={() => handleProperty(task.id, 'done')} style={ {textDecoration: task.done && 'line-through'} }>
                    <TaskAlt style={{marginRight: 10}} color={task.done ? 'primary' : 'disabled'} />{ task.name }
                </div>  
                <div className='actions'>
                    <div onClick={() => handleProperty(task.id, 'urgency')}> <Bolt color={task.urgency ? 'primary' : 'disabled'} /></div>
                    <div onClick={() => handleProperty(task.id, 'priority')}> <Star color={task.priority ? 'primary' : 'disabled'} /></div>
                    <div onClick={() => handleDel(task.id)}> <Delete color="primary" /> </div>
                </div>
            </div>
        </div>
     );
}

export default Item;