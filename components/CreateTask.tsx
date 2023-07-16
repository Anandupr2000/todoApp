'use client'

import React, { useEffect, useState, useContext } from 'react'
import { getSnapshot } from 'mobx-state-tree';
import { Task, Tasks } from '@/models/Task';
import { Task as t } from "@/typings"
import { inject, observer } from 'mobx-react';
import store from '@/models/Store';


// export
const CreateTask: React.FC = () => {
    //  const CreateTask= () => {
    // const [tasks, setTasks] = useState<t[]>([]);
    const [taskName, setTaskName] = useState('');
    // useEffect(() => {
    //     console.log(window.localStorage.getItem('taskHook'))
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    //     store.addTodo(tasks)
    // }, [tasks])

    const handleAddTask = () => {
        store.addTodo(taskName)
        const newTask = Task.create({ taskName });
        console.log(getSnapshot(newTask))
    };
    return (
        <div className='input'>
            {/* using state method is react method for getting content in a component */}
            <input type="text" value={taskName} onChange={(event) => { setTaskName(event.target.value) }}
                name="" placeholder='🖊🖋 Add item..' />
            {/* using spread operator to first break array to its values and then add value of toDo to it */}
            <i onClick={handleAddTask}>ADD</i>
        </div>
    )
}

export default observer(CreateTask);