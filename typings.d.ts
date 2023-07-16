export interface Task { id: number, completed: boolean, taskName: string };
export interface User { uid: number, tasks:Task[] };