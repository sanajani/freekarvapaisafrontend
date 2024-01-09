/* eslint-disable react/prop-types */
import {Field} from 'formik'

const CheckBox = (props) => {
    const {name, label, options, ...rest} = props

  return (
    <div className='text-right'>
        <label htmlFor={name}
        className='text-right my-2 text-sm font-semibold block sm:text-base'
        >{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    return <div className='flex  flex-wrap justify-end'>
                    {
                    options.map((option) => {
                       return (
                           <div key={option.value} className='border-2 mx-3 my-1 w-[40%]'>
                                <label htmlFor={option.value}
                               className='text-right text-base mx-1' 
                                >{option.key}
                                </label>
                               <input 
                                   type="checkbox"
                                   {...field}
                                   id={option.value}
                                   value={option.value}
                                />
                           </div>
                       )
                   })}
                 </div>
                }
            }
        </Field>
    </div>
  )
}

export default CheckBox