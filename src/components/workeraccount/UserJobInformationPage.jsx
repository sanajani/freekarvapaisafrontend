/* eslint-disable react/prop-types */

import { Formik, Form } from 'formik'
import FormikControll from '../formik/FormikControll'
import { radioOptionforeducationsWorker,currentJobType,jobExp,gender, kindOfJobOptionsForCheckbox } from '../formik/FormValues'
import { IoIosEye,IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';

const UserJobInformationPage = ({initialValues,validationSchema,onSubmit,isWorkerAccount,submitButtonFired}) => {
  const [showPassword,setShowPassword] = useState(true)

  return (
    <div className='max-w-[450px] mx-auto'>
      <h1 className='text-center text-3xl border-b-2 mb-3 font-bold my-4'>
        { isWorkerAccount ?`ثبت نام برای کار های موجود` : 'به روز رسانی حساب شما'}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='shadow-2xl border-t-2 p-4 rounded-lg'>
            <div>
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
                   placeholder=' مبینی'
                />
                <FormikControll
                   controll='input'
                   label="ایمیل آدرس تان را وارد کنید"
                   name='email'
                   type='email'
                   id='email'
                   placeholder='example@gmail.com'
                />
                <FormikControll
                   controll='input'
                   label="شماره تماس یک"
                   name='phoneNumber1'
                   type='text'
                   id='phoneNumber1'
                   placeholder='0780000000'
                />
                <FormikControll
                   controll='input'
                   label="شماره تماس دو"
                   name='phoneNumber2'
                   type='text'
                   id='phoneNumber2'
                   placeholder='0799000000'
                />
                {
                  isWorkerAccount &&
                <div className='relative'>
                <FormikControll
                   controll='input'
                   label="رمز"
                   name='password'
                   type={showPassword ? `password` : 'text'}
                   id='password'
                   placeholder='هر چی دوست داری بزن'
                />
                <button
                onClick={() => setShowPassword(!showPassword)}
                className='text-xl absolute top-12 left-4'>{
                  showPassword ?<IoIosEye />:<IoMdEyeOff/>
                }                 
                  </button>
                </div>
                }
                <FormikControll
                   controll='input'
                   label="ولایت"
                   name='city'
                   type='text'
                   id='city'
                   placeholder='هرات'
                />
                <FormikControll
                   controll='input'
                   label="موقعیت شما"
                   name='currentLocation'
                   type='text'
                   id='currentLocation'
                   placeholder='شهر نو'
                />
                <FormikControll
                   controll='input'
                   label=" وظیقه شما"
                   name='job'
                   type='text'
                   id='job'
                   placeholder=' حسابدار یا نجار'
                />
            {/* about the job */}
            {/* <div className='flex border-t-2 flex-col my-3 mx-1 shadow-2xl p-4 rounded-xl bg-white'> */}
                <FormikControll
                    controll='textarea'
                    name='userInformation' 
                    label='درمورد خودتان'
                    placeholder='درمورد خودتان ینویسید'
                    id='userInformation'
                />
            {/* </div> */}
            {/* about the job */}


                <FormikControll
                   controll='radio'
                   label="جنسیت"
                   name='genderOfWorker'
                   options={gender}
                />
                <FormikControll
                   controll='select'
                   label="سطح تحصیل"
                   name='educationLevel'
                   options={radioOptionforeducationsWorker}
                />
                <FormikControll
                   controll='radio'
                   label="وظیفه شما"
                   name='currentJob'
                   options={currentJobType}
                />
                <FormikControll
                   controll='radio'
                   label="تجربه کاری"
                   name='jobExp'
                   options={jobExp}
                />
                <FormikControll
                   controll='checkbox'
                   label="روش کاری شما"
                   name='typeOfJob'
                   options={kindOfJobOptionsForCheckbox}
                />
                
            </div>
          <button
          disabled={submitButtonFired}
            type='submit'
            className='disabled:cursor-not-allowed bg-yellow-400 text-gray-900 font-semibold sm:font-bold sm:text-lg shadow-lg w-full my-5 py-2 rounded-xl'
          >
            {isWorkerAccount? ` درست کردن حساب`:'به روز رسانی'}
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserJobInformationPage