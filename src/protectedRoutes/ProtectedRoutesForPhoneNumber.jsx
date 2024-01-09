/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoutesForPhoneNumber = ({children}) => {
    const isPhoneNumber = useSelector((state) => state.phoneNumber)
    if(isPhoneNumber?.phoneNumber){
        return children
    }else{
        return <Navigate to='/signup-phone-number' />
    }
}

export default ProtectedRoutesForPhoneNumber