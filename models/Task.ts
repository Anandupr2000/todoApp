import { types } from "mobx-state-tree"

export const Task = types.model({
    id: Date.now(),
    taskName: "",
    completed: false,
}).actions(self => ({
    setTaskName(newTaskName: string) {
        self.taskName = newTaskName
    },
    toggleTaskStatus() {
        self.completed = !self.completed
    }
}))

export const Tasks = types.model({
    tasks: types.array(Task),
}).actions(self=>({
    setNewTasks(nTasks: typeof self.tasks){
        self.tasks = nTasks;
    }
}))