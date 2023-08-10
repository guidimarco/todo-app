import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteItem(itemId) {
      this.todoList = this.todoList.filter((obj) => {
        return obj.id !== itemId
      })
    }
  }
})
