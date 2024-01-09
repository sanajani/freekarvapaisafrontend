/* eslint-disable react/prop-types */
import { Formik, Form } from 'formik'
import Select from 'react-select'
import { list_of_districts } from '../../utils/provincename'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import Tags from '../Tags';
import FormikControll from './FormikControll';
import { kindOfJobOptionsForCheckbox,checkBoxLanguages,radioOptionforeducations,genderOfSecer,distanceCheckBox,maridOptions } from './FormValues';
import WhyShouldTakeUs from '../WhyShouldTakeUs';
import ToastContain from '../toast/ToastContainer';


const FormikComponents = ({initialValues,isHireDataPage,validationSchema,onSubmit,setSelectCity,setSkills,selectCity,skills}) => {
    const handleKeyPress = (e) => {
        // Prevent form submission on Enter key press
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      };
    const [showMore,setShowMore] = useState();
  return (
    <div className='max-w-[400px] mx-auto'>
    <h1 className='text-center text-3xl border-b-2 mb-3 font-bold my-4'>
        { isHireDataPage ?` ثبت آگاهی استخدام ` : 'به روز رسانی فورم استخدام'}
         </h1>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        <Form onKeyDown={handleKeyPress}>
            {/* comon inputs */}
            <div className='p-4 border-t-2 shadow-xl rounded-xl'>
                <FormikControll
                    controll='input'
                    label="محل کار"
                    name='jobLocation'
                    type='text'
                    id='jobLocation'
                    placeholder='نام شرکت سازمان یا کارگاه محل کار را بنویسید'
                />
                <FormikControll
                    controll='input'
                    label="عنوان شغل"
                    type='text'
                    name='jobTitle'
                    id='jobTitle'
                    placeholder='مثل داکتر اینجینیر یا حسابدار'
                />
                <div className='flex flex-col my-3 mx-1 text-right'>
                <label  className='text-right my-2 text-sm font-bold sm:text-base' htmlFor='city'>شهر</label>
                <Select
                options={list_of_districts}
                placeholder='شهر یا منطقه این شغل'
                defaultValue={selectCity}
                onChange={setSelectCity}
                />
                </div>
            </div>
            {/*end comon inputs */}

            {/* show more */}
            <div className={`shadow-2xl p-4 my-5 rounded-xl bg-white border-t-2`}>
                <div className='border-2 inline-block rounded-full border-gray-300' >
                    <span className='flex gap-2 items-center px-3 py-1 cursor-pointer' onClick={() => setShowMore(!showMore)}>{!showMore ? "گذینه های بیشتر" : "گذینه های کمتر"} {!showMore ? <FaArrowDown />:<FaArrowUp/>}</span>
                </div>

                {/*start of first section of show more */}
                <div className={`shadow-md p-4 my-5 rounded-xl bg-white border-t-2 transition-all ${showMore ? 'block' : 'hidden'}`}>

                    {/* show more data if needed */}
                    <div>
                        {/* get job tags from user */}
                        <div>
                            <Tags skills={skills} setSkills={setSkills} />
                        </div>
                        {/*end of get job tags from user */}

                        {/* time of job */}
                        <div className='my-2'>
                        <FormikControll
                            controll='checkbox'
                            label="نحوه همکاری"
                            name='kindOfWorkerNeeded'
                            options={kindOfJobOptionsForCheckbox}
                        />
                        </div>
                    <div className='my-2'>
                    <FormikControll
                            controll='checkbox'
                            label="امکان دورکاری"
                            name='possibleToWorkFromLongDistance'
                            options={distanceCheckBox}
                        />
                    </div>
                        {/* end of time of job */}

                        {/* education level */}
                        <div className='my-4'>
                            <FormikControll
                                controll='radio'
                                name='educationLevelNeededForJob'
                                options={radioOptionforeducations}
                                label="مدرک تحصیلی"
                            />
                        </div>
                        {/*end of education level */}

                        {/* how many members you want to  */}
                    <div>
                        <FormikControll
                                controll='input'
                                type='number'
                                label="تعداد افرادی که می‌خواهید استخدام کنید"
                                name='amoundOfPeopleToGetHire'
                                id='amoundOfPeopleToGetHire'
                                placeholder='تعداد افراد که قصد استخدام دارید'
                                left={true}
                                min='1'
                                max='40000'
                            />
                    </div>
                        {/* how many members you want to  */}
                    </div>
                </div>
                {/*end of first section of show more */}
            

                {/* start of second section of show more  */}
                <div className={`shadow-md p-4 my-5 rounded-xl bg-white border-t-2 transition-all ${showMore ? 'block' : 'hidden'}`}>
                    <div>
                        <FormikControll
                            label='زبانها'
                            controll='checkbox'
                            name='languagesNeededForJob'
                            options={checkBoxLanguages}  
                        />
                    </div>
                    <div className='my-4'>
                            <FormikControll
                                controll='radio'
                                name='genderOFApplier'
                                options={genderOfSecer}
                                label="جنسیت کارجو"
                            />
                        </div>
                        
                    <div className='my-4'>
                        <FormikControll
                            controll='radio'
                            name='SingleOrMerried'
                            options={maridOptions}
                            label="وضعیت تاهل کارجو"
                        />
                    </div>
                </div>
                {/* end of second section of show more  */}

            </div>
            {/* end of show more */}

            {/* about the job */}
            <div className='flex border-t-2 flex-col my-3 mx-1 shadow-2xl p-4 rounded-xl bg-white'>
                <FormikControll
                    name='jobDesc'
                    label='درمورد آگاهی'
                    placeholder='توضیحات کامل شغل شرح وظایف شرایط استخدام نیازمندی ها وغیره'
                    controll='textarea'
                    // type='text'
                    id='jobDesc'
                />
            </div>
            {/* about the job */}

            {/* poster contact info */}
            <div className='shadow-2xl rounded-xl mt-8 bg-white py-2 px-2 mb-4 border-t-2'>
                <h1 className='text-right mt-2 font-semibold tracking-wider text-xl'>شیوه ارتباط با کارجو</h1>
                <FormikControll
                label='نام فرد پاسخگو'
                controll='input'
                type='text'
                name='nameOfJobPoster'
                id='nameOfJobPoster'
                placeholder='بخشی که پاسخگوی تماس کارجویان است را وارد کنید'
                />
                {/* controll='checkbox' */}

                <FormikControll
                controll='input'
                label=' شماره تماس'
                id='contactNumberOfJobPoster'
                name='contactNumberOfJobPoster'
                type='text'
                placeholder='شماره تماس'
                left={true}
                />
            </div>
            {/* end of poster contact info */}

            {/* about us */}
            <div className='shadow-2xl rounded-xl mt-8 bg-white py-2 px-2 mb-4 border-t-2'>
                <WhyShouldTakeUs/>
            </div>
            {/* end of about us */}
            <button
            type='submit'
                className='bg-yellow-400 text-gray-900 font-semibold sm:font-bold sm:text-lg shadow-lg w-full my-5 py-2 rounded-xl'
            >
               {isHireDataPage ? ` نشر آگاهی ` : 'به روز رسانی'}
            </button>
        </Form>
    </Formik>
    <ToastContain />
    </div>
  )
}

export default FormikComponents