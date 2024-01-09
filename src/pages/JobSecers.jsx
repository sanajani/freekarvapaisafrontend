import { api } from "../utils/api"
import SearchTable from "../components/searchTable/SearchTable"
import { useState,useEffect } from "react"
import { FcNext,FcPrevious } from "react-icons/fc";
import { Link, useSearchParams } from "react-router-dom"

const JobSecers = () => {
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
      const resp = await api.get(`/api/v1/user/users?page=${currentPage}&job=${jobSearchParams}&province=${provicneSearchParams}`)
      setData(resp?.data?.data)
      setTotalPages(resp?.data?.totalPages)
    }
    getAllUsers()
  },[jobSearchParams,provicneSearchParams,currentPage])

  if(!data) return <h1>Loading...</h1>

  return (
    <div className=''>
      <div className="max-w-[1240px] w-full mx-auto flex flex-col md:flex-row relative">
        <div className='order-last w-full md:w-fit p-4 mt-2 rounded-lg flex flex-col items-end text-right'>
          {data?.map(jobSecer => {
            const {_id, name, city, userInformation, jobExp, typeOfJob ,job } = jobSecer
            return (
              <Link to={`/userprofile/${_id}`}
                key={jobSecer._id}
                className='my-3 p-2 md:p-8 rounded-lg bg-white shadow-xl border-t-2 max-w-full w-[700px]'
              >
                <h1 className='font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>{`سلام من ${name} جان استم و من یک ${job} استم`}</h1>
                <span className='text-[12px] underline'>{`${city}`}</span>
               {userInformation && <p className='text-sm'>{userInformation?.substring(0,70)}</p>}
               {/* <p className='text-sm'>{userInformation}</p> */}
                <span className="text-sm">{`${jobExp}`}</span>
                <div className=' mt-3'>
                  {
                      typeOfJob.map((id,element) => {
                          return <span className="bg-blue-500 p-1 md:py-1 text-white md:px-4 text-right inline-block m-1 md:mx-3 text-sm" key={id}>{typeOfJob[element]}</span>
                      })
                  }
                </div>
              </Link>
            )
          })}
          {data.length > 2 &&  <div className='flex items-center justify-center gap-4'>
          <button
          disabled={page === totalPages}
          onClick={() => setPage(page+1)}
          className='text-center text-blue-800 hover:bg-blue-500 hover:text-white transition-all px-4 py-1 md:px-8 md:py-2 font-bold border-2 border-blue-500 disabled:bg-gray-800 disabled:text-white disabled:border-white disabled:cursor-not-allowed'>{<FcNext/>}</button>
          <div><span>{totalPages}</span> <span className="font-bold mx-3">از </span> <span>{page}</span></div>
          <button disabled={page<2} onClick={() => setPage(page-1)} className='text-center text-blue-800 hover:bg-blue-500 hover:text-white transition-all mx-auto  px-4 py-1 md:px-8 md:py-2 font-bold border-2 border-blue-500 disabled:bg-gray-800 disabled:text-white disabled:border-white disabled:cursor-not-allowed'>{<FcPrevious/>}</button>
          </div>}
        </div>
        <div className='max-w-full md:p-4 md:mt-2 rounded-lg mx-3'>
            <SearchTable />
        </div>
      </div>
    </div>
  )
}

export default JobSecers