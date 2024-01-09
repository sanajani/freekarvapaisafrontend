/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik"
import ErrorText from "../ErrorText"

const Select = (props) => {
    const {name,options,label,...rest} = props
  return (
    <div className="text-right my-3 ">
        <label
        className='text-right my-2 text-sm font-semibold block sm:text-base'
        htmlFor={name}>{label}</label>
        <Field
            className='border-2 border-gray-200 focus:border-blue-500 outline-none px-12 text-center'
            {...rest}
            as='select'
            name={name}>
                {options.map((option) => {
                    return (
                        <option className="border-2" key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default Select