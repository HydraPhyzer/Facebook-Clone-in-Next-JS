import React from "react";
import Story from "./Story";

const Fed = () => {
  return (
    <div className="sm:max-w-[60vw] mx-auto scrollbarhei">
        <div className="inline-flex m-1">
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
  );
};

export default Fed;
