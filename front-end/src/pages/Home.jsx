import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../components";
import Hero from "../components/hero";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>todoApp</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full bg-white-A700">
            
          <header className="flex justify-center items-center w-full p-3 border-gray-200 border-b border-solid">
              <div className="flex flex-row justify-center items-center w-full mx-auto max-w-[1200px]">
                <div className="flex flex-row justify-center w-[11%]">
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    
                    <div className="flex flex-row justify-start w-[74%]">
                      <div className="flex flex-row justify-start w-full">
                        <Heading size="md" as="h6" className="tracking-[-0.27px]" href="#">
                          LearnFast
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[90%] pl-[605px] gap-8">
                  <ul className="flex flex-row justify-between w-[60%] py-2">
                    <li>
                      <a href="Home">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Todo">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Todo
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Our Team
                        </Text>
                      </a>
                    </li>
                  </ul>
                  
                  
                </div>
              </div>
            </header>
  
            <div className="flex flex-col items-center justify-start w-full p-5">
              <div className="flex flex-col items-center justify-start w-full pb-4 max-w-[960px]">
                <div className="flex flex-row justify-center w-full p-4">
                  <Hero className="flex flex-col items-start justify-end h-[480px] w-full gap-8 p-6 bg-gradient bg-[url(/public/images/img_depth_6_frame_0_421x944.png)] bg-cover bg-no-repeat rounded-[12px]" />
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full gap-10 p-[15px]">
                    <div className="flex flex-row justify-start w-full mt-6">
                      <div className="flex flex-col items-center justify-start w-[78%] gap-4">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-start w-full pt-[3px]">
                            <Heading size="xl" as="h3" className="tracking-[-1.19px]">
                              Features
                            </Heading>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-center w-full">
                            <Text size="s" as="p" className="!text-gray-900">
                              StudyGenius helps you manage your time, organize your tasks, and track your progress.
                              Whether you&#39;re a high school student or a college undergrad, StudyGenius is the
                              perfect tool for academic success.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full mb-6 gap-[11px]">
                      <div className="flex flex-col items-center justify-start w-[33%] gap-3">
                        <Img
                          src="images/img_depth_9_frame_0.png"
                          alt="task_list_one"
                          className="w-full object-cover rounded-[12px]"
                        />
                        <div className="flex flex-col items-center justify-start w-full pb-3">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="s" as="p" className="!text-gray-900 !font-medium">
                              Task List
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-full pt-[3px]">
                            <Text as="p">Stay on top of what&#39;s due next</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] gap-3">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_depth_9_frame_0_169x301.png"
                            alt="image"
                            className="w-full object-cover rounded-[12px]"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-3">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="s" as="p" className="!text-gray-900 !font-medium">
                              Planner
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-full pt-[3px]">
                            <Text as="p">Plan your study schedule</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] gap-3">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_depth_9_frame_0_1.png"
                            alt="image"
                            className="w-full object-cover rounded-[12px]"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-3">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="s" as="p" className="!text-gray-900 !font-medium">
                              Grade Tracker
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-full pt-[3px]">
                            <Text as="p">Track your grades and GPA</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full gap-[30px] p-10">
                    <div className="flex flex-row justify-center w-full mt-[39px]">
                      <div className="flex flex-col items-center justify-start w-[82%]">
                        <div className="flex flex-row justify-center w-[92%]">
                          <div className="flex flex-row justify-center w-full">
                            <Heading size="xl" as="h4" className="tracking-[-1.19px] text-center">
                              Join over 500,000 students who are getting better grades
                            </Heading>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-[17%]">
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-900 text-center">
                              Sign up for free
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[12%] mb-10">
                      <div className="flex flex-row justify-center w-full p-3 bg-blue-A700 rounded-[12px]">
                        <a href="#" className="flex justify-center items-center w-[65px] h-[24px] p-px bg-blue-A700">
                          <Heading as="h5" className="!text-white-A700 tracking-[0.24px]">
                            Sign Up
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full p-[11px]">
                  <div className="flex flex-row justify-start w-[15%] mt-2 ml-1">
                    <div className="flex flex-row justify-start w-full">
                      <Heading size="lg" as="h6" className="tracking-[-0.33px]">
                        Testimonials
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-[97%] mt-4 gap-[11px]">
                  <div className="flex flex-col items-start justify-start w-[33%] gap-3 p-4 border-gray-300 border border-solid bg-white-A700 rounded-lg">
                    <Img
                      src="images/img_depth_7_frame_0.png"
                      alt="circleimage"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start justify-start w-full mb-10 gap-px">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-center w-full">
                          <Heading as="h6">
                            I use StudyGenius every day to keep track of my assignments and deadlines. It&#39;s super
                            easy to use and has helped me stay on top of my school work.
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-[38%]">
                        <div className="flex flex-row justify-start w-full">
                          <Text as="p">Rachel, age 20</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[33%] gap-3 p-[15px] border-gray-300 border border-solid bg-white-A700 rounded-lg">
                    <Img
                      src="images/img_depth_7_frame_0_40x40.png"
                      alt="circleimage"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start justify-start w-[99%] gap-px">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-center w-full">
                          <Heading as="h6">
                            I&#39;ve been using StudyGenius for about a month now and it&#39;s been a game changer for
                            me. I love how I can organize my tasks by class and see everything I need to do in one
                            place.
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-[32%]">
                        <div className="flex flex-row justify-start w-full">
                          <Text as="p">Sam, age 22</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[33%] gap-3 p-4 border-gray-300 border border-solid bg-white-A700 rounded-lg">
                    <Img
                      src="images/img_depth_7_frame_0_1.png"
                      alt="circleimage"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-center justify-start w-full mb-[22px] gap-[3px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full">
                          <Heading as="h6">
                            I wish I had found StudyGenius sooner! It&#39;s made my life so much easier in college. I
                            can quickly add assignments, set due dates, and get reminders so I never miss a deadline.
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-start w-full">
                          <Text as="p">Emily, age 19</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-4 p-[11px]">
                  <div className="flex flex-row justify-start w-[33%] mt-2 ml-1">
                    <div className="flex flex-row justify-start w-full pt-0.5">
                      <Heading size="lg" as="h5" className="tracking-[-0.33px]">
                        Frequently Asked Questions
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[97%] mt-4 gap-3">
                  
                <Accordion preExpanded={[0]} className="flex flex-col w-[73%] mt-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <AccordionItem uuid={i} key={`expandablelisti${i}`}>
                <div className="flex flex-col items-center justify-start w-full gap-[7px] p-3.5 border-gray-300 border border-solid bg-white-A700 rounded-[12px]">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Text as="p" className="mt-px !text-gray-900 !font-medium">
                                Is StudyGenius really free?
                              </Text>
                              {props?.expanded ? (
                                <Img
                                  src="images/img_arrow_down.svg"
                                  alt="arrowdown_one"
                                  className="h-[20px] w-[20px]"
                                />
                              ) : (
                                <Img
                                  src="images/img_vector_0.svg"
                                  alt="vectorzero_one"
                                  className="h-[20px] w-[20px] mr-0.5"
                                />
                              )}
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="flex flex-col items-center justify-start w-[99%]">
                      <Text as="p">
                        Yes! StudyGenius is completely free to use. There are no hidden fees or premium features. We
                        believe that all students should have access to the tools they need to succeed, regardless of
                        their budget.
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
       
          <Img src="images/img_depth_5_frame_1_blue_gray_500.svg" alt="image_one" className="h-[24px]" />
              <div className="flex flex-row justify-center w-full mb-5">
                <div className="flex flex-row justify-center w-full">
                  <Text size="s" as="p" className="text-center">
                    Copyright © 2022 LearnFast
                  </Text>
                </div>
              </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
