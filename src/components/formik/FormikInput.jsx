/* eslint-disable react/prop-types */
import {Field, ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const FormikInput = (props) => {
    const {name, label,left, ...rest} = props
  return (
    <div className='flex flex-col my-3 mx-1'>
    <label
        htmlFor={name}
        className='text-right my-2 text-sm font-semibold sm:text-base'
    >
        {label}
    </label>
    <Field
        id={name}
        name={name}
        className={`${left ? 'text-left' : 'text-right'} placeholder:text-gray-300 focus:border-blue-500 rounded-md focus:border-2 outline-none p-1 text-sm sm:text-base border-gray-300 border`}
        {...rest}
    />
    <ErrorMessage name={name} component={ErrorText} />
    </div> 
  )
}

export default FormikInput