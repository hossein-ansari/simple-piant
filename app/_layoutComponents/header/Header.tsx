import React, { useState } from 'react'
import './style.css';
import Tools from '@/app/_components/tools/Tools'
import Colors from '@/app/_components/colors/Colors';
import Size from '@/app/_components/sizes/Size';

export default function Header() {
  return (
    <div className='headerBar'>
      <Tools></Tools>
      <Size></Size>
      <Colors></Colors>
    </div>
  )
}
