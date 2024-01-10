/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// pages
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import Hire from '../pages/Hire'
import HireDataPage from '../pages/HireDataPage'
import JobSecers from '../pages/JobSecers'
import Employ from '../components/Employ'
import CreateWorkerAccount from '../components/workeraccount/CreateWorkerAccount';
import AllJobs from '../pages/AllJobs';
import PhoneNumberVerifier from '../pages/PhoneNumberVerifier';
import ProtectPhoneNumberPage from '../protectedRoutes/ProtectPhoneNumberPage';
import ProtectedRoutesForPhoneNumber from '../protectedRoutes/ProtectedRoutesForPhoneNumber';
import WorkerAccountProtect from '../protectedRoutes/WorkerAccountProtect';
import UserProfileTable from '../components/UserProfileTable';
import Admin from '../components/createAdmin/Admin';
import ShowSingleJob from '../components/showSingleJob/ShowSingleJob';
import AdminProtectedFile from '../protectedRoutes/AdminProtectedFile';
import ProtectHireForm from '../protectedRoutes/ProtectHireForm'
import UpdateWorker from '../components/updateWorker/UpdateWorker';
import UpdateAdminAccount from '../components/updateAdminAccount/UpdateAdminAccount';
import UpdateJob from '../pages/UpdateJobComponent/UpdateJob';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path='signup-phone-number' element={<ProtectPhoneNumberPage><PhoneNumberVerifier/></ProtectPhoneNumberPage>} />
            <Route path='employer' element={<Employ/>} />
            <Route path='worker-profile' element={<UpdateWorker/>} />
            <Route path='admin-account' element={<UpdateAdminAccount/>} />
            <Route path='workers' element={<JobSecers/>} />
            <Route path='jobs' element={<AllJobs/>} />
            <Route path='admin-account/:title' element={<UpdateJob/>} />
            <Route path='admin/form' element={<AdminProtectedFile><Admin/></AdminProtectedFile>} />
            <Route path='userprofile/:id' element={<UserProfileTable/>} />
            <Route path='showSingleJob/:id' element={<ShowSingleJob/>} />
            <Route path='hire-form' element={<ProtectHireForm><HireDataPage/></ProtectHireForm>} />
            <Route path='worker-account' element={<ProtectedRoutesForPhoneNumber><WorkerAccountProtect><CreateWorkerAccount/></WorkerAccountProtect></ProtectedRoutesForPhoneNumber>} />
            <Route path='hire' element={<Hire/>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem jobs Admin
// git branch --unset-upstream