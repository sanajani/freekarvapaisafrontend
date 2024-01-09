import {Formik, Form} from 'formik'
import FormikControll from '../formik/FormikControll'
import * as Yup from 'yup'
import { api } from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
// import { createToken } from '../../redux/features/token'
import { createAdminToken } from '../../redux/features/adminToken'
import { setAdminData } from '../../redux/features/adminDataSlicer'

const Admin = () => {
    const dispatch = useDispatch();
    const otpNumber = useSelector((state) => state.phoneNumber)
    const initialValues = {
        name:'',
        lastName:'',
        companyName:'',
        phoneNumber:''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('لطفا نام خود را ذکر کنبد'),
        lastName: Yup.string().required('لطفا تخلص خود را ذکر کنبد'),
        companyName: Yup.string().required('لطفا نام شرکت خود را ذکر کنبد'),
    })
    const onSubmit = async (values) => {
        try {
            values.phoneNumber = otpNumber.phoneNumber
            const response = await api.post(`/api/v1/user/admin`,values)
            dispatch(setAdminData(response?.data?.data))
            dispatch(createAdminToken(response.data.adminToken))
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='p-4 border-t-2 shadow-xl rounded-xl max-w-[500px] mx-auto mt-3'>
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        <div>
            <h1 className='text-center font-bold text-xl'>لطفا مشخصات خود را ذکر کنید</h1>
        <Form>
                <FormikControll 
                    controll='input'
                    label="نام"
                    name='name'
                    type='text'
                    id='name'
                    placeholder=' ثناوالله'
                />
                <FormikControll 
                    controll='input'
                    label="تخلص"
                    name='lastName'
                    type='text'
                    id='lastName'
                    placeholder='مبینی'
                />
                <FormikControll 
                    controll='input'
                    label="نام شرکت یا محل کار شما"
                    name='companyName'
                    type='text'
                    id='companyName'
                    placeholder='سوپرکولا یا افغان مروارید یا هر چیزی'
                />
                <button className='w-full rounded-md py-2 text-white font-bold hover:bg-orange-600 bg-orange-500' type='submit'>درست کردن حساب</button>
            </Form>
        </div>
    </Formik>
    </div>
  )
}

export default Admin
