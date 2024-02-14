"use client"
import AboutUs from '@/components/about-us';
import Contact from '@/components/contact';
import Header from '@/components/header';
import SectionItem from '@/components/section-item';
import { sectionItems } from '@/constants/section-items';
import { useEffect, useState } from 'react';

export default function Home() {
  const [_document, setDocument] = useState<any>()
  const [_window, setWindow] = useState<any>()

  useEffect(() => {
    setDocument(document)
    setWindow(window)
  }, [])

  const handleLinkClick = () => {
    const el = _document.getElementById('contact')
    if (el) {
      _window.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  }
  return (
    <div className='home'>
      <Header></Header>
      <AboutUs></AboutUs>
      {sectionItems.map((item, index) => (
        <SectionItem 
          key={index}
          title={item.title}
          details={item.details}
          imageScr={item.imageScr}
          isImageRightAligned={index %2 !== 0}
          linkText={item.linkText}
          onLinkClick={handleLinkClick}
        />
      ))}
      <Contact></Contact>
    </div>
  );
}

