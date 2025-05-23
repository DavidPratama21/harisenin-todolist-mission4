import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = create(
  persist(
    (set, get) => ({
      todoList: [
        {
          desc: "Belajar React",
          priority: "high",
          dueDate: "2025-05-24",
          status: "todo",
        },
      ],
      doneTodoList: [],
      addTodoList: (desc, priority, dueDate) => {
        const newTodo = {
          desc,
          priority,
          dueDate,
          status: "todo",
        };
        set((state) => ({
          todoList: [newTodo, ...state.todoList],
        }));
      },
      setDone: (index) => {
        set((state) => {
          const doneTodo = {
            ...state.todoList[index],
            status: "done",
          };
          return {
            todoList: state.todoList.filter((_, i) => i !== index),
            doneTodoList: [...state.doneTodoList, doneTodo],
          };
        });
      },
      // editTodoList: (index, data) => {
      //   const updateList = [...get().todoList];
      //   updateList[index] = {
      //     ...updateList[index],
      //     ...data
      //   };
      //   set({ todoList: updateList });
      // },
      deleteTodoList: (indexToDelete) => {
        const updateList = get().todoList.filter(
          (_, index) => index !== indexToDelete
        );
        set({ todoList: updateList });
      },
      clearAllTodoList: () =>
        set(() => ({
          todoList: [],
        })),
      deleteDoneTodoList: (index) =>
        set((state) => ({
          doneTodoList: state.doneTodoList.filter((_, i) => i !== index),
        })),
      clearAllDoneTodo: () =>
        set(() => ({
          doneTodoList: [],
        })),
    }),
    {
      name: "todo-storage",
      getStorage: () => localStorage,
    }
  )
);

export default store;
