'use client'
import React, { useEffect, useState, useContext } from 'react'
import { inject, observer } from 'mobx-react';
import store from '@/models/Store';
import Task from './Task';


// export 
// const ViewTask: React.FC<Props> = ({ myStore }) => {
const ViewTask = () => {
    const [tasks, setTasks] = useState<typeof store.todosScheduled>(store.todosScheduled);

    console.log(localStorage.getItem('tasks'))
    console.log(tasks)
    useEffect(() => {
        console.log(localStorage.setItem('tasks', store.toString()))
        setTasks(store.todosScheduled)
    }, [])
    return (
        <div className='Tasks'>
            <div className="view">
                <h1>Scheduled</h1>
                <div id="scheduled" className="list">
                    {
                        tasks.map((task, index) => (
                            !task.taskDiscard && !task.taskCompletion && <Task key={index} task={task} context="schedule"></Task>
                        ))
                    }
                </div>
            </div>
            <div id='tasksDone'>
                <div className="view">
                    <h1>Completed</h1>
                    <div className="completed list">
                        {
                            tasks.map((task, index) => (
                                !task.taskDiscard && task.taskCompletion && <Task key={index} task={task} context="complete"></Task>
                            ))
                        }
                    </div>
                </div>

                <div className="view">
                    <h1>Discarded</h1>
                    <div className="deleted list">
                        {
                            tasks.map((task, index) => (
                                task.taskDiscard && !task.taskCompletion && <Task key={index} task={task} context="discard"></Task>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default observer(ViewTask);
