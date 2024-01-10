import { Link } from 'react-router-dom'
import WhyShouldTakeUs from '../components/WhyShouldTakeUs'
import aboutSectionImg from '../images/succes2.jpg'
import { useSelector } from 'react-redux'

const Hire = () => {
  const adminInformation = useSelector((state) => state.admin)

  return (
    <div className=''>
      <div className='bg-image h-screen flex flex-col'>
        <div className='max-w-[600px] mx-auto'>
          <h1 className='text-center mt-6 font-bold text-4xl'>کار و پیسه</h1>

          <div className='my-20 mt-12 '>
            <h1 className='text-6xl text-right font-bold px-8 my-3'>
              کارمند بعدی شما <br />
              همینجاست
            </h1>
            <WhyShouldTakeUs/>
          </div>
          {
            !adminInformation?.adminData ?
          <div className=''>
            {/* <div className='bg-white my-2 text-black w-[90%] px-5 rounded-2xl mx-auto py-3 text-right'>
              <labe className='my-2' htmlFor='phoneNumber'>
                شماره موبایل
              </labe>
              <p className='my-2'>
                جهت ثبت و مدیریت آگهی‌ها شماره تلفن همراهتون رو وارد کنید
              </p>
              <input
                className='border-2 px-2 py-1 w-full'
                type='text'
                placeholder='07000000000'
              />
            </div> */}
            <div className='w-[80%] mx-auto flex'>
              {/* <Link
                to='/'
                className='bg-yellow-300 px-10 py-2 rounded-xl text-gray-700 font-bol mx-auto'
              >
                ثبت شماره تماس
              </Link> */}
            </div>
          </div>:
          // <Link to='/hire-form' className='bg-red-500 mx-auto inline-block w-[80%]'>ثبت آگاهی استخدام</Link>
          <div className='w-[80%] mx-auto flex'>
          <Link
          to='/hire-form'
            className='bg-yellow-500 w-full text-center transition-all hover:bg-yellow-600 text-white font-bold px-10 py-2 rounded-xl text-lg md:text-xl mx-auto'
          >
            ثبت آگاهی استخدام
          </Link>
        </div>
          }

        </div>
      </div>
      {/* about us */}
      <div className='w-[90%] md:w-[700px] mx:gap-3 p-5 mx-auto shadow-xl my-5 flex sm:flex-row flex-col'>
        <div className='bg-white mt-12 min-w-[50%]'>
            <img className='min-w-full object-cover' src={aboutSectionImg} alt="success images" />
        </div>
        <div  className='text-right'>
            <h1 className='text-2xl font-bold my-3 md:my-5'>هدف ما</h1>
            <p className='text-sm tracking-wider'>
            هدف اصلی کارو پیسه، خدمات‌رسانی به جویندگان کار است. سایت کارو پیسه، موتور جستجوی شغلی است که تمام آگهی‌های استخدام سراسر کشور را از منابع آنلاین و غیر آنلاین، ثبت و طبقه‌بندی می‌کند. کارجو با جستجو در کارپیشه می‌تواند به تمام این آگهی‌ها دسترسی داشته باشد.

در صورتی که قصد دارید آگهی استخدام ثبت کنید، می‌توانید با توجه به نوع شغل و کسب‌ و کار خود، به یکی از سایت‌های کاریابی زیر مراجعه کنید و مطمئن باشید که آگهی شما هم در سایت مبدا و هم به صورت خودکار در سایت کارپیشه نمایش داده می‌شود.
            </p>
        </div>
      </div>
      {/* <div className='w-[400px] mx-auto text-right h-28'>
        <p>بخاطر اعلانات تان با ما تماس بگیرد </p>

      </div> */}
    </div>
  )
}

export default Hire
