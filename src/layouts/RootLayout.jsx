// import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Nav from '../components/newNavbar/nav'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='min-h-screen w-full'>
        <header className=''>
            {/* <Navbar /> */}
            <Nav/>
        </header>
        <main className='min-h-screen'><Outlet /></main>
        <Footer/>
    </div>
  )
}

export default RootLayout