"use client"
import React from 'react'
import Image from 'next/image'
import '@/styles/section-item.css'

interface IProps {
  title: string
  details: string[]
  linkText: string
  imageScr: string
  isImageRightAligned: boolean
  onLinkClick: () => void
}

const SectionItem = ({
  title,
  details,
  linkText,
  imageScr,
  isImageRightAligned,
  onLinkClick
}: IProps) => {
  return (
    <div className={`section-item ${isImageRightAligned ? 'image-on-right' : ''}`}>
      <div className="section-item__image-wrapper">
        <Image className='section-item-image' src={imageScr} width={1000} height={1000} alt='Ausztriában magyarul - title' loading='lazy'></Image>
        <div className="section-item__image-bg"></div>
        <div className="section-item__image-bg-blur" style={{backgroundImage: `url(${imageScr})`}}></div>
      </div>
      <div className="section-item__text-wrapper">
        <div className="section-item__title">{title}</div>
        {details.map(detail => (
          <div key={detail} className="section-item__detail">{detail}</div>
        ))}
        
        <div className="section-item__link-row">
          <a className="section-item__link" onClick={onLinkClick}>{linkText}</a>
          <div className="section-item__link-line"></div>
        </div>
      </div>
    </div>
  )
}

export default SectionItem
