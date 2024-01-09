import UserJobInformationPage from "../workeraccount/UserJobInformationPage"
import * as Yup from 'yup'
import {api} from '../../utils/api'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUser } from "../../redux/features/userDataSlice"
import { useState } from "react"


const UpdateWorker = () => {
  const [submitButtonFired,setSubmitButtonFired] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const phoneNumberData = useSelector((state) => state.phoneNumber)
  const {user} = useSelector((state) => state.user)
  const workerToken = useSelector((state) => state.token)

  const initialValues = {
    name:user?.name,
    lastName:user?.lastName,
    city:user?.city,
    currentLocation:user?.currentLocation,
    job: user?.job,
    userInformation: user?.userInformation,
    genderOfWorker: user?.genderOfWorker, // gender
    educationLevel: user?.educationLevel, // سطح تحصیل
    currentJob: user?.currentJob,
    jobExp: user?.jobExp,
    typeOfJob: user?.typeOfJob,
    email: user?.email,
    phoneNumber1: user?.phoneNumber1,
    phoneNumber2: user?.phoneNumber2,
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("نام شما الذامی میباشد"),
    lastName: Yup.string().required("تخلص شما الذامی میباشد"),
    city: Yup.string().required("شهر شما الذامی میباشد"),
    job: Yup.string().required("وظیفه شما الذامی میباشد"),
    userInformation: Yup.string().required("لطفا درمورد خود بگین"),
    genderOfWorker: Yup.string().required("جنسیت شما الذامی میباشد"),
    phoneNumber1: Yup.string().required("شماره تماس یک"),
  })

  const onSubmit = async (values) => {
    setSubmitButtonFired(true)
    values.phoneNumber = phoneNumberData?.phoneNumber
    try {
      const response = await api.put(`/api/v1/user/${user._id}`,values,{
      headers:{
        Authorization: `Bearer ${workerToken?.token}`,
      }
    })
    navigate('/')
    dispatch(setUser(response?.data?.data))

    } catch (error) {
      console.log(error);
    }
    setSubmitButtonFired(false)
  }

  return (
    <div>
        <UserJobInformationPage 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
            isWorkerAccount={false}
            submitButtonFired={submitButtonFired}
            />
    </div>
  )
}

export default UpdateWorker
