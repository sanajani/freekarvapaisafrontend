/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtectedFile = ({children}) => {
    const admin = useSelector((state) => state.admin)

    if(admin?.adminData){
       return <Navigate to='/'/>
    }
  return (
    <div>{children}</div>
  )
}

export default AdminProtectedFile