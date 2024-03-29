import SearchAndPlace from '../components/homepagecomponents/SearchAndPlace'
import { IoIosArrowDown } from 'react-icons/io'
import FindJobHomePageComponent from '../components/homepagecomponents/FindJobHomePageComponent'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const userData = useSelector((state) => state.user)
  console.log(userData);
  return (
    <main className=' min-w-full'>
      <div className=' mx-auto py-20'>
        <div className='w-full flex flex-col '>
          <h1 className='text-center font-bold my-4 text-4xl sm:text-5xl md:text-8xl'>
            کار و پول
          </h1>
          <p className='md:my-5 mx-auto font-semibold md:font-bold md:text-xl text-center'>
            موتور جستجوی فرصت‌های شغلی افغانستان
          </p>
        </div>
        <div className='w-[90%] mx-auto'>
        <SearchAndPlace />
        </div>
        <div className='flex max-w-[500px] mx-auto flex-col md:flex-row'>
        <Link
        to='/jobs'
          className='text-center block w-fit mx-auto bg-yellow-300 transition-all hover:bg-gray-600 hover:text-yellow-300 font-bold mt-5 px-4 py-1 rounded-xl '
        >
          جستجو فرصت های شغلی
        </Link>
        <Link
        to='/workers'
          className='text-center block w-fit mx-auto bg-yellow-300 transition-all hover:bg-gray-600 hover:text-yellow-300 font-bold mt-5 px-4 py-1 rounded-xl '
        >
          جستجوی کارمند یا کارگر
        </Link>
        </div>
        <div className=' bg-gray-100 mt-12 py-6 rounded-md'>
          <p className='text-center py-2 font-semibold text-base sm:text-lg md:text-xl'>
            خدمات بررسی اولیه و جذب نیرو جهت استخدام
          </p>
          <Link
        to='/hire'
          className='text-center block w-fit mx-auto bg-gray-300 transition-all hover:bg-yellow-600 text-gray-600 hover:text-yellow-300 font-bold mt-5 px-4 py-1 rounded-xl '
        >
          بخش کارفرمایان
        </Link>
        </div>
        <div
        className='mx-auto my-12 cursor-pointer flex justify-center w-fit p-2 rounded-full border-2 border-gray-500 font-bold '>
          <IoIosArrowDown />
        </div>
        <div className='w-full  bg-gray-100 py-3'>
          <div className='w-full md:max-w-[850px] 100 mx-auto flex justify-between flex-col md:flex-row'>
            <FindJobHomePageComponent
            text='قصد استخدام داری؟'
            to='/hire-form'
            buttontext='اینجا آگاهی ثبت نام کن'
            buttonStyle='w-full my-3 border-2 hover:bg-yellow-700 hover:text-white transition-all inline-block text-center py-1 font-semibold rounded-lg'
            divStyle='px-4 py-2  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white md:w-[350px] rounded-xl'
            pText='از خدمات ما برای استخدام نیروی جدید استفاده کن'
            />
            <FindJobHomePageComponent
            to={userData?.user ? '/jobs' : '/worker-account'}
            pText={userData?.user ?'بیا اینجا و وظایف که مرتبط کار شما است آپلای کن':' به سادگی با جواب دادن به چند سوال صاحب رزومه شو'}
            text={userData?.user ? 'دنبال کار می گردی؟' : 'ثبت رزومه'}
            buttontext={userData?.user ? 'اینجا یک نظر بنداز' : 'اینجا ثبت نام کن'}
            buttonStyle='w-full my-3 border-2 hover:bg-yellow-700 hover:text-white transition-all inline-block text-center py-1 font-semibold rounded-lg'
            divStyle='px-4 py-2  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white md:w-[350px] rounded-xl'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home