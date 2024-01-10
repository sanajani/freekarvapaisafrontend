// /* eslint-disable react/prop-types */
// // import DateView from 'react-datepicker'
// // import "react-datepicker/dist/react-datepicker.css";
// import { Field, ErrorMessage } from 'formik';
// import ErrorText from '../ErrorText';

// const DatePicker = (props) => {
//     const {label, name, ...rest} = props
//   return (
//     <div className='text-right'>
//         <Field name={name} className=''>
//             {
//                 ({form, field}) => {
//                     const {setFieldValue} = form
//                     const {value} = field
//                     return <DateView 
//                     className='border-4'
//                     {...rest}
//                         id={name} 
//                         {...field} 
//                         {...rest} 
//                         selected={value} onChange={val => setFieldValue(name, val)}
//                     />
//                 }
//             }
//         </Field>
//         <label htmlFor={name}>{label}</label>
//         <ErrorMessage name={name} component={ErrorText}/>
//     </div>
//   )
// }

// export default DatePicker


const DatePicker = () => {
  return (
    <div>DatePicker</div>
  )
}

export default DatePicker