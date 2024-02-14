"use client"
import React, { useCallback, useEffect, useState } from 'react'
import '@/styles/navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [_document, setDocument] = useState<any>()
  const pathName = usePathname()

  useEffect(() => {
    setDocument(document)
  }, [])


  const handleMenuClick = () => {
    const menu = _document.querySelector('.navbar-menu');
    const menuButton = _document.querySelector('.navbar__menu-button');
    if (menu?.classList.contains('show')) {
      menu.classList.remove('show')
      menuButton?.classList.remove('close')
    } else {
      menu?.classList.add('show')
      menuButton?.classList.add('close')
    }
  }

  return (
    <div className="navbar-wrapper with-background">
        <nav className='navbar'>
          <Link href="/" className="navbar-logo">
            <Image className="navbar-logo__image" src="/logo-transparent.png" alt="Ausztriában magyarul logo" width={200} height={200} loading='lazy'/>
          </Link>
          <ul className='navbar-menu'>
            <li className={`navbar-menu__item ${pathName === '/' ? 'active' : ''}`}>
              <Link href="/" onClick={handleMenuClick}>Kezdőlap</Link>
            </li>
            {/*<li className={`navbar-menu__item ${pathName === '/info' ? 'active' : ''}`}>
              <Link href="/info" onClick={handleMenuClick}>Hasznos információk</Link>
            </li>*/}
            <li className={`navbar-menu__item ${pathName === '/register' ? 'active' : ''}`}>
              <Link href="/register" onClick={handleMenuClick}>Regisztráció</Link>
            </li>
          </ul>
          <div className="navbar__menu-button" onClick={handleMenuClick}></div>
        </nav>
      </div>
  )
}

export default Navbar
