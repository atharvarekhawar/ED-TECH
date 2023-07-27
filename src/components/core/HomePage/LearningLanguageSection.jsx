import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './Button'
const LearningLanguageSection = () => {
  return (
    <div className='my-28'>
      <div className='flex flex-col md:items-center gap-5'>
        <div className='text-4xl font-semibold md:text-center'>
          Your Swiss kinfe for
          <HighlightText
            text={'learning any language'}
          />
        </div>
        <div className='text-base font-medium md:text-center text-richblack-600 md:mx-auto w-[70%]'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center mt-5'>
          <img
            src={know_your_progress}
            alt='Know your progress'
            className='object-contain md:-mr-32'
          />
          <img
            src={compare_with_others}
            alt='Compare with others'
            className='object-contain '
          />
          <img
            src={plan_your_lesson}
            alt='plan your lesson'
            className='object-contain md:-ml-36'
          />
        </div>
        <div className='w-fit mx-auto'>
          <CTAButton
            active={true}
            linkto={"/signup"}
          >
            Learn more
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection