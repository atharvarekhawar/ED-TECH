import React from 'react'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div>
            {/* section 1 */}
            <div className='relative mx-auto flex flex-col w-11/12 lg:items-center text-white justify-between'>

                <Link to={"/signup"}>
                    <div className='group mt-16 p-1  rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit '>
                        <div className='flex gap-2 justify-center items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='lg:text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"} />
                </div>

                <div className='mt-4 w-[80%] lg:text-center text-lg font-bold text-richblack-300'>
                    <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
                </div>

                <div className='flex gap-7 mt-8 mx-auto'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 relative video-container'>
                    <div className='video-shadow hidden md:flex'></div>
                    <video muted loop autoPlay>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                <div>
                    <CodeBlocks
                        position={"flex-col lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighlightText text={"coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css"\n/head>\nh1><ahref="/">Header</a>\n/h1>\n nav><ahref="one/">One</a><ahref="two/">Two<\n/a><ahref="three/">Three</a>\n/nav> >`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                <div>
                    <CodeBlocks
                        position={"flex-col lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Start
                                <HighlightText text={"coding potential "} />
                                coding in seconds
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css"\n/head>\nh1><ahref="/">Header</a>\n/h1>\n nav><ahref="one/">One</a><ahref="two/">Two<\n/a><ahref="three/">Three</a>\n/nav> >`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                <ExploreMore />
            </div>

            {/* section 2 */}

            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex gap-7 text-white'>
                            <CTAButton
                                active={true}
                                linkto={'/signup'}
                            >
                                <div className='flex items-center gap-3'>
                                    <p>Explore Full Catalog</p>
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton
                                active={false}
                                linkto={'/signup'}
                            >
                                <div className='flex items-center gap-3'>
                                    <p>Learn more</p>
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <div className='flex flex-col md:flex-row gap-7 mb-10 mt-[100px]'>
                        <div className='text-4xl font-semibold md:w-[50%]'>
                            Get the Skills you need for a
                            <HighlightText
                                text={"Job that is in demand"}
                            />
                        </div>
                        <div className='flex flex-col gap-10 md:w-[50%] items-start'>
                            <div className='text-[16px]'>The modern StudyNotion is dictating its own terms. Today, to be a good copetitive specialist requires more than professsional skills.</div>
                            <CTAButton active={true} linkto={'/signup'}>
                                Learn more
                            </CTAButton>
                        </div>
                    </div>
                    <TimelineSection />

                    <LearningLanguageSection />
                </div>


            </div>

            {/* section 3 */}

            <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                <InstructorSection />
            </div>

            {/* section 4 */}

            <Footer />

        </div>
    )
}

export default Home