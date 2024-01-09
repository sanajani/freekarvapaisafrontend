// import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';
import AboutUser from '../components/AboutUser'
import defaultImage from '../images/profiledefalt.png'
import { api } from '../utils/api'
import { useLocation } from 'react-router-dom'
import UserProfileTable from '../components/UserProfileTable';

const Profile = () => {

    const location = useLocation();
    const searchParam = new URLSearchParams(location.search)
    const email = searchParam.get('email')
    const [data,setData] = useState(null)

    const getUserData = useCallback(async () => {
        try {
            // /api/v1/user/users/sana@gmail.com
            const response = await api.get(`/api/v1/user/users/${email}`)
            setData(response?.data?.data)
        } catch (error) {
            console.log(error);
        }
    }, [email])

    useEffect(() => {
        getUserData()
    }, [getUserData])

    if(!data) return <h1>No Data...</h1>

    const {
        experience,
        phoneNumber2,
        phoneNumber1,
        job,
        province,
        lastName,
        name,
        profileImageURL,
        personalInfo
    } = data

    return (
        <main className='min-h-screen pt-24 w-full md:max-w-[1200px] mx-auto border-2'>
            <div className='flex items-center flex-col md:flex-row justify-evenly'>
                    <div className='rounded-full md:h-56 md:w-56 h-28 w-28 border-2 border-gray-500'>
                        <img
                            src={profileImageURL || defaultImage}
                            alt='userProfile'
                            className='rounded-full overflow-hidden min-w-full h-full object-cover'
                        />
                    </div>
                <div className='overflow-auto rounded-lg shadow md:h-fit md:m-8 my-7 hidden md:block'>
                    <UserProfileTable
                    experience={experience}
                    phoneNumber2={phoneNumber2}
                    phoneNumber1={phoneNumber1}
                    job={job}
                    province={province}
                    lastName={lastName}
                    name={name}
                    />
                </div>
                <div className='grid grid-cols-1 md:hidden my-3 w-[90%] mx-auto'>
                    <div className='bg-gray-200 p-4 rounded-lg shadow '>
                        <div className='flex items-center space-x-2 text-sm flex-col font-medium'>
                            <div className='text-2xl my-2'>{experience}</div>
                            <div className='text-xl my-2'>{phoneNumber2}</div>
                            <div className='text-xl my-2'>{phoneNumber1}</div>
                            <div className='text-2xl my-2'>{job}</div>
                            <div className='text-2xl my-2'>{province}</div>
                            <div className='text-2xl my-2'>{lastName}</div>
                            <div className='text-2xl my-2'>{name}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about that user */}
            <div>
                <AboutUser name={name}
                personalInfo={personalInfo} />
            </div>
        </main>
    )
}


export default Profile