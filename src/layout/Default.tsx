import React from 'react'
import { Outlet } from 'react-router-dom';

const Default:React.FC = () => {
  return (
    <main >
      <Outlet/>
    </main>
  )
}

export default Default