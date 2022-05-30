import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon:   <FontAwesomeIcon icon="fa-solid fa-briefcase" />,
    cName: 'nav-text'
  },
  {
    title: 'Businesses',
    path: '/Businesses',
    icon:  <FontAwesomeIcon icon="fa-solid fa-user" />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <FontAwesomeIcon icon="fa-solid fa-chart-simple" />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/Users',
    icon:<FontAwesomeIcon icon="fa-solid fa-user" />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/Admin',
    icon: <FontAwesomeIcon icon="fa-duotone fa-circle-user" />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon:<FontAwesomeIcon icon="fa-duotone fa-screwdriver-wrench" />,
    cName: 'nav-text'
  }
];