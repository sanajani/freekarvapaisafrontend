import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { BiAddToQueue } from "react-icons/bi";

// bg-red 
const Nav = () => {
    const workerInformation = useSelector((state) => state.user)
    const adminInformation = useSelector((state) => state.admin)
    const isPhoneNumber = useSelector((state) => state.phoneNumber)
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav className={`max-w-full py-2 text-black text-left bg-blue-500 shadow-md flex justify-between items-center px-2 relative`}>
        <div className='flex h-full items-center mx-10 gap-10'>
            {
                <h1 className='text-white md:text-lg font-bold capitalize hover:bg-yellow-500 cursor-pointer'>
                    <Link to={adminInformation?.adminData && '/admin-account' || workerInformation?.user && '/worker-profile'}>
                    {adminInformation?.adminData && adminInformation?.adminData?.name || workerInformation?.user && workerInformation?.user?.name || 'User'}
                    </Link>
                </h1>
            }
            <Link
            className='text-sm hidden md:block bg-blue-900 px-5 py-2 rounded-full text-white font-semibold  hover:bg-gray-800 transition-all hover:text-yellow-500'
             to={adminInformation?.adminData ? `/hire-form`: '/hire'}
            > {adminInformation?.adminData ? 'ثبت آگاهی استخدام ' : "بخش کارفرمایان" }
            </Link>
            {!isPhoneNumber?.phoneNumber && <Link to='/signup-phone-number' className='bg-blue-900 text-white font-bold py-1 px-3 rounded-full hidden md:inline-block'>درست کردن حساب</Link>}
        </div>
        <div className='flex items-center gap-3'>
            <Link to='/'>
            <FaSearch className='text-white' />
            </Link>
            <span className='cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
            >
                <AiOutlineMenu size={28} className='text-white' />
            </span>
        </div>
        <div className={`${menuOpen ? 'md:w-[300px] w-[200px] transition-all' : 'w-0 hidden overflow-hidden transition-all'} shadow-xl bg-gray-50 right-0 z-50 absolute top-0 h-screen transition-all flex flex-col items-end overflow-hidden`}>
            <div className='bg-gray-200 w-full'>
            <span className='border-2 font-bold border-black cursor-pointer inline-block m-3 rounded-full text-black p-1 float-right' 
            onClick={() => setMenuOpen(!menuOpen)}
            >
                <AiOutlineClose size={24}  />
            </span>
            </div>
            <ul className='mt-6 px-4 text-right flex flex-col items-end w-full'>
                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link
                    onClick={() => setMenuOpen(false)}
                    to='/jobs'  className='flex items-center gap-2'>فرصت‌های شغلی <FaSearch /></Link>
                </li>

                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link
                    onClick={() => setMenuOpen(false)}
                    to='/workers'  className='flex items-center gap-2'>کارمند برای کار <BiAddToQueue /></Link>
                </li>

                <li className='my-4 px-4 font-semibold border-b-2 pb-2'>
                    <Link
                    onClick={() => setMenuOpen(false)}
                    to={workerInformation?.user ? '/worker-profile' : `/worker-account`} className='flex items-center gap-2'>
                        {workerInformation?.user ?'به روز رسانی حساب':'درست کردن حساب کاربری'}
                    <IoMdPersonAdd />
                    </Link>
                </li>
                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link
                    onClick={() => setMenuOpen(false)}
                    to='/hire-form' className='flex items-center gap-2'>ثبت آگاهی استخدام <FaPlusSquare /></Link>
                </li>
                {!adminInformation?.adminData && <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link
                to={!adminInformation?.adminData ? '/admin-form' : 'admin-account'}
                    onClick={() => setMenuOpen(false)}
                    className='flex items-center gap-2'>
                        {!adminInformation?.adminData ? `میخام وظیفه پوست کنم`:'وظایف پوست شده من'}
                    <IoPersonSharp /></Link>
                </li>}
            </ul>
        </div>
    </nav>
  )
}

export default Nav
