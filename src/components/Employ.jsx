// import WhyShouldTakeUs from '../components/WhyShouldTakeUs'
import { Link } from "react-router-dom"
const Employ = () => {
  return (
    // background Image
      <div className='bg-image h-screen flex flex-col'>
        {/* background flex */}
        <div className="flex w-full h-full justify-center items-center flex-col md:flex-row gap-5">
            {/* start left side div */}
            <div className="flex flex-col order-last md:order-first">
                <Link className="bg-white text-gray-800 my-1 text-base rounded-xl md:text-xl py-2 px-10 text-right" to='/hire-form'>می خواهم کسی را استخدام کنم</Link>
                <Link className="bg-white text-gray-800 my-1 text-base rounded-xl md:text-xl py-2 px-10 text-right" to='/worker-account'>دنبال کار میگردم</Link>
            </div>
            {/* end left side div */}

            {/* start right side div */}
            <div className="flex flex-col">
                <h1 className="text-4xl mx-3 text-right">می خواهی کارمند جدید <br /> استخدام کنی</h1>
                <span className="text-right text-blue-700 mt-3">ثبت آگاهی جدید</span>
            </div>
            {/* end right side div */}
        </div>
      </div>
  )
}

export default Employ
