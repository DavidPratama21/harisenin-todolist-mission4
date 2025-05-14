import React from "react";
import { CalendarDays } from "lucide-react";

const TambahTodo = () => {
  return (
    <div className="w-full text-sm grid gap-2 py-2 px-3 rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)]">
      <textarea type="text" placeholder="Add Todo..." />
      <div className="grid gap-2
        lg:flex
        "
      >
        {/* Pick priority */}
        <div className="flex gap-2 text-done font-bold">
          <span className="px-2 py-1 rounded bg-done/25 hover:bg-low/25 hover:text-low">Low</span>
          <span className="px-2 py-1 rounded bg-done/25 hover:bg-medium/25 hover:text-medium">Medium</span>
          <span className="px-2 py-1 rounded bg-done/25 hover:bg-high/25 hover:text-high">High</span>
        </div>
        {/* Set due date & Submit BTN */}
        <div className="flex justify-between text-done lg:w-full">
          {/* Set due date */}
          <button className="flex gap-1 items-center">
            <CalendarDays />
            <p>Set due date</p>
          </button>
          {/* Submit BTN */}
          <button className="px-2 py-1 bg-primary rounded font-bold text-secondary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahTodo;
