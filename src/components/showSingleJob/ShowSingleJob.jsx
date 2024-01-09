import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { api } from '../../utils/api'
import { AiTwotoneSound } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const ShowSingleJob = () => {
  const params = useParams()
  const [data,setData] = useState();
  const [showPhoneNumber,setShowPhoneNumber] = useState(false)
  const getSingleJob = useCallback(async () => {
    try {
      const res = await api.get(`/api/v1/job/show/${params?.id}`)
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  },[params?.id])
  useEffect(() => {
    getSingleJob()
  }, [getSingleJob])

  if(!data) return <h1 dir='ltr'>Loading...</h1>
  return (
    <div className='w-full md:max-w-[900px] p-4 sm:max-w-[720px] mx-auto mt-3 flex flex-col'>
        <div className='w-full md:max-w-[900px] p-4 sm:max-w-[720px] border mx-auto mt-3 rounded-md'>
      <div className='border-b-2 border-black my-2'>
        <h1 className='text-lg sm:text-xl md:text-2xl my-1 font-semibold'>{data?.jobTitle}</h1>
        <p className='text-sm'>{data?.jobLocation}</p>
        <p className='sm:text-lg font-bold'>{data?.cityOfJob}</p>
      </div>
      <div className='my-4'>
        <div className='flex items-center font-bold mb-3 gap-3'>
          <h1 className='text-xl'>اطلاعات شغل</h1>
          <AiTwotoneSound size={20}/>
        </div>
        <div className='flex gap-4'>
          <p className='font-semibold'>زمینه فعالیت</p>
          <p>{data?.jobLocation}</p>
        </div>

        <div className='flex gap-4'>
          <p className='font-semibold'>نوع همکاری</p>
          <p>{data?.jobLocation}</p>
        </div>

        <div className='flex gap-4'>
          <p className='font-semibold'>مدرک تحصیلی مورد نیاز</p>
          <p>{data?.jobLocation}</p>
        </div>
      </div>
      <div className='border-b-2 border-black pb-8 pt-4'>
      <div className=' flex items-center font-bold mb-3 gap-3'>
          <h1 className='text-xl'>متن کامل آگهی</h1>
          <HiMenuAlt2 size={24} />
        </div>
        <p>{data?.jobDesc}</p>
      </div>
      
        </div>
        {/* what if you like the job */}
        <p className='my-3 px-3'>اگه این شغل رو می‌خوای دکمه تماس با کارفرما رو بزن و به روشی که تعیین شده با کارفرما تماس بگیر</p>
        {/* notification */}
        <div className='border border-gray-200 px-4'>
        <div className='flex items-center font-bold mb-1 gap-3'>
          <h1 className='text-xl text-red-500'>هشدار</h1>
          <CgDanger color='red' size={24}/>
        </div>
          <p className='text-sm'>توجه داشته باشید که دریافت هزینه از کارجو برای استخدام با هر عنوانی غیرقانونی است. در صورت مواجهه با موارد مشکوک،‌ با کلیک بر روی «گزارش مشکل آگهی» به ما در پیگیری تخلفات کمک کنید.</p>
        </div>
        <div className='mt-12 w-[300px] p-3'>
          {
            showPhoneNumber &&
          <div className='shadow-2xl border-t-2 font-semibold my-2 p-4 transition-all'>
            <button onClick={() => setShowPhoneNumber(false)}><IoClose size={24} /></button>
            <div className='flex items-center gap-5 justify-between'>
              <p>نام</p>
              <h1>{data?.nameOfJobPoster}</h1>
            </div>
            <div className='flex items-center gap-5 justify-between'>
              <p>شماره تماس کار فرما</p>
              <h1>{data?.contactNumberOfJobPoster}</h1>
            </div>
          </div>
          }
          <div>
            <button onClick={() => setShowPhoneNumber(!showPhoneNumber)} className='p-2 my-2 justify-between font-semibold bg-yellow-500 rounded-full w-full flex items-center'>تماس با کارفرما<IoCallSharp /></button>
            <button className='p-2 my-2 justify-between font-semibold bg-yellow-500 rounded-full w-full flex items-center'>گذارش مشکل آگاهی<MdOutlineReportProblem /></button>
          </div>
        </div>
    </div>
  )
}

export default ShowSingleJob

