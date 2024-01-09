import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorText from './ErrorText'
import Select from 'react-select'
import { list_of_districts } from '../utils/provincename'

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import Tags from './Tags';

const HireComponent = () => {
    const [showMore,setShowMore] = useState();
  return (
    <div className='max-w-[400px] mx-auto'>
      <h1 className='text-center text-3xl font-bold my-4'>ثبت آگاهی استخدام</h1>
        <Formik>
          <Form>
            {/* first div */}
            <div className='p-4 shadow-xl rounded-xl'>
                <div className='flex flex-col my-3 mx-1'>
                <label
                    className='text-right my-1 text-base sm:text-lg md:text-xl'
                    htmlFor='placeofjob'
                >
                    محل کار
                </label>
                <Field
                    id='placeofjob'
                    name='placeofjob'
                    type='text'
                    className='text-right outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
                    placeholder='نام شرکت سازمان یا کارگاه محل کار را بنویسید'
                />
                <ErrorMessage component={ErrorText} name='placeofjob' />
                </div> 
                <div className='flex flex-col my-3 mx-1'>
                <label
                    className='text-base sm:text-lg md:text-xl'
                    htmlFor='jobTitle'
                >
                    عنوان شغل
                </label>
                <Field
                    id='jobTitle'
                    name='jobTitle'
                    type='jobTitle'
                    className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
                    placeholder='مثل داکتر اینجینیر یا حسابدار'
                />
                <ErrorMessage component={ErrorText} name='jobTitle' />
                </div>
                <div className='flex flex-col my-3 mx-1'>
                <label
                    className='text-base sm:text-lg md:text-xl'
                    htmlFor='city'
                >
                    شهر
                </label>
                <Select
                options={list_of_districts}
                placeholder='شهر یا منطقه این شغل'
                />
                </div>
            </div>
            {/* end of first div */}

            {/* show more */}
            <div className='shadow-2xl p-4 my-5 rounded-xl bg-white'>
                <div className='border-2 inline-block rounded-full border-gray-300' >
                    <span className='flex gap-2 items-center px-3 py-1 cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? "گذینه های بیشتر" : "گذینه های کمتر"} {showMore ? <FaArrowDown />:<FaArrowUp/>}</span>
                </div>
                {/* show more data if needed */}
                <div>
                    {/* get job tags from user */}
                    <div>
                        <Tags/>
                    </div>
                    {/* time of job */}
                    
                    <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>


                    {/* end of time of job */}
                </div>
            </div>
            {/* end of show moew */}

            {/* about the job */}
            <div className='flex flex-col my-3 mx-1 shadow-2xl p-4 rounded-xl bg-white'>
                <label
                    className='text-base sm:text-lg md:text-xl'
                    htmlFor='jobDesc'
                >
                    درمورد آگاهی
                </label>
                <Field
                    id='jobDesc'
                    name='jobDesc'
                    type='jobDesc'
                    className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
                    placeholder='توضیحات کامل شغل شرح وظایف شرایط استخدام نیازمندی ها وغیره'
                    as='textarea'
                />
                <ErrorMessage component={ErrorText} name='jobDesc' />
            </div>
            {/* about the job */}

            {/* poster contact info */}
            <div className='shadow-2xl rounded-xl mt-8 bg-white'>
                <h1>شیوه ارتباط با کارجو</h1>
                <div className='flex flex-col my-3 mx-1'>
                <label
                    className='text-right my-1 text-base sm:text-lg md:text-xl'
                    htmlFor='posterName'
                >
                    نام فرد پاسخگو
                </label>
                <Field
                    id='posterName'
                    name='posterName'
                    type='text'
                    className='text-right outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
                    placeholder='نام فرد یا بخشی که پاسخگوی تماس کارجویان است را وارد کنید'
                />
                <ErrorMessage component={ErrorText} name='posterName' />
                </div>
                <div className='flex flex-col my-3 mx-1'>
                <label
                    className='text-right my-1 text-base sm:text-lg md:text-xl'
                    htmlFor='posterContactNumber'
                >
                    شماره تماس
                </label>
                <Field
                    id='posterContactNumber'
                    name='posterContactNumber'
                    type='text'
                    className='text-right outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
                    placeholder='شماره تماس'
                />
                <ErrorMessage component={ErrorText} name='posterContactNumber' />
                </div>
            </div>
            {/* end of poster contact info */}

          </Form>
        </Formik>
    </div>
  )
}

export default HireComponent
