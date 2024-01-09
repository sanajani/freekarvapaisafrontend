import { IoMdCheckmark } from 'react-icons/io'

const WhyShouldTakeUs = () => {
  return (
    <div className='bg-white text-black w-[90%] px-5 rounded-2xl mx-auto py-3'>
    <h2 className='text-xl text-bold text-right px-5 my-2 md:mb-5'>
      مزایای ثبت آگهی در کار و پیسه
    </h2>
    <p className='text-sm text-right gap-2  flex justify-between my-2'>
      نمایش آگهی شما بالاتر از بیش از ۶۰۰هزار آگهی‌ وبسایت‌های دیگر
      <IoMdCheckmark size={22} />
    </p>
    <p className='text-sm text-right gap-2  flex justify-between my-2'>
      تماس کارشناس (مرتبط با کارجویان) با شما و بهبود اطلاعات آگهی
      <IoMdCheckmark size={22}/>
    </p>
    <p className='text-sm text-right gap-2  flex justify-between my-2'>
      
      امکان جستجو در اطلاعات کارجویان موجود و انتخاب کارجوی مناسب
      <IoMdCheckmark size={22}/>
    </p>
  </div>
  )
}

export default WhyShouldTakeUs