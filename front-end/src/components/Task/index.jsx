import React from "react";
import { Text, Button, Img } from "./..";

export default function Task({
  addTask = "Write a 2 page essay",
  due = "Due at 11:59pm",
  timeLeft = "6 minutes",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[57%] ml-1 gap-4">
        <Button className="w-[48px] mb-px rounded-lg">
          <Img src="images/img_depth_6_frame_0_gray_900.svg" />
        </Button>
        <div className="flex flex-col items-start justify-start w-[31%] gap-0.5">
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-row justify-start w-full">
              <Text size="s" as="p" className="!text-gray-900 !font-medium">
                {addTask}
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-start w-[63%]">
            <div className="flex flex-row justify-start w-full">
              <Text as="p">{due}</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-[8%] mr-1">
        <div className="flex flex-row justify-center w-full">
          <Text size="s" as="p" className="!text-gray-900">
            {timeLeft}
          </Text>
        </div>
      </div>
    </div>
  );
}
