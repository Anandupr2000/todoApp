"use client"
import { types } from 'mobx-state-tree';

const getDate = () => {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

const Todo = types.model({
  taskName: "",
  taskDate: getDate(),
  taskCompletion: false,
  taskDiscard:false
})
  .actions(self => {
    function setName(newName: string) {
      self.taskName = newName;
    }

    function toggleCompletion() {
      self.taskCompletion = !self.taskCompletion; 
    }

    function toggleDiscard() {
      self.taskDiscard = !self.taskDiscard; 
    }

    return { setName, toggleCompletion, toggleDiscard};
  });

const User = types.model({
  name: types.optional(types.string, "")
});

const RootStore = types.model({
  users: types.map(User),
  todos: types.array(Todo),
})
  .actions(self => {
    function addTodo(name: string) {
      self.todos.push(Todo.create({ taskName: name }));
    }

    return { addTodo };
  });

const store = RootStore.create({
  users: {},
  todos: []
});
export default store;
