import SidebarIcon from "./SidebarIcon";
import { useSession } from "next-auth/react";

const Sidebar = () => {
    let {data}=useSession();
  return (
    <div className="space-y-5 sm:space-y-10 p-4 mb-5 text-gray-500 w-fit border-l-2 border-white h-[100vh] overflow-scroll scrollbar-hide">
      <SidebarIcon User="Elno Musk" Img={`/Famous/Elon.jpg`} />
      <SidebarIcon User="Harry" Img={`/Famous/Harry.webp`} />
      <SidebarIcon User="Jeff Bezos" Img={`/Famous/Jeff.jpg`} />
      <SidebarIcon User="Jeff Bezos" Img={`/Famous/Jeff.jpg`} />
      <SidebarIcon User="Madam Queen" Img={`/Famous/Madam.webp`} />
      <SidebarIcon User="Madam Queen" Img={`/Famous/Madam.webp`} />
      <SidebarIcon User="Mark Benz" Img={`/Famous/Mark.jpg`} />
      <SidebarIcon User="Mark Benz" Img={`/Famous/Mark.jpg`} />
      <SidebarIcon User="Tom Wilington" Img={`/Famous/Tom.jpg`} />
      <SidebarIcon User="Tom Wilington" Img={`/Famous/Tom.jpg`} />
    </div>
  );
};

export default Sidebar;
