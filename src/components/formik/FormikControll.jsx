/* eslint-disable react/prop-types */
import FormikInput from "./FormikInput"
import FormikTextarea from "./FormikTextarea"
import FormikRadioButton from "./FormikRadioButton"
import CheckBox from "./CheckBox"
import Select from "./Select"
import DatePicker from "./DatePicker"

const FormikControll = (props) => {
    const {controll, ...rest} = props
    switch(controll){
        case "input": return <FormikInput {...rest} />
        case "textarea": return <FormikTextarea {...rest} />
        case "checkbox": return <CheckBox {...rest} />
        case "radio":  return <FormikRadioButton {...rest} />
        case "date": return <DatePicker {...rest} />
        case "select": return <Select {...rest} />
        default: return null
    }
}

export default FormikControll