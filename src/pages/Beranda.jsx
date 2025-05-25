import React from "react";
import JumlahTodo from "../components/JumlahTodo";
import TambahTodo from "../components/TambahTodo";
import Filter from "../components/Filter";
import ListTodo from "../components/ListTodo";
import DoneTodo from "../components/DoneTodo";




const Beranda = () => {
  return (
    <div className="mx-auto grid justify-items-end px-5 pt-2 mb-10 lg:w-[960px] lg:pt-15">
      {/* Date */}
      <div className="flex lg:hidden">
        <p>Senin</p>
        <p>, 21 Mei 2025</p>
      </div>
      {/* Container */}
      <div className="grid gap-3 w-full lg:gap-5">
        <div className="grid gap-3 lg:flex lg:gap-5">
          {/* <JumlahTodo /> */}
          {/* <JumlahTodo jmlTodoList={todoList}/> */}
          <TambahTodo />
        </div>
        <Filter />
        <div className="grid gap-3 lg:flex lg:gap-5">
          <ListTodo />
          <DoneTodo />
          {/* <ListTodo todoList={todoList}/>
          <DoneTodo todoList={todoList}/> */}
        </div>
      </div>
    </div>
  );
};

export default Beranda;
