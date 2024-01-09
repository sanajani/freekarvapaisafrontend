/* eslint-disable react/prop-types */
import {ErrorMessage, Field} from 'formik'
import ErrorText from '../ErrorText'

const FormikRadioButton = (props) => {
    const {name, label, options, className, ...rest} = props

  return (
    <div className='text-right'>
        <label htmlFor={name}
        className='text-right my-2 text-sm font-semibold block sm:text-base'
        >{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                  return <div className='flex  flex-wrap justify-end' {...className}>
                     {
                     options.map((option) => {
                        return (
                            <div key={option.value} className='mx-3 my-1'>
                                 <label htmlFor={option.value}
                                className='text-right text-base mx-1' 
                                 >{option.key}
                                 </label>
                                <input 
                                    type="radio"
                                    {...field}
                                    id={option.value}
                                    value={option.value}
                                    checked={field.value === option.value}
                                 />
                            </div>
                        )
                    })}
                  </div>
                }
            }
        </Field>
        <ErrorMessage component={ErrorText} name={name}/>
    </div>
  )
}

export default FormikRadioButton