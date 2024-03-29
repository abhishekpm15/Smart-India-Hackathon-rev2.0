import React, { useState } from "react";
import {ImFeed} from 'react-icons/im'
import {BiCalendarEvent} from 'react-icons/bi'
import {RiCommunityLine} from 'react-icons/ri'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {FaPoll} from 'react-icons/fa';
import {TbBadges} from 'react-icons/tb';
import {RiAccountCircleLine} from 'react-icons/ri'
import {BiGroup} from 'react-icons/bi';
import { Link } from "react-router-dom";
const SideNavbar2 = () => {
  // const [active,setActive] = useState(":bg-blue-600")
  return (
    <div className="w-[20%] my-1 mx-2 text-[30px]">
      <div>SideNavBar</div>
      <div className="h-[480px]">
        <div className="my-1 text-[20px] list-none">
          <li className="my-1 hover:bg-yellow-600 rounded-lg"><BiCalendarEvent className="relative top-6 left-6"></BiCalendarEvent><Link to="/Events2">Events </Link></li>
          <li className="my-3 hover:bg-yellow-600 rounded-lg"><FaPoll className="relative top-6 left-6"></FaPoll><Link to="/Blog2">Blog </Link></li>
          <li className="my-1 hover:bg-yellow-600 rounded-lg"><BiGroup className="relative top-6 left-6"></BiGroup><Link to="/GroupPage2">Group Pages </Link></li>
          <li className="my-3 hover:bg-yellow-600 rounded-lg"><RiCommunityLine className="relative top-6 left-6"></RiCommunityLine><Link to="/Communities2">Communities </Link></li>
          <li className="my-3 hover:bg-yellow-600 rounded-lg"><AiFillQuestionCircle className="relative top-6 left-6"></AiFillQuestionCircle><Link to="/Questions2">Questions </Link></li>
          <li className="my-3 hover:bg-yellow-600 rounded-lg"><TbBadges className="relative top-6 left-6"></TbBadges><Link to="/Badges2">Badges</Link></li>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar2;
