import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa"

const InstructorSection = () => {
    return (
        <div className='p-8 md:p-14'>
            <div className='flex flex-col-reverse md:flex-row gap-20 md:items-center '>
                <div className='md:w-1/2'>
                    <img src={Instructor} alt="img"
                        className='shadow-white'
                    />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center gap-10'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Become an
                        <HighlightText text={"Instructor"} />
                    </div>

                    <p className='font-medium text-[16px] w-[90%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                    <div className='w-fit'>
                        <CTAButton
                            active={true}
                            linkto={'/signup'}
                            className='w-[100px]'
                        >
                            <div className='flex items-center gap-3 '>
                                <p>Start Teaching today</p>
                                <FaArrowRight />
                            </div>

                        </CTAButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InstructorSection