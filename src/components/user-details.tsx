"use client"

import React, { useCallback, useState } from 'react'
import Button from './button'
import { IUserDetails } from '@/types/user-details.interface'
import Link from 'next/link'

interface IErrors {
  firstName: boolean
  lastName: boolean
  email: boolean
  id: boolean
  isTermsAccepted: boolean
}

interface IProps {
  buttonText: string
  onButtonClick: (userDetails: IUserDetails) => void
}

const UserDetails = ({buttonText, onButtonClick}: IProps) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [id, setId] = useState('')
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [error, setError] = useState<IErrors>({} as IErrors)

  /*useEffect(() => {
    isValid()
  }, [firstName, lastName, email, id, isTermsAccepted])*/

  const handleButtonClick = () => {
    if (!isValid()) {
      return;
    }
    onButtonClick({
      firstName,
      lastName,
      email,
      id,
      phoneNumber,
      isTermsAccepted,
    })
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setId('')
    setIsTermsAccepted(false)

  }
  const isValid = useCallback(() => {
    const isFirstNameValid = !!firstName.length
    const isLastNameValid = !!lastName.length
    const isEmailValid = !!email.length && validateEmail(email)
    const isIdValid = !!id.length

    setError({
      ...error,
      firstName: !isFirstNameValid,
      lastName: !isLastNameValid,
      email: !isEmailValid,
      id: !isIdValid,
      isTermsAccepted: !isTermsAccepted
    })
    return isFirstNameValid && isLastNameValid && isEmailValid && isIdValid && isTermsAccepted
  }, [firstName, lastName, email, id, isTermsAccepted, error])
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  return (
    <>
      <div className="inputs-wrapper">
        <div className="input">
          <div className="input__label">Vezetéknév *</div>
          <input type='text' name='family-name' placeholder='Vezetéknév' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
          <p className={`input__error ${error.lastName ? 'active' : ''}`}>Adja meg a vezetéknevét!</p>
        </div>
        <div className="input">
          <div className="input__label">Keresztnév *</div>
          <input type='text' name='first-name' placeholder='Keresztnév' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
          <p className={`input__error ${error.firstName ? 'active' : ''}`}>Adja meg a keresztnevét!</p>
        </div>
        <div className="input">
          <div className="input__label">Taj *</div>
          <input type='text' name='taj' placeholder='Taj' onChange={(e) => setId(e.target.value)} value={id}/>
          <p className={`input__error ${error.id ? 'active' : ''}`}>Adja meg az id számát!</p>
        </div>
        <div className="input">
          <div className="input__label">Email *</div>
          <input type='email' name='email' placeholder='Email cím' onChange={(e) => setEmail(e.target.value)} value={email}/>
          <p className={`input__error ${error.email ? 'active' : ''}`}>Adja meg az email címét!</p>
        </div>
        <div className="input">
          <div className="input__label">Telefonszám</div>
          <input type='text' name='phone' placeholder='Telefonszám' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
        </div>
      </div>
      <div className="checkbox-wrapper">
        <input type="checkbox" name='accept-terms' checked={isTermsAccepted} onChange={(e) => setIsTermsAccepted(!isTermsAccepted)}/>
        <label htmlFor="accept-terms">
          Elfogadom az <a href='/adatkezelesitajekoztato' target='_blank' className='link'>adatkezelési szabályzatot</a> *
        </label>
      </div>
      <p className={`input__error with-margin-bottom ${error.isTermsAccepted ? 'active' : ''}`}>Fogadja el az adatkezelési szabályzatot!</p>
      <Button onButtonClick={handleButtonClick}>{buttonText}</Button>
    </>
  )
}

export default UserDetails
