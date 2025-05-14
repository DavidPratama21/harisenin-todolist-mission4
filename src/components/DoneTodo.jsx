import React from "react";
import { Trash2, Square, SquareCheck } from "lucide-react";
import Todo from "../components/Todo";

const DoneTodo = () => {
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
        <Trash2 color="#757575" />
      </div>
      {/* Done Todolist */}
      <div className="grid gap-1 w-full text-sm">
        <Todo
          task="Study react.js"
          priority={"High"}
          dueDate={"25 Mei 2025"}
          done={"done"}
        />
        <Todo
          task="Ngepel kamar"
          priority={"Medium"}
          dueDate={"27 Mei 2025"}
          done={"done"}
        />
        <Todo
          task="Mancing"
          priority={"Low"}
          dueDate={"1 Januari 2027"}
          done={"done"}
        />
      </div>
    </div>
  );
};

export default DoneTodo;
