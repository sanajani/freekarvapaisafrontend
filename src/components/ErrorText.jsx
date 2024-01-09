/* eslint-disable react/prop-types */

const ErrorText = (props) => {
  return (
    <span className="text-sm text-red-500 text-right">{props.children}</span>
  )
}

export default ErrorText