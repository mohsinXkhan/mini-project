import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "components";
import Task from "components/Task";

export default function Todo() {
  return (
    <>
      <Helmet>
        <title>todoApp</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full bg-white-A700">
            <header className="flex justify-center items-center w-full p-3 border-gray-200 border-b border-solid">
              <div className="flex flex-row justify-center items-center w-full mx-auto max-w-[1200px]">
                <div className="flex flex-row justify-center w-[11%]">
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <Img
                      src="images/img_depth_6_frame_0_gray_900_16x16.svg"
                      alt="image"
                      className="h-[16px] w-[16px]"
                    />
                    <div className="flex flex-row justify-start w-[74%]">
                      <div className="flex flex-row justify-start w-full">
                        <Heading size="md" as="h6" className="tracking-[-0.27px]">
                          LearnFast
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[90%] pl-[605px] gap-8">
                  <ul className="flex flex-row justify-between w-[60%] py-2">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Learn
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Teach
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Schools
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-row justify-start w-[19%] gap-2">
                    <Button size="xs" className="w-[40px]">
                      <Img src="images/img_depth_5_frame_0.svg" />
                    </Button>
                    <Button size="xs" className="w-[40px]">
                      <Img src="images/img_depth_5_frame_1.svg" />
                    </Button>
                  </div>
                  <Img
                    src="images/img_depth_4_frame_2.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-row justify-center w-full p-5">
              <div className="flex flex-col items-center justify-start w-full max-w-[960px]">
                <div className="flex flex-row justify-center w-full p-4">
                  <div className="flex flex-col items-start justify-end h-[480px] w-full gap-8 p-6 bg-gradient bg-[url(/public/images/img_depth_6_frame_0_480x928.png)] bg-cover bg-no-repeat rounded-[12px]">
                    <div className="flex flex-row justify-start w-[61%] mt-[244px] ml-[31px]">
                      <div className="flex flex-col items-start justify-start w-full pt-2 gap-px">
                        <Heading size="2xl" as="h1" className="!text-white-A700 tracking-[-1.58px]">
                          Welcome back, Jenny!
                        </Heading>
                        <div className="flex flex-row justify-start w-[92%]">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="s" as="p" className="!text-white-A700">
                              Stay on top of your assignments and due dates with LearnFast
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-center sm:justify-end w-[55%] sm:w-[55%] ml-[31px] p-2 sm:ml-[] sm:m-[] bg-white-A700 rounded-[12px]">
                      <div className="flex flex-row justify-start items-center w-[81%] gap-4">
                        <Img src="images/img_search.svg" alt="search_one" className="h-[20px] w-[20px]" />
                        <div className="flex flex-row justify-start w-[23%]">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="s" as="p">
                              Add a task
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end w-[19%]">
                        <div className="flex flex-row justify-center w-full p-3 bg-blue-A700 rounded-[12px]">
                          <div className="flex flex-row justify-center w-[54%]">
                            <Heading
                              as="h2"
                              className="flex justify-center items-center w-[32px] h-[24px] p-px !text-white-A700 tracking-[0.24px] bg-blue-A700"
                            >
                              Add
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full pb-3">
                  <div className="flex flex-row justify-start w-[97%] gap-8 border-gray-300 border-b border-solid">
                    
                
                    <div className="flex flex-row justify-start w-[8%] py-3.5 border-gray-200 border-b-[3px] border-solid">
                      <div className="flex flex-row justify-start w-full mt-[3px]">
                        <div className="flex flex-row justify-start w-full">
                          <Heading size="xs" as="h1" className="!text-blue_gray-500 tracking-[1.21px] text-center">
                            Upcoming Tasks
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-px">
                  <Task className="flex flex-row justify-between w-full p-[11px] bg-white-A700" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full max-w-[960px]">
                <div className="flex flex-col items-center justify-center w-full gap-6 p-5">
                  <div className="flex flex-row justify-between items-center w-full mt-5 px-[23px]">
                    
                    
                  </div>
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
