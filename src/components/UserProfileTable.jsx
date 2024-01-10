import {api} from '../utils/api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UserProfileTable = () => {
  const {id} = useParams();
  const [data,setData] = useState()

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        if(!data){
          const resp = await api.get(`/api/v1/user/${id}`)
          setData(resp?.data?.data)
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    getSingleUser()
  }, [id,data])

  if(!data) return <h1>Loading...</h1>

  return (
      <div dir="ltr" className='max-w-[1100px] mx-auto p-4 mt-2 rounded-lg flex flex-col items-end text-right'>
            <div
              className='my-3 rounded-lg bg-gray-50 shadow-xl border-t-2 max-w-full w-full px-5'
            >
              <div className='flex flex-row-reverse'>
                   <h1 className='md:my-2 font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>سلام من</h1>
                   <h1 className='md:my-2 font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>{data.name}</h1>
                   <h1 className='md:my-2 font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>جان استم</h1>
              </div>
              {data.city && <div className='flex flex-row-reverse gap-2'>
                <p className='text-lg my-1 underline'> از </p>
                <p className='text-lg my-1 underline'>{data.city} </p>
              </div>}
             {data.userInformation && <p className='text-lg md:text-xl my-3 p-4 border-t-2 rounded-lg shadow-lg'>{data.userInformation}</p>}
              <div className='bg-gray-50 my-4 p-5 border-t-2'>
                <p className='font-bold text-xl my-3'>درمورد من </p>
                {data.lastName && <div className='flex flex-row-reverse gap-2'>
                  <p className='text-lg font-medium border-b-2 my-4'>سلام من</p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.name}</p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.lastName}</p>
                  <p className='text-lg font-medium border-b-2 my-4'>استم</p>
                </div>}
               {data.email && <p className='text-lg font-medium border-b-2 my-4' >{`${data.email} این ایمیل آدرس من است`}</p>}

               {data.job && <div className='flex flex-row-reverse gap-2'>
                  <p className='text-lg font-medium border-b-2 my-4'>من از </p>
                  <p className='text-lg font-medium border-b-2 my-4'>{`${data.city}`}</p>
                  <p className='text-lg font-medium border-b-2 my-4'>استم و شغل من </p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.job}</p>
                  <p className='text-lg font-medium border-b-2 my-4'>است </p>
                </div>}

                {data.currentLocation && <div className='flex flex-row-reverse gap-2'>
                  <p className='text-lg font-medium border-b-2 my-4'>فعلا در </p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.currentLocation}</p>
                  <p className='text-lg font-medium border-b-2 my-4'>زندگی میکنم </p>
                </div>}

                {data.jobExp && <div className='flex flex-row-reverse gap-2'>
                  {/* <p className='text-lg font-medium border-b-2 my-4'>من</p> */}
                  <p className='text-lg font-medium border-b-2 my-4'>{data.jobExp}</p>
                </div>}

               {data.phoneNumber2 && <div className='text-lg font-medium border-b-2 my-4'>
                    <p className='text-lg font-medium border-b-2 my-4'>{`این شماره های تماس من است `}</p>
                    <span>{data.phoneNumber1}</span>
                   {data.phoneNumber2 && <span className='mx-5'>{data.phoneNumber2}</span>}
                </div>}

                {data.educationLevel&& <div className='flex flex-row-reverse gap-2'>
                  <p className='text-lg font-medium border-b-2 my-4'>سطح تحصیل من </p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.educationLevel}</p>
                </div>}

               {data.currentJob && <div className='flex flex-row-reverse gap-2'>
                  <p className='text-lg font-medium border-b-2 my-4'>فعلا </p>
                  <p className='text-lg font-medium border-b-2 my-4'>{data.currentJob}</p>
                </div>}

                <div className='text-base font-medium border-b-2 my-4'>
                {
                  data.typeOfJob &&
                  data.typeOfJob.map((id,element) => {
                   return <div key={id}>
                    <span>من میتوانم به شکل</span>
                    <span className='mx-2 inline-block text-blue-500'  key={id}>{data?.typeOfJob[element]}</span>
                    <span>کار کنم</span>
                   </div>
                  })
                }
                </div>
              </div>
            </div>
      </div>
  )
}

export default UserProfileTable