/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const WorkerAccountProtect = ({ children }) => {
  const workerExist = useSelector(state => state.user)
  if (workerExist?.user) {
    return <Navigate to='/'/>
  } else {
    return <div>{children}</div>
  }
}

export default WorkerAccountProtect
