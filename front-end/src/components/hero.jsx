import React from "react";
import { Button, Text, Heading } from ".";

export default function Hero({
  heroText = "Get organized and stay focused",
  heroDesciption = "Manage your time, organize your tasks, and track your progress with StudyGenius.",
  signUp = "Sign Up",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full mt-[143px] mx-auto max-w-[759px]">
        <div className="flex flex-col items-center justify-start w-full pt-1.5 gap-px">
          <Heading size="2xl" as="h1" className="!text-white-A700 tracking-[-1.58px]">
            {heroText}
          </Heading>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-start w-full">
              <Text size="s" as="p" className="!text-white-A700">
                {heroDesciption}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Button color="blue_A700" size="md" className="ml-[55px] tracking-[0.24px] font-bold min-w-[105px]">
        {signUp}
      </Button>
    </div>
  );
}
