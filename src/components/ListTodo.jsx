// import { useState} from 'react'
import { Trash2, Square, SquareCheck} from 'lucide-react';
import Todo from '../components/Todo';

const ListTodo = () => {
  // const [click, setClick] = useState(true)

  // const handleClick = () => {
  //   setClick(!click);
  // }

  return (
    <div className='p-2 grid w-full rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)]'>
      {/* Title & Pick todo to delete */}
      <div className='grid items-center grid-cols-[auto_2fr_1fr_1fr_auto] gap-1 text-[20px]'>
        {/* Pick todo */}
        <Square className='col-auto'/>
        <h3 className='font-bold'>Todo</h3>
        <h3 className='font-bold'>Priority</h3>
        <h3 className='font-bold'>Due date</h3>
        {/* Delete BTN */}
        <Trash2 color='#757575'/>
      </div>


      {/* List todo */}
      <div className='grid gap-1 w-full text-sm'>
        <Todo task="Study react.js lalu mandi makan tidur" bgPrio={'high'} priority={'High'} dueDate={'25 Mei 2025'}/>
        <Todo task="Ngepel kamar" bgPrio={'medium'} priority={'Medium'} dueDate={'27 Mei 2025'}/>
        <Todo task="Mancing" bgPrio={'low'} priority={'Low'} dueDate={'1 Januari 2027'}/>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    // <div className='p-2 grid w-full rounded-lg bg-secondary shadow-[0_1px_4px_rgba(13,71,161,.25)]'>
    //   {/* Title & Pick todo to delete */}
    //   <div className='flex'>
    //     {/* Title & pick todo */}
    //     <div className='flex w-full gap-1 items-center'>
    //       {/* Pick todo */}
    //       {/* <button onClick={handleClick}>
    //         {click ? <Square strokeWidth={1} /> : <SquareCheck strokeWidth={1} />}
    //       </button> */}
    //       <h3 className='font-bold'>Todo</h3>
    //       <h3 className='font-bold'>Priority</h3>
    //       <h3 className='font-bold'>Due date</h3>
          
    //     </div>

    //     {/* Delete BTN */}
    //     <Trash2 color='#757575'/>
    //   </div>

    //   {/* List todo */}
    //   <div className='grid gap-1 w-full text-sm'>
    //     <Todo task="Study react.js" bgPrio={'high'} priority={'High'} dueDate={'25 Mei 2025'}/>
    //     <Todo task="Ngepel kamar" bgPrio={'medium'} priority={'Medium'} dueDate={'27 Mei 2025'}/>
    //     <Todo task="Mancing" bgPrio={'low'} priority={'Low'} dueDate={'1 Januari 2027'}/>
    //   </div>
    // </div>
  )
}

export default ListTodo