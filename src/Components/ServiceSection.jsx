import React from 'react'

const ServiceSection = () => {

    let ServiceSectionData = [
        {
            id:1,
            title: 'Teeth Whitening',
            content : 'Cosmetic treatment to enhance the whiteness of teeth',
            btn : 'Read More',
            img : 'dental1.png'
        },
        {
            id:2,
            title: 'Dental Implant',
            content : 'Surgical placement of artificial tooth roots',
            btn : 'Read More',
            img : 'dental1.png'
        },
        {
            id:3,
            title: 'Teeth Fillings',
            content : 'Restorative procedures to repair cavities and damaged teeth',
            btn : 'Read More',
            img : 'dental2.png'
        },
        {
            id:4,
            title: 'Oral Surgery',
            content : 'Surgical procedures, including extractios and dental implants',
            btn : 'Read More',
            img : 'dental3.png'
        },
        {
            id:5,
            title: 'Crown and Bridges',
            content : 'Restoration options for damaged or missing teeth',
            btn : 'Read More',
            img : 'dental4.png'
        },
        {
            id:6,
            title: 'Periodontal Care',
            content : 'Services for gum health, including scalling and root planing',
            btn : 'Read More',
            img : 'dental5.png'
        },
    ]

    const uniqueBgColor = [
        'bg-[#FFD580]',
        'bg-[#FFB6C1]',
        'bg-[#ADD8E6]',
        'bg-[#FFB6C1]',
        'bg-[#ADD8E6]',
        'bg-[#FFD580]',
    ]

  return (
    <>
        <section className='w-[80%] mx-auto my-[120px]'>
            <h1 className='text-[#89DB7B] font-bold text-center'>Satisfy Solution</h1>
            <h2 className='font-bold text-center my-[10px] sm:text-3xl text-2xl'>The Best Dental Treatment</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-8 mt-[50px]'>
                    {
                        ServiceSectionData.map((values,index) => {
                            return(
                                <div key={index} className={`relative h-full  px-5 py-10 rounded-2xl ${uniqueBgColor[index]}`}>
                                        <h2 className='w-[70%] font-bold text-2xl py-1'>{values.title}</h2>
                                        <p className='w-[55%] pt-1 pb-9'>{values.content}</p>
                                        <button className='my-3 bg-[white] px-7 cursor-pointer font-bold text-[15px] py-3 rounded-full absolute bottom-[1%]'>{values.btn}</button>
                                        <img src={values.img} alt="dental_image" className='absolute lg:h-[55%] xl:h-full h-[70%] sm:h-[80%] md:h-[65%] right-0 bottom-0'/>
                                </div>
                            )
                        })
                    }
            </div>
        </section>
    </>
  )
}

export default ServiceSection;
