/* eslint-disable react/prop-types */
import { list_of_districts } from '../../utils/provincename'
import Button from '../Button'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'

const SearchTable = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [province,setProvince] = useState(searchParams.get('province') || '')
    const [job,setJob] = useState(searchParams.get('job') || '')

    const setProvinceValue = (e) => {
        setProvince(e.target.value)
        if(job && e.target.value){
            setSearchParams({province:e.target.value,job})
        }else{
            setSearchParams({province:e.target.value})
        }
    }
    const setJobValue = () => {
        if(job && province){
            setSearchParams({province,job})
        }else{
            setSearchParams({job})
        }
    }
    const resetURLSearchParams = () => {
        setSearchParams('')
        setJob('')
        setProvince('')
    }

    return (
        <div className='rounded-lg border-t-2 md:sticky md:top-5 p-2 my-2 md:right-0 md:my-4 md:mx-2 bg-white shadow-lg md:p-10'>
            <div className='flex flex-col border border-gray-500'>
                <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>
                    جستجو کردن
                </p>
                <label
                    htmlFor='search'
                    className='p-3 text-sm font-bold text-right tracking-wider md:text-xl'
                >
                   {location.pathname !== '/jobs' ? ` دنبال چی میگردین نجار لوله کش ...؟` :'دنبال کدام وظیفه میگردی'}
                </label>
                <div className='w-[90%] mx-auto md:w-full md:px-3'>
                    <input
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                        type='text'
                        className='w-full outline-none md:text-xl text-base border-gray-500 border text-right p-1 md:w-full md:ml-0'
                        placeholder='دنبال چی میگردین؟؟'
                    />
                </div>
                <Button 
                onClick={setJobValue}
                text='جستجو' 
                style='font-semibold bg-blue-500 hover:bg-blue-600 m-3 px-7 py-2 text-sm md:text-lg text-white rounded-md ml-5 md:ml-3'/>
            </div>

            <div className='flex flex-col border border-gray-500 my-5'>
                <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>
                    فلتر کردن کارمندان
                </p>
                <div className=' flex flex-col my-2'>
                    <label
                        htmlFor='selectlocation'
                        className='md:my-4 px-3  my-2 text-sm font-bold text-right'
                    >
                        فلتر با ولایت
                    </label>
                    <select
                    onChange={setProvinceValue}
                    // onClick={provinceChoosed}
                        name='selectlocation'
                        id='selectlocation'
                        className='border-2 outline-none mx-3 text-lg md:text-xl text-center'
                        value={province}
                    >
                        {list_of_districts.map(item => {
                            return (
                                <option 
                                className='text-lg' value={item.label} key={item.value}>
                                    {item.value}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
                <button
                onClick={resetURLSearchParams}
                className='bg-blue-500 hover:bg-blue-600 w-full py-2 text-white rounded-full font-bold text-lg md:text-xl cursor-pointer '
                type='button'>نشان دادن همه</button>
        </div>
    )
}

export default SearchTable
