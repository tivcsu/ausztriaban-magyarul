"use client"
import { useState } from 'react';
import "./register.css";
import UserDetails from '@/components/user-details';
import { IUserDetails } from '@/types/user-details.interface';
import { db } from '@/firebase.config';
import { addDoc, collection, getDocs } from 'firebase/firestore';



export default function Register() {
  const [userDetails, setUserDetails] = useState({} as IUserDetails)

  const handleButtonClick = (user: IUserDetails) => {
    setUserDetails({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
      phoneNumber: user.phoneNumber,
      isTermsAccepted: user.isTermsAccepted,
    })
    onRegister()
  }
  const onRegister = async () => {
    try {
      const existingUsers = (await getDocs(collection(db, 'users'))).docs
      const isCurrentUserExisting = existingUsers.some(doc => {
        return doc.data().personId === userDetails.id
      })
      if (!isCurrentUserExisting) {
        const docRef = await addDoc(collection(db, "users"), {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
          personId: userDetails.id,
          phoneNumber: userDetails.phoneNumber,
          isTermsAccepted: userDetails.isTermsAccepted,
        });
        alert('Sikeres regisztráció')
        return
      }
      alert('Ezzel a TAJ-jal már regisztráltak.')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } 
  return (
    <div className='register-page'>
      <div className="registration-wrapper">
        <h1 className="registration__title">Regisztráció</h1>
        <UserDetails buttonText='Regisztráció' onButtonClick={handleButtonClick}/>
      </div>
    </div>
  );
}

