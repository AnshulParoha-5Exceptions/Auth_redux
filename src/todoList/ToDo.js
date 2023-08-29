import React, { useState } from 'react';
import './todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, completeTask } from './todoSlice';


const ToDo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todo.tasks);

    const handleAddTask = () => {
        if (input.trim() === '') return;

        const newTask = {
            date: new Date().toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
            task: input,
        };

        dispatch(addTask(newTask));
        setInput('');
    };

    const handleDeleteTask = (index) => {
        dispatch(deleteTask(index));
    };

    const handleCompleteTask = (index) => {
        dispatch(completeTask(index)); // Dispatch the new action
    }

    return (
        <div>
            <center>
                <input
                    type="text"
                    name='task'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleAddTask}>Add Task</button>
                <br />
                <br />
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Task Date</th>
                            <th>Task</th>
                            <th>Delete</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className={task.completed ? 'completed-task' : ''}>
                                <td>{task.date}</td>
                                <td className={task.completed ? 'completed' : ''}>{task.task}</td>
                                <td>
                                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                                </td>
                                <td>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleCompleteTask(index)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default ToDo;
