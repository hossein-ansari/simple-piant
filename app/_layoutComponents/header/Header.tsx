import React, { useState } from 'react'
import './style.css';
import Tools from '@/app/_components/tools/Tools'
import Colors from '@/app/_components/colors/Colors';
export default function Header() {
  return (
    <div className='headerBar'>
      <Tools></Tools>
      <Colors></Colors>
    </div>
  )
}
