import { FaSearch } from "react-icons/fa";
import { list_of_districts } from "../../utils/provincename";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAndPlace = () => {
    const [province,setProvince] = useState('')
    const [job,setJob] = useState('')
    const navigate = useNavigate();

    const setProvinceValue = (e) => {
        setProvince(e.target.value)
        navigate(`/jobs?province=${e.target.value}`)
    }
    const setJobValue = () => {
        navigate(`/jobs?job=${job}`)
    }

  return (
    <div className="min-w-full border-2 sm:flex my-2">
        <div className="w-full flex flex-col relative">
            <input className="border relative text-right px-2 mr-10 outline-none py-2" value={job} onChange={(e) => setJob(e.target.value)} placeholder="چی کاری" type="text"  />
            <button className="absolute h-full px-3" onClick={setJobValue}><FaSearch size={18}/></button>
        </div>
        <div className=" w-full flex flex-col relative">
            <select
                    name='selectlocation'
                    id='selectlocation'
                    className="border border-r-0 relative text-right px-2 outline-none py-2"
                    value={province}
                    onChange={setProvinceValue}
                    >
                        {list_of_districts.map(item => {
                            return (
                                <option
                                key={item.value}
                                className='text-lg' value={item.label}>
                                    {item.value}
                                </option>
                            )
                        })}
                    </select>
        </div>
    </div>
  )
}

export default SearchAndPlace