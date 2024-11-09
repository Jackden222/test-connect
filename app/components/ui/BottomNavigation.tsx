import React from 'react'
import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <div className='fixed bottom-0 z-50 w-screen bg-[#8B8B8B]/60 rounded-tr-3xl rounded-tl-3xl px-10 py-4 flex justify-between items-center'>
      <Link rel="stylesheet" href="../../page/Task.tsx">Task</Link>
      <Link rel="stylesheet" href="../../page/Friennds.tsx">Friends</Link>
    </div>
  )
}

export default BottomNavigation