import React from 'react'
import { MdPeople } from 'react-icons/md'
import { BiGitRepoForked } from 'react-icons/bi'

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    return (
        <div className={`${currentCard === cardData.heading ? 'bg-white card-container' : 'bg-richblack-800'}
            p-2 sm:p-4 min-h-[300px] flex flex-col gap-2 w-full cursor-pointer`}
            onClick={()=>setCurrentCard(cardData.heading)}>

            <div className='flex flex-col gap-4 px-4 pt-6 pb-14 '>
                <p className={`${currentCard === cardData.heading ? 'text-richblack-800' : 'text-white'}
            text-xl font-semibold`}>{cardData.heading}</p>
                <p className={`${currentCard === cardData.heading ? 'text-richblack-500' : 'text-richblack-400'}
            text-base font-normal`}>{cardData.description}</p>
            </div>

            <div className='flex items-center justify-between p-4'>
                <div className={`flex items-center gap-2 ${currentCard === cardData.heading ? 'text-blue-500':'text-richblack-300'}`}>
                    <MdPeople />
                    <p className='font-medium text-base'>{cardData.level}</p>
                </div>
                <div className={`flex items-center gap-2 ${currentCard === cardData.heading ? 'text-blue-500':'text-richblack-300'}`}>
                    <BiGitRepoForked />
                    <p className='font-medium text-base'>{cardData.lessionNumber} Lessons</p>
                </div>
            </div>

        </div>
    )
}

export default CourseCard