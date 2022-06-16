import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
//importing icons
import {AiFillHome} from 'react-icons/ai';
import {FaUser, FaUsers} from 'react-icons/fa';
import {MdSpaceDashboard} from 'react-icons/md';
import {MdAddBusiness} from 'react-icons/md';
import {RiAdminFill} from 'react-icons/ri';
import {AiFillSetting} from 'react-icons/ai';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon:   <AiFillHome size={30}/>,
    cName: 'nav-text',

  },
  {
    title: 'Businesses',
    path: '/businesses',
    icon: <MdAddBusiness size={30}/>,
    cName: 'nav-text',
 
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdSpaceDashboard size={30}/>,
    cName: 'nav-text',
 
  },
  {
    title: 'Users',
    path: '/Users',
    icon:<FaUser size={30}/>,
    cName: 'nav-text',
   
  }
  // {
  //   title: 'Admin',
  //   path: '/Admin',
  //   icon: <RiAdminFill size={30}/>,
  //   cName: 'nav-text',
    
  // },
  // {
  //   title: 'Settings',
  //   path: '/Settings',
  //   icon:<AiFillSetting size={30}/>,
  //   cName: 'nav-text',

  // }
];