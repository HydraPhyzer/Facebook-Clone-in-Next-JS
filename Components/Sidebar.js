import React from "react";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import SidebarIcon from "./SidebarIcon";
import { useSession } from "next-auth/react";

const Sidebar = () => {
    let {data}=useSession();
  return (
    <div className="space-y-5 sm:space-y-10 p-4 mb-5 text-gray-500 w-fit border-r-2 border-white h-[100vh] overflow-hidden">
      <SidebarIcon User={`${data.user?.name}`} Img={`${data.user.image}`} />
      <SidebarIcon Title="Home" Icon={HomeIcon} />
      <SidebarIcon Title="Friends" Icon={FlagIcon} />
      <SidebarIcon Title="Watch" Icon={PlayIcon} />
      <SidebarIcon Title="MarketPlace" Icon={ShoppingCartIcon} />
      <SidebarIcon Title="Groups" Icon={UserGroupIcon} />
    </div>
  );
};

export default Sidebar;
