import React from "react";
import Image from "next/image";
const Story = ({ Img, User }) => {
  return (
    <>
      <div className="mr-1  sm:h-[200px] sm:w-[120px] w-[50px] relative">
        <Image
          src={Img}
          height={200}
          width={120}
          objectFit="cover"
          className="rounded-lg"/>

          <div className="top-[3px] left-[3px] z-100 absolute rounded-full p-[1px] flex bg-[#3B82F6]">
          <Image
            src={Img}
            height={15}
            width={15}
            objectFit="cover"
            className=" rounded-full"
          />
          </div>
      </div>
    </>
  );
};

export default Story;
