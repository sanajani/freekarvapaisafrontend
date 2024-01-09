import UserJobInformationPage from "./UserJobInformationPage"
import * as Yup from 'yup'
import {useSelector,useDispatch} from 'react-redux'
import {api} from '../../utils/api'
import { createToken } from '../../redux/features/token'
import { useNavigate } from 'react-router-dom'
import { setUser } from "../../redux/features/userDataSlice"
import { useState } from "react"

const CreateWorkerAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const phoneNumberData = useSelector((state) => state.phoneNumber)
  const [submitButtonFired,setSubmitButtonFired] = useState(false)
    
  const initialValues = {
    name:'',
    lastName:'',
    city:'',
    currentLocation:'',
    job:'',
    userInformation:'',
    genderOfWorker:'', // gender
    educationLevel: '', // سطح تحصیل
    currentJob: '',
    jobExp: '',
    typeOfJob: [],
    phoneNumber:'',
    password:'',
    email:'',
    phoneNumber1:'',
    phoneNumber2:'',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("نام شما الذامی میباشد"),
    lastName: Yup.string().required("تخلص شما الذامی میباشد"),
    city: Yup.string().required("شهر شما الذامی میباشد"),
    job: Yup.string().required("وظیفه شما الذامی میباشد"),
    userInformation: Yup.string().required("لطفا درمورد خود بگین"),
    genderOfWorker: Yup.string().required("جنسیت شما الذامی میباشد"),
    phoneNumber1: Yup.string().required("شماره تماس یک"),
    email: Yup.string(),
    password: Yup.string().required("رمز مهم است فراموش نکنید"),
  })

  const onSubmit = async (values) => {
    values.phoneNumber = phoneNumberData?.phoneNumber
    setSubmitButtonFired(true)
    try {
    const response = await api.post('/api/v1/user/signup',values)
      dispatch(createToken(response.data.userToken))
      dispatch(setUser(response?.data?.data))
      navigate('/')
    } catch (error) {
      console.log(error);
    }finally{
      setSubmitButtonFired(false)
    }
  }
  return (
    <div>
        <UserJobInformationPage 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
            isWorkerAccount={true}
            submitButtonFired={submitButtonFired}
            />
    </div>
  )
}

export default CreateWorkerAccount