import React from "react";

const JumlahTodo = () => {
  return (
    <div
      className="w-full px-3 py-2 grid gap-2 justify-items-center rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)]
      lg:w-fit lg:flex lg:gap-3 lg:items-center
      "
    >
      {/* Jumlah Semua */}
      <div
        className="flex gap-1 text-2xl font-bold
        lg:grid lg:justify-items-center lg:items-center lg:gap-0 lg:h-fit
        "
      >
        <h2 className="lg:text-nowrap">Jumlah Todo:</h2>
        <h2 className="lg:text-[32px]">0</h2>
      </div>
      {/* Jumlah Per Priority */}
      <div className="flex gap-2
        lg:gap-3
        "
      >
        {/* Low */}
        <span className="flex gap-2 px-2 py-1 rounded text-low bg-low/25 font-bold
          lg:grid lg:place-content-center lg:justify-items-center h-fit
          "
        >
          <span>Low</span>
          <span>1</span>
        </span>
        {/* Medium */}
        <span className="flex gap-2 px-2 py-1 rounded text-medium bg-medium/25 font-bold
          lg:grid lg:place-content-center lg:justify-items-center h-fit
          "
        >
          <span>Medium</span>
          <span>2</span>
        </span>
        {/* High */}
        <span className="flex gap-2 px-2 py-1 rounded text-high bg-high/25 font-bold
          lg:grid lg:place-content-center lg:justify-items-center h-fit
          "
        >
          <span>High</span>
          <span>3</span>
        </span>
      </div>
    </div>
  );
};

export default JumlahTodo;
