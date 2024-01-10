import { useDispatch } from 'react-redux'
import { getPhoneNumber } from '../redux/features/userPhoneNumber'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { authentication } from '../config/firebase.config'
import { useEffect, useState } from 'react'
import ToastContain from '../components/toast/ToastContainer'
import { useNavigate } from 'react-router-dom'
import {api} from '../utils/api'
import {setUser} from '../redux/features/userDataSlice'
import { createToken } from '../redux/features/token'
import { showToast } from '../components/toast/showToast'

const PhoneNumberVerifier = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [timeOfCodeSendedtoUser, settimeOfCodeSendedtoUser] = useState(90)
  const [isOTPSend, setisOTPSend] = useState(false)
  const [otpSend, setOtpSend] = useState(false)
  const [, setOTPCode] = useState(undefined)

  // set timer on otb button
  useEffect(() => {
    let timerId;

    if (isOTPSend && timeOfCodeSendedtoUser > 1) {
      timerId = setTimeout(() => {
        settimeOfCodeSendedtoUser(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [timeOfCodeSendedtoUser,isOTPSend])

  // recaptcha verifier function
  const recapthcaVerifierFunc = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      authentication,
      'recaptchaContainer',
      {
        size: 'invisible',
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // callback: response => console.log(response)
      },
      authentication
    )
  }
  // end of recaptcha verifier function

  // after user entered his number and called a function
  const sendOTPToUser = e => {
    e.preventDefault()
    if(phoneNumber.length === 10){
    const phoneNumberWithCountryCode = `+93${phoneNumber}`
    setOtpSend(true)
    recapthcaVerifierFunc()
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(
      authentication,
      phoneNumberWithCountryCode,
      appVerifier
    )
      .then(confirmationResult => {
        setisOTPSend(true)
        showToast('کود به شماره مبایل شما ارسال شد', 'success')
        window.confirmationResult = confirmationResult
      })
      .catch(error => {
        console.log(error)
        showToast('شماره مبایل تان درست نیست', 'error')
        setisOTPSend(false)
      })
  }else{
    showToast('لطفا فقظ ده شماره مبایل تان را وارد کنید بدون فاصله و به اعداد انگلیسی','error')
  }
  }

  const getUserOTP = e => {
    e.preventDefault()
    setOTPCode(e.target.value)
    const OTPCodeForChecking = e.target.value

    if (OTPCodeForChecking.length === 6) {
      let confirmationResult = window.confirmationResult
      confirmationResult
        .confirm(OTPCodeForChecking)
        .then(async (result) => {
          // User signed in successfully.
          const user = result.user
          const phoneNumber = user?.phoneNumber
          const isUser = await api.post('/api/v1/otp/phone',{phoneNumber})
          const userInformation = isUser.data
          if(userInformation.isUser && userInformation.data){
            dispatch(setUser(userInformation?.data))
            dispatch(createToken(userInformation.userToken))
            navigate('/')
          }else{
            navigate('/worker-account')
          }
          dispatch(getPhoneNumber(phoneNumber))
          showToast('موفقانه کود درست پود', 'success')
        })
        .catch(error => {
          // User couldn't sign in (bad verification code?)
          showToast('لطفا کود درست را وارد کنید', 'error')
          console.log(error)
        })
    }
    setOtpSend(false)
  }
  return (
    <div className='w-full h-screen'>
      <form
        onSubmit={sendOTPToUser}
        className='mx-auto flex-col gap-4 rounded-xl mt-7 min-h-60 flex justify-center items-center md:mt-12 max-w-[400px] p-3 shadow-2xl border-t-2'
      >
        <h1 className='font-semibold md:font-bold text-lg md:text-xl text-right'>
          شماره تماسی ک پیش تان موجود است را وارد کنید
        </h1>
        <input
          disabled={isOTPSend}
          className='outline-none rounded-md border-2 w-full focus:border-blue-500 text-lg md:text-xl p-1'
          name='phoneNumber'
          placeholder='0700000000'
          type='text'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {isOTPSend && (
          <>
          <input
            name='otpcode'
            className='outline-none rounded-md border-2 w-full focus:border-blue-500 text-lg md:text-xl p-1'
            placeholder='code 304021'
            type='text'
            onChange={getUserOTP}
          />
          <button
          onClick={() => window.location.reload()}
          disabled={timeOfCodeSendedtoUser > 1}
          className=' disabled:bg-gray-600 disabled:text-white disabled:hover:border-2 disabled:border-black disabled:cursor-not-allowed border-2 hover:border-blue-500 hover:text-blue-800 transition-all mt-3 px-12 py-2 rounded-md font-semibold md:font-bold'
          >{timeOfCodeSendedtoUser === 1 ? 'دوباره بفرست': timeOfCodeSendedtoUser}</button>
          </>
        )}
        <button
        disabled={otpSend}
          className=' disabled:bg-gray-600 disabled:text-white disabled:hover:border-2 disabled:border-black disabled:cursor-not-allowed border-2 hover:border-blue-500 hover:text-blue-800 transition-all mt-3 px-12 py-2 rounded-md font-semibold md:font-bold'
          type='submit'
        >
          تایید کردن شماره
        </button>
      </form>
      <div id='recaptchaContainer'></div>
      <ToastContain />
    </div>
  )
}
export default PhoneNumberVerifier
