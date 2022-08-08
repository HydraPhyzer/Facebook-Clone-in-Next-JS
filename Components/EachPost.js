import { useSession } from "next-auth/react";
import React from "react";
import {
  DotsHorizontalIcon,
  ShareIcon,
  HeartIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const EachPost = ({Info}) => {

  const session = useSession();
  return (
    <div className="bg-white mt-2 sm:p-2 p-1 rounded-md text-gray-500">
      <div className="P-1 flex justify-between items-center">
        <div className="Left flex items-center space-x-2">
          <div className="Pic">
            <img
              className="rounded-full h-6 sm:h-full object-contain"
              src={session?.data?.user?.image}
              alt=""
            />
          </div>
          <div className="Name-Time text-[10px] sm:text-sm">
            <p>{session?.data?.user?.name}</p>
            <p>{new Date((+Info?.Time?.timestampValue?.seconds)*1000).toLocaleString()}</p>
          </div>
        </div>
        <div className="Right">
          <DotsHorizontalIcon className="sm:h-6 h-4" />
        </div>
      </div>

      <hr className="mt-1" />

      <div className="P-2 py-2">
        <p className="text-xs sm:text-sm">{Info?.Text?.stringValue}</p>
      </div>

      {Info?.Image?.stringValue?
      <div className="P-3">
        <img src={Info?.Image?.stringValue} className="h-[150px] w-[150px] mx-auto" alt="" />
      </div>:""
      }

      <hr className="mt-1" />
      <div className="P-4 flex items-center justify-between py-1">
          <HeartIcon className="h-6 text-red-500 cursor-pointer"/>
          <AnnotationIcon className="h-6 text-black cursor-pointer"/>
          <ShareIcon className="h-6 text-blue-500 cursor-pointer"/>
        </div>
      </div>
  );
};

export default EachPost;
