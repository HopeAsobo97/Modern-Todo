import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = ({setTasks}) => {
    const [taskData,setTaskData] = useState({
        task: "",
        state: 'todo',
        tags: []
    })

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) =>{
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }


    const handleChange = (e) => {
        const {name, value} = e.target
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData(
            {
                task: "",
                state: 'todo',
                tags: []
            }
        )
    }


  return (
    
    <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskData.task} name='task' onChange={handleChange} className="task-input" placeholder='Enter Your Task'/>
            <div className="task-form-bottom-line">
                <div>
                    <Tag tagName='HTML' selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                    <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                </div>

                <div>
                    <select name='state' value={taskData.state} onChange={handleChange} className="task-status">
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type="submit" className="task-submit">Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
