import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImg from '../../../assets/Images/TimelineImage.png'

const timeline = [
    {
        Logo: Logo1,
        heading: 'Leadership',
        Description: "Fully committed to the success of the company "
    },
    {
        Logo: Logo2,
        heading: 'Responsibility',
        Description: "Fully committed to the success of the company "
    },
    {
        Logo: Logo3,
        heading: 'Flexibility',
        Description: "Fully committed to the success of the company "
    },
    {
        Logo: Logo4,
        heading: 'Solve the problem',
        Description: "Fully committed to the success of the company "
    },
]

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 md:items-center'>
                <div className='md:w-[45%] flex flex-col gap-5'>
                    {
                        timeline.map((item, index) => (
                            <div className='flex gap-7 items-center' key={index}>
                                <img className="w-[30px] h-[30px] bg-white" src={item.Logo} alt='logo' />
                                <div>
                                    <h2 className='text-[18px] font-semibold'>{item.heading}</h2>
                                    <p className='text-base'>{item.Description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='relative shadow-blue-200'>
                    <img src={timelineImg} alt="Img"
                        className='object-cover h-fit'
                    />
                    <div className='absolute md:w-[420px] bg-caribbeangreen-700 flex flex-col gap-4 md:flex-row text-white uppercase py-5 md:py-10 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='flex items-center gap-5  md:border-r-2 border-caribbeangreen-300 px-7'>
                            <p className='text-xl md:text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-xs md:text-sm'>Years of Experience</p>
                        </div>
                        <div className='flex items-center gap-5 px-7'>
                            <p className=' text-xl md:text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-xs md:text-sm'>Types of Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection