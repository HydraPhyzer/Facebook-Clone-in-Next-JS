import React from "react";
import AddPost from "./AddPost";
import DisplayPost from "./DisplayPost";
import Story from "./Story";

const Fed = ({Data}) => {
  return (
    <div className="sm:max-w-[50vw] mx-auto flex flex-col space-y-5">
      <div className="rounded-lg Story ">
        <div className="inline-flex m-1 overflow-x-scroll">
          <Story User="Elno Musk" Img={`/Famous/Elon.jpg`} />
          <Story User="Harry" Img={`/Famous/Harry.webp`} />
          <Story User="Jeff Bezos" Img={`/Famous/Jeff.jpg`} />
          <Story User="Madam Queen" Img={`/Famous/Madam.webp`} />
          <Story User="Mark Benz" Img={`/Famous/Mark.jpg`} />
          <Story User="Tom Wilington" Img={`/Famous/Tom.jpg`} />
          <Story User="Elno Musk" Img={`/Famous/Elon.jpg`} />
          <Story User="Harry" Img={`/Famous/Harry.webp`} />
          <Story User="Jeff Bezos" Img={`/Famous/Jeff.jpg`} />
        </div>
      </div>

      <div className=" mx-auto sm:w-[70%] w-[100%]">
        <AddPost />
        <DisplayPost Data={Data}/>
      </div>
    </div>
  );
};

export default Fed;
