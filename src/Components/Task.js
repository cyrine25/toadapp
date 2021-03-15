import React, { useState } from 'react'
import EditTask from './EditTask';

const Task = ({item,completeTask,deleteTask,editTask}) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <span className={item.isDone?'lineTh':'text'} >{item.task}</span>
            <button onClick={()=>completeTask(item.id)} >{item.isDone?'Undo':'Complete'}</button>
            <button onClick={()=>deleteTask(item.id)}>Delete</button>
            <button onClick={()=>{handleShow();setId(item.id)}} >Edit</button>
            <EditTask handleClose={handleClose} show={show} editTask={editTask} id={id} />
        </div>
    )
}

export default Task
