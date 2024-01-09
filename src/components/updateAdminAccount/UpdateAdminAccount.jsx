import { useState, useEffect } from "react"
// import Button from '../Button'
import {api} from '../../utils/api'
import { MdUpdate,MdDelete  } from "react-icons/md";
// import { FcApproval } from "react-icons/fc";
import AButton from "../adminButtons/AButton";
import { useNavigate } from "react-router-dom";

const UpdateAdminAccount = () => {
  const [jobs,setJobs] = useState([])
  const [doYouWantToDelete,setDoYouWantToDelete] = useState(false)
  const navigate = useNavigate();

// get all jobs function 
  const getAllJobsPosted = async () => {
    try {
      const res = await api.get(`api/v1/user/admin/jobs/+93705669499`)
      setJobs(res?.data?.data)
    } catch (error) {
      console.log(error);
    }
  }

  // update job
  const bringUpdateJobFn = async (job) => {
    navigate(`/admin-account/:${job?.jobTitle}`,{
      state:job
    })
  }

  // delete job
  const deleteJob = async (id) => {
    try {
      const confirmToDelete = confirm('آیا میخواهید این پوست استخدام را حذف کنید؟؟؟')
      if(confirmToDelete) setDoYouWantToDelete(true)
      if(doYouWantToDelete){
        await api.delete(`/api/v1/job/${id}`)
        getAllJobsPosted()
      }

    } catch (error) {
      console.log(error);
    }
  }

  // get all jobs posted by this admin
  useEffect(() => {
    getAllJobsPosted()
  },[])

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 bg-gray-100 min-h-screen">
      <div className='py-6 md:col-span-2 bg-white'>
        {
          jobs.map((job) => {
            return (
              <div key={job?._id} className='p-4 rounded-md bg-gray-100 my-4 flex max-w-[500px] w-full mx-auto justify-between'>
                <div>
                  <h1 className="text-xl md:text-2xl">{job?.jobTitle}</h1>
                  <span className="text-sm inline-block my-1">{job?.jobLocation}</span>
                  <p>{job?.jobDesc?.substring(0,50)}</p>
                </div>
                <div className='flex flex-col'>

                <div className={`flex items-center my-1 bg-orange-500 text-white gap-1 px-2 py-1`}>
                    <button type="button" onClick={() => bringUpdateJobFn(job)}>Update</button>
                    <MdUpdate size={20} />
                </div>
                  {/* <AButton 
                  text='Aprovied'
                  icon={FcApproval}
                  bg={'bg-green-500'}
                  /> */}
                  <AButton
                    text='delete'
                    icon={MdDelete}
                    bg={'bg-red-500'}
                    fn={deleteJob}
                    id={job?._id}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="pt-10 order-first">
        <h1 dir="rtl" className="text-center text-lg sm:text-xl md:text-2xl">شما تا حالا {jobs.length} پوست استخدام اضافه کرده اید</h1>
      </div>
    </div>
  )
}

export default UpdateAdminAccount