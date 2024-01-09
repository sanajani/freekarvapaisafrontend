/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

// pages
const RootLayout = lazy(() => import('../layouts/RootLayout'));
const Home = lazy(() => import('../pages/Home'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Hire = lazy(() => import('../pages/Hire'))
const HireDataPage = lazy(() => import('../pages/HireDataPage'))
const JobSecers = lazy(() => import('../pages/JobSecers'))
const Employ = lazy(() => import('../components/Employ'))
const CreateWorkerAccount = lazy(() => import('../components/workeraccount/CreateWorkerAccount'))
const AllJobs = lazy(() => import('../pages/AllJobs'))
const PhoneNumberVerifier = lazy(() => import('../pages/PhoneNumberVerifier'))

import ProtectPhoneNumberPage from '../protectedRoutes/ProtectPhoneNumberPage';
import ProtectedRoutesForPhoneNumber from '../protectedRoutes/ProtectedRoutesForPhoneNumber';
import WorkerAccountProtect from '../protectedRoutes/WorkerAccountProtect';
import UserProfileTable from '../components/UserProfileTable';

import Fallback from '../components/Fallback';
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
        <Route path='/' element={<Suspense fallback={<Fallback />}><RootLayout/></Suspense>}>
            <Route index element={<Suspense fallback={<Fallback/>}><Home/></Suspense>} />
            <Route path='/signup-phone-number' element={<ProtectPhoneNumberPage><PhoneNumberVerifier/></ProtectPhoneNumberPage>} />
            <Route path='employer' element={<Employ/>} />
            <Route path='worker-profile' element={<UpdateWorker/>} />
            <Route path='admin-account' element={<UpdateAdminAccount/>} />
            <Route path='workers' element={<JobSecers/>} />
            <Route path='jobs' element={<AllJobs/>} />
            <Route path='admin-account/:title' element={<UpdateJob/>} />
            <Route path='admin/form' element={<AdminProtectedFile><Admin/></AdminProtectedFile>} />
            <Route path='userprofile/:id' element={<Suspense fallback={<Fallback/>}><UserProfileTable/></Suspense>} />
            <Route path='showSingleJob/:id' element={<Suspense fallback={<Fallback/>}><ShowSingleJob/></Suspense>} />
            <Route path='hire-form' element={<ProtectHireForm><HireDataPage/></ProtectHireForm>} />
            <Route path='worker-account' element={<ProtectedRoutesForPhoneNumber><WorkerAccountProtect><CreateWorkerAccount/></WorkerAccountProtect></ProtectedRoutesForPhoneNumber>} />
            <Route path='hire' element={<Suspense fallback={<Fallback/>}><Hire/></Suspense>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem jobs Admin
// git branch --unset-upstream