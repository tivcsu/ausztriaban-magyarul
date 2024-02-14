"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/styles/contact.css'
import UserDetails from './user-details'
import { IUserDetails } from '@/types/user-details.interface'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase.config';



const Contact = () => {
  const [userDetails, setUserDetails] = useState({} as IUserDetails)
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [message, setMessage] = useState('')

  const handleButtonClick = (user: IUserDetails) => {
    setUserDetails({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
      phoneNumber: user.phoneNumber,
      isTermsAccepted: user.isTermsAccepted,
    })
    setIsSendingMessage(true)
  }
  useEffect(() => {
    if (isSendingMessage) {
      sendMessage()
      setIsSendingMessage(false)
    }
  },[isSendingMessage])

  const sendMessage = async () => {
    try {
      const existingUsers = (await getDocs(collection(db, 'users'))).docs
      const isCurrentUserExisting = existingUsers.some(doc => {
        return doc.data().personId.toLowerCase() === userDetails.id.toLowerCase()
      })
      if (!isCurrentUserExisting) {
        const docRef = await addDoc(collection(db, "users"), {
          firstName: userDetails.firstName.toUpperCase(),
          lastName: userDetails.lastName.toUpperCase(),
          email: userDetails.email.toUpperCase(),
          personId: userDetails.id,
          phoneNumber: userDetails.phoneNumber,
          isTermsAccepted: userDetails.isTermsAccepted,
        });
      } 
      const docRef = await addDoc(collection(db, "messages"), {
        message: message,
        personId: userDetails.id,
        date: new Date()
      });
      alert('Üzenet elküldve');
      setMessage('')
    } catch (e) {
      alert('Nem sikerült elküldeni az üzenetet, próbálja újra');
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className='contact' id='contact'>
      <div className="contact-details">
        <div className="contact__decor-clip">
          <Image src={'/svgs/attach.svg'} alt='Ausztriaban magyarul elérhetőségek' width={60} height={60}></Image>
        </div>
        <div className="contact-item">
          <div className="contact-item__icon">
            <Image src={'/svgs/phone.svg'} alt='Ausztriaban magyarul telefon: +43 660 530 7701' width={20} height={20}></Image>
          </div>
          <p className="contact-item__text">+43 660 530 7701</p>
        </div>
        <div className="contact-item">
          <div className="contact-item__icon">
            <Image src={'/svgs/email.svg'} alt='Ausztriaban magyarul email: ausztriabanmagyarul@gmail.com' width={20} height={20}></Image>
          </div>
          <p className="contact-item__text">ausztriabanmagyarul@gmail.com</p>
        </div>
        <div className="contact-item">
          <div className="contact-item__icon">
            <Image src={'/svgs/web.svg'} alt='Ausztriaban magyarul web: ausztriabanmagyarul.at' width={20} height={20}></Image>
          </div>
          <p className="contact-item__text">ausztriabanmagyarul.at</p>
        </div>
        <div className="contact-item">
          <div className="contact-item__icon">
            <Image src={'/svgs/location.svg'} alt='Ausztriaban magyarul cím: 8421 Schwarzautal, Wolfsberg 8' width={20} height={20}></Image>
          </div>
          <p className="contact-item__text">8421 Schwarzautal, Wolfsberg 8</p>
        </div>
      </div>
      <div className="get-in-touch">
        <h1 className="get-in-touch__title">Miben segíthetünk?</h1>
        <div className="get-in-touch__message">
          <textarea placeholder='Foglalja össze pár mondatban, hogy miben lehetünk a segítségére!' onChange={(e) => setMessage(e.target.value)} value={message}/>
        </div>
        <UserDetails buttonText='Küldés' onButtonClick={handleButtonClick}/>
      </div>
    </div>
  )
}

export default Contact
