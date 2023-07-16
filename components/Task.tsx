import store from '@/models/Store'
import { observer } from 'mobx-react'
import React, { useState } from 'react'

type props = { task: typeof store.todosScheduled[0], context: string }

const Task = ({ task, context }: props) => {
    const [first, setfirst] = useState('')
    const handleDiscard = () => {
        if (context == "discard") task.toggleCompletion()
        else task.toggleDiscard()
    }
    return (
        <div className='Task'>
            {
                context == "schedule" &&
                <input type="checkbox" name="" id="" checked={task.taskCompletion} onChange={task.toggleCompletion} />
            }
            <span>{task.taskName}</span>
            <button onClick={handleDiscard} type="button">+</button>
        </div>
    )
}

export default observer(Task)