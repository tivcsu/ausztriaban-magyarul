"use client"
import React, { useEffect, useState } from 'react'
import '@/styles/header.css'
import Button from './button'
import Image from 'next/image'

const Header = () => {
  const [_document, setDocument] = useState<any>()
  const [_window, setWindow] = useState<any>()

  useEffect(() => {
    setDocument(document)
    setWindow(window)
  }, [])

  const handleButtonClick = () => {
    const el = _document.getElementById('contact')
    if (el) {
      _window.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  }
  return (
    <div className='header'>
      <Image className="header-decor-image top-left" src="/images/austria-flag.png" alt="Austria flag" width={200} height={200} loading='lazy'/>
      <Image className="header-decor-image bottom-right" src="/images/hungary-flag.png" alt="Hungary flag" width={200} height={200} loading='lazy'/>
      <div className="header__content">
        <h1 className="header__label">
          <p>Áthidaljuk a nyelvi akadályokat, megteremtjük </p>
          <div className='text-border-decoration'>a kapcsolatot.</div>
        </h1>
        <div className="button-wrapper">
          <Image className="button-decor top-left" src="/images/button-decor.png" alt="decor" width={26} height={22} loading='lazy'/>
          <Button onButtonClick={handleButtonClick}>Kapcsolatfelvétel</Button>
          <Image className="button-decor bottom-right" src="/images/button-decor.png" alt="decor" width={26} height={22} loading='lazy'/>
        </div>
        <div className="header__secondary-label">Tolmácsolás, fordítás, nyelvi segítség ügyintézéshez</div>
      </div>
    </div>
  )
}

export default Header
