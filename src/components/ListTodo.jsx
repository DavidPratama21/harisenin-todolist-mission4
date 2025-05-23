import { useState, useEffect } from "react";
import { Trash2, Square, SquareCheck, X, List } from "lucide-react";
import Todo from "../components/Todo";

import store from "../store/todo";

const ListTodo = () => {
  const todoList = store((state) => state.todoList);
  const deleteTodo = store((state) => state.deleteTodoList);
  const clearTodo = store((state) => state.clearAllTodoList);
  const setDone = store((state) => state.setDone);

  return (
    <div className="p-2 grid w-full rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)] gap-1">
      {/* Title & Pick todo to delete */}
      <div className="grid items-center grid-cols-[auto_2fr_1fr_1fr_auto] gap-1">
        {/* Row 1 Title */}
        {/* set done */}
        <button>
          <Square className="col-auto" />
        </button>
        <h3 className="font-bold col-span-3 lg:col-span-1">Todo</h3>
        <h3 className="font-bold hidden lg:inline">Priority</h3>
        <h3 className="font-bold hidden lg:inline">Due date</h3>
        {/* delete all */}
        <button onClick={clearTodo}>
          <Trash2 color="#757575" />
        </button>
      </div>

      {todoList.map((todo, index) => (
        <Todo todo={todo} key={index} onDelete={() => deleteTodo(index)} setDone={setDone}/>
        // return console.log(todo)
      ))}
    </div>
  );
};

export default ListTodo;
