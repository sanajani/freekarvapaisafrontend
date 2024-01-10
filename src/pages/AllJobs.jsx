
import { api } from "../utils/api"
import SearchTable from "../components/searchTable/SearchTable"
import { useState,useEffect } from "react"
import {useSelector, useDispatch } from 'react-redux'
import { showLoading,hideLoading } from "../redux/features/loadingSlice";
import { FcNext,FcPrevious } from "react-icons/fc";
import { Link, useSearchParams } from "react-router-dom"

const AllJobs = () => {
  const loadingState = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState()
  const jobSearchParams = searchParams.get('job')
  const provicneSearchParams =  searchParams.get('province')
  const currentPage = searchParams.get('page')

  useEffect(() => {
    setSearchParams(`?page=${page}&job=${jobSearchParams||''}&province=${provicneSearchParams||''}`)
  },[page,setSearchParams,jobSearchParams, provicneSearchParams])

  useEffect(() => {
    const getAllUsers = async () => {
      dispatch(showLoading())
      try {
        const resp = await api.get(`/api/v1/job?page=${currentPage}&job=${jobSearchParams}&province=${provicneSearchParams}`)
        setData(resp?.data?.data)
        setTotalPages(resp?.data?.totalPages)
        console.log(resp);
      } catch (error) {
        console.log(error)
      }finally{
        dispatch(hideLoading())
      }
    }
    getAllUsers()
  },[currentPage,jobSearchParams,provicneSearchParams,dispatch])

  if(!data) return <h1>Loading..</h1>

  return (
    <div className=''>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row relative">
      {
          loadingState?.loading || data.length ===  0
          ? <h1 className='order-last font-bold text-2xl md:text-4xl w-full flex justify-center items-center text-center h-screen'>{loadingState?.loading ? 'لطفا چند لحظه صبر کنید' : 'فعلا وظیفه ایی موجود نیست'}</h1> :
        <div className='order-last w-full md:w-fit p-4 mt-2 rounded-lg flex flex-col items-end text-right'>
          {data.map(jobs => {
            const {_id, jobTitle, cityOfJob, jobLocation,jobDesc,kindOfWorkerNeeded } = jobs
            return (
              <Link to={`/showSingleJob/${_id}`}
                key={_id}
                className='my-3 p-8 rounded-lg bg-white shadow-xl border-t-2 max-w-full w-[700px]'>
                <h1 className='font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>{jobTitle}</h1>
                <span className='text-[12px] underline'>{cityOfJob}</span>
               {/* {userInformation && <p className='text-sm'>{userInformation?.subString(0,3)}</p>} */}
               <div>
                  <p className='text-sm'>{jobDesc.substring(0,40)} </p>
                  <span className='text-sm underline text-blue-500' dir="ltr"> ... بیشتر بخوان   </span>
               </div>
                <span className="text-sm">{jobLocation}</span>
                <div className=''>
                  {
                      kindOfWorkerNeeded.map((id,element) => {
                          return <span className="text-right inline-block mx-3 text-sm" key={id}>{kindOfWorkerNeeded[element]}</span>
                      })
                  }
                </div>
              </Link>
            )
          })}
          
          {data.length > 2 && <div className='flex items-center justify-center gap-4'>
          <button
          disabled={page === totalPages}
          onClick={() => setPage(page+1)}
          className='text-center text-blue-800 hover:bg-blue-500 hover:text-white transition-all px-4 py-1 md:px-8 md:py-2 font-bold border-2 border-blue-500 disabled:bg-gray-800 disabled:text-white disabled:border-white disabled:cursor-not-allowed'>{<FcNext/>}</button>
          <div><span>{totalPages}</span> <span className="font-bold mx-3">از </span> <span>{page}</span></div>
          <button disabled={page<2} onClick={() => setPage(page-1)} className='text-center text-blue-800 hover:bg-blue-500 hover:text-white transition-all mx-auto  px-4 py-1 md:px-8 md:py-2 font-bold border-2 border-blue-500 disabled:bg-gray-800 disabled:text-white disabled:border-white disabled:cursor-not-allowed'>{<FcPrevious/>}</button>
          </div>}


        </div>
}
        <div className='w-full p-4 mt-2 rounded-lg mx-3'>
            <SearchTable />
        </div>
      </div>
    </div>
  )
}

export default AllJobs