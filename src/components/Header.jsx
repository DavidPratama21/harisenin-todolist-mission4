import React from 'react'

const Header = () => {
  return (
    // BG
    <div className='bg-[#E3F2FD] shadow-[0_2px_10px_0_rgba(13,71,161,.25)]'>
      {/* Frame */}
      <div 
        className='px-5 py-2 mx-auto flex items-center justify-between
        lg:w-[960px] lg:px-0
        '
      >
        {/* Profile */}
        <div>
          {/* Nama */}
          {/* Jabatan */}
          {/* Foto */}
          <div className='h-12 lg:h-15 aspect-square bg-amber-300 rounded-xl shadow-[0_2px_10px_0_rgba(13,71,161,.25)]'></div>
          {/* <img src="" alt="Profile" /> */}
        </div>
        {/* Title */}
        <h1 className='text-2xl lg:text-5xl font-bold'>TODO LIST</h1>
        {/* Clock */}
        <div className='hidden lg:grid justify-items-end'>
          {/* Day */}
          <p className='font-semibold text-2xl'>Senin</p>
          {/* Date */}
          <p>21 Mei 2025</p>
          {/* Clock */}
          <p>10:45:00</p>
        </div>
      </div>
    </div>
  )
}

export default Header