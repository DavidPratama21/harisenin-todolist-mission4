import React from 'react'
import  JumlahTodo from '../components/JumlahTodo'
import  TambahTodo from '../components/TambahTodo'
import  Filter from '../components/Filter'
import  ListTodo from '../components/ListTodo'
import  DoneTodo from '../components/DoneTodo'

const Beranda = () => {
  return (
    <div className=''>
      {/* Date */}
      <div></div>
      {/* Container */}
      <div>
        <JumlahTodo />
        <TambahTodo />
        <Filter/>
        <ListTodo/>
        <DoneTodo/>
      </div>
    </div>
  )
}

export default Beranda