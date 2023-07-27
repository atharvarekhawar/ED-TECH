import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
]
const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);  
        setCurrentCard(result[0].courses[0].heading);
    }
    return (
        <div className='relative pb-[850px] lg:pb-60 w-full mt-12'>
            <div className='text-4xl font-semibold lg:text-center'>
                Unlock the
                <HighlightText text={"Power of Code"} />
            </div>

            <p className='lg:text-center text-richblack-300 text-[16px] mt-3'>
                Learn to Build Anything You Can Imagine
            </p>

            <div className='w-full sm:w-fit lg:mx-auto flex  rounded-full bg-richblack-800 my-5 p-1 lg:gap-1'>
                {
                    tabsName.map((tab, index) => (
                        <div className={`text-[8px] md:text-[12px] lg:text-[16px] flex items-center gap-2
                                ${currentTab === tab ? "bg-richblack-900 text-richblack-5 font-medium"
                                : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                                hover:bg-richblack-900 hover:text-richblack-5 px-5 lg:px-7 py-2`}
                            key={index}
                            onClick={() => setMyCards(tab)}>
                            {tab}
                        </div>
                    ))
                }
            </div>

            <div className='absolute flex flex-col lg:flex-row gap-10 text-black justify-between w-full md:-bottom-[120px]'>
              {
                courses.map((course,index)=>(
                    <CourseCard
                        key={index}
                        cardData={course}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                ))
              }
            </div>

        </div>
    )
}

export default ExploreMore