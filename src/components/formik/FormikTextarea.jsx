/* eslint-disable react/prop-types */
import {Field, ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const FormikTextarea = (props) => {
    const {name, label, ...rest} = props
  return (
    <div className='flex flex-col my-3 mx-1'>
    <label
        htmlFor={name}
        className='text-right my-1 text-sm font-semibold sm:text-base'
    >
        {label}
    </label>
    <Field
        id={name}
        name={name}
        className='focus:border-blue-500 placeholder:text-gray-300 focus:border-2 rounded-md text-right outline-none border p-1 text-sm sm:text-base border-gray-400'
        {...rest}        
        as='textarea'
    />
    <ErrorMessage component={ErrorText} name={name} />
    </div> 
  )
}

export default FormikTextarea