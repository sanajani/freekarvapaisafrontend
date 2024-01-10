/* eslint-disable react/prop-types */
// import Button from '../Button'
import { Link } from "react-router-dom"

const FindJobHomePageComponent = ({text,to, buttontext, buttonStyle, divStyle,pText}) => {
  return (
    <div className={divStyle}>
      <h1 className='text-center my-1 py-4 font-semibold'>{text}</h1>
      <p className='text-sm my-2 text-center'>{pText}</p>
      {/* <Button text={buttontext} */}
      {/* style={buttonStyle} /> */}
      <Link to={to} className={buttonStyle} 
      >
        {buttontext}
      </Link>

    </div>
  )
}

export default FindJobHomePageComponent
