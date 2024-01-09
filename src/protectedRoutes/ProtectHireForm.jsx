/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectHireForm = ({children}) => {
    const adminToken = useSelector((state) => state.adminToken)

    if(!adminToken?.adminToken){
       return <Navigate to='/'/>
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectHireForm