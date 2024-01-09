/* eslint-disable react/prop-types */
import { FaEyeSlash,FaRegEye } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {useEffect, useRef, useState} from 'react'
import ErrorText from './ErrorText'
import Button from './Button'
import defaultProfileImage from '../images/profiledefalt.png'
import {useLocation} from 'react-router-dom'

const SignupForm = (props) => {
  const location = useLocation();
  const [isUpdateProfilePath,setIsUpdateProfilePath] = useState(false);
  const [showPassword,setShowPassword] = useState(false);

  useEffect(() => {
    if(location.pathname === '/updateprofile'){
      setIsUpdateProfilePath(true)
    }else{
      setIsUpdateProfilePath(false)
    }
  }, [location.pathname])

  const fileRef = useRef()
  const imageChanged = (e) => {
    props.setImage(e.target.files[0])
  }

  return (
    <Formik className=' min-h-[90vh] bg-gray-300'
    onSubmit={props.submitFunction}
    initialValues={props.initailFormValue}
    validationSchema={props.formSchema}
    >
      <div className='max-w-[1140px] mx-auto py-5'>
        <Form className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white rounded-md pt-3 pb-10' >
          <h1 className='sm:col-span-2 text-center text-3xl py-4'>{props.formTitle}</h1>
          <div className='flex justify-center sm:col-span-2 md:col-span-1 flex-col items-center'>
            <img
              onClick={() => fileRef.current.click()}
              className='w-28 object-cover h-28 bg-white rounded-full inline-block cursor-pointer'
              src={ props.userProfile || props.imageurl || defaultProfileImage}
              alt='your Profile'
            />
            {/* {
              !props.imageUrl && <span className='text-sm '>please add a photo</span>
            } */}
            {
              props.imageError ? <span className='text-sm text-red-500'>Only images accepted and less then 2mb</span>:
              props.progressbar && <span className='text-sm text-green-500'>{`uploading ${props.progressbar} %`}</span>
            }
          <input
              type='file'
              ref={fileRef}
              style={{ display: 'none' }}
              onChange={imageChanged}
              className='hidden'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='name'>
              Name:
            </label>
            <Field
            name='name'
            type='text'
            id='name'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Name...'
            />
            {/* error span */}
            <ErrorMessage name='name' component={ErrorText} />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='Email'>
              Email:
            </label>
            <Field
            id='email'
              name='email'
              type='email'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Email...'
            />
            <ErrorMessage  component={ErrorText} name='email'/>
          </div>
          {!isUpdateProfilePath && <div className='relative flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='password'
            >
              Password:
            </label>
            <Field
            id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Password...'
            />{
              !showPassword?
              <FaEyeSlash className="cursor-pointer absolute right-2 top-8 sm:top-10"  onClick={() => setShowPassword(!showPassword)}/>
              : <FaRegEye className="absolute right-2 top-8 sm:top-10 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            }
            <ErrorMessage  component={ErrorText} name='password'/>
          </div>}
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='lastName'
            >
              LastName:
            </label>
            <Field
            id='lastName'
              name='lastName'
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your LastName...'
            />
            {/* error span */}
            <ErrorMessage  component={ErrorText} name='lastName'/>
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='job'>
              Job:
            </label>
            <Field
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Job...'
              name='job'
            />
            {/* error span */}
            <ErrorMessage  component={ErrorText} name='job'/>


          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='experience'
            >
              Experience:
            </label>
            <Field
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your experience...'
              name='experience'
            />
            <ErrorMessage  component={ErrorText} name='experience' />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber1'
            >
              PhoneNumber1:
            </label>
            <Field
              name='phoneNumber1'
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber1...'
            />
            <ErrorMessage  component={ErrorText} name='phoneNumber1'/>
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber2'
            >
              PhoneNumber2:
            </label>
            <Field
              name='phoneNumber2'
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber2...'
            />
            <ErrorMessage  component={ErrorText} name='phoneNumber2'/>
          </div>

          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='province'
            >
              Province:
            </label>
            <Field
              name='province'
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Province...'
            />
            <ErrorMessage  component={ErrorText} name='province'/>
          </div>
          <div className='md:col-span-3 sm:col-span-2  flex flex-col md: px-1 py-5'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='personalInfo'
            >
              PersonalInfo:
            </label>
            <Field
            id='personalInfo'
            as="textarea"
              name='personalInfo'
              placeholder='Enter your PersonalInfo...'
              className='resize-none rounded-md outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
            />
            <ErrorMessage  component={ErrorText} name='personalInfo'/>
          </div>
          <Button
          style={'bg-green-500 py-3 text-xl rounded-md w-fit px-10 text-white mx-1 font-bold'}
          text={props.buttonTitle} />
        </Form>
      </div>
    </Formik>
  )
}

export default SignupForm