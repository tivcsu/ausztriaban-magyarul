"use client"

import React from 'react'
import '@/styles/button.css'

interface IProps {
  children: React.ReactNode
  isPrimary?: boolean,
  isOutline?: boolean,
  onButtonClick: () => void
}
const Button = ({
    children,
    isPrimary = true,
    isOutline = false,
    onButtonClick
}: IProps) => {
  return (
    <div className='btn-wrapper' onClick={onButtonClick}>
      <button className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} ${isOutline ? 'btn-outline' : ''}`}>
        {children}
      </button>
      <div className="btn-shadow"></div>
    </div>
  )
}

export default Button
