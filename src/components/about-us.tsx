"use client"

import React from 'react'
import Image from 'next/image'
import '@/styles/about-us.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="about-us__image-wrapper">
        <Image className="about-us-image" src="/images/about-us.png" alt="Ausztriában magyarul" width={1000} height={1000} loading='lazy'></Image>
      </div>
      <div className='about-us-wrapper'>
        <h2 className="about-us__title">Rólunk</h2>
        <div className="about-us__text">
          Mi vagyunk az Ausztriában magyarul, és szenvedélyünk és elkötelezettségünk a nyelvek iránt arra ösztönöz bennünket, hogy a legjobb nyelvi megoldásokat kínáljuk ügyfeleinknek. Fordító- és tolmácsolási szolgáltatásainkkal olyan hídat építünk, amely lehetővé teszi az ügyintézést, mindezt a lehető leghatékonyabban és pontosabban.
          <br />
          <br />
          Specializációnk a Biztosítással kapcsolatos ügyek, Családi ellátások, Irodai szolgáltatások, Hivatali és Banki ügyek területére összpontosul. Minden egyes szó, amit fordítunk, és minden egyes mondat, amit tolmácsolunk, az ügyfeleink igényeit és szükségleteit szolgálja. Széleskörű tapasztalatunk és szakértelmünk révén biztosítjuk, hogy nyelvi akadályok ne álljanak ügyeik gyors és hatékony intézése útjába.
        </div>
      </div>
    </div>
  )
}

export default AboutUs
