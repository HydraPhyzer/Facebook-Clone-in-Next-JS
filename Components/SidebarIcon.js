import React from "react";
import Image from "next/image";

const SidebarIcon = ({ Icon, Title, User, Img }) => {
  return (
    <>
      <div className="overflow-hidden flex justify-center md:justify-start items-center sm:flex-col sm:text-center md:flex-row">
        {!User && (
          <div className="items-center inline-flex">
            <Icon className={"rounded-sm h-4 sm:h-7 text-blue-500 flex"} />
          </div>
        )}

        {User && (
          <div className="inline-flex h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] ">
            <Image
              src={Img}
              height={40}
              width={40}
              className="flex rounded-full"
              objectFit="cover"
            />
          </div>
        )}
        <span className="mx-5 hidden sm:inline-flex">{Title || User}</span>
      </div>
    </>
  );
};

export default SidebarIcon;
