/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectPhoneNumberPage = ({children}) => {
    const {phoneNumber} = useSelector((state) => state.phoneNumber)

    if(phoneNumber){
       return <Navigate to='/'/>
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectPhoneNumberPage