import React from "react";
import { Trash2, Square, SquareCheck } from "lucide-react";
import Todo from "../components/Todo";

import store from "../store/todo";

const DoneTodo = () => {
  const doneTodos = store((state) => state.doneTodoList);
  const deleteDoneTodo = store((state) => state.deleteDoneTodo)
  const clearDoneTodo = store((state) => state.clearAllDoneTodo)

  return (
    <div className="p-2 grid gap-3 w-full rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)]">
      {/* Title & Pick done todo to delete */}
      <div className="flex">
        {/* Title & pick todo */}
        <div className="flex w-full gap-1 items-center">
          {/* Pick todo */}
          {/* <button onClick={handleClick}>
            {click ? <Square strokeWidth={1} /> : <SquareCheck strokeWidth={1} />}
          </button> */}
          <h3 className="font-bold">Done Todolist</h3>
        </div>
        {/* Delete BTN */}
        <button onClick={clearDoneTodo}>
          <Trash2 color="#757575" />
        </button>
      </div>
      {/* Done Todolist */}
      <div className="grid gap-1 w-full text-sm">
        {doneTodos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => deleteDoneTodo(index)}
            onDone= {() => {}}
          />
        ))}
        
        
      </div>
    </div>
  );
};

export default DoneTodo;
