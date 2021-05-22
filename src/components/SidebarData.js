import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Gestores',
    path: '/managers',
    icon: <FaIcons.FaUserFriends />,
  },
  {
    title: 'Colaboradores',
    path: '/collaborators',
    icon: <IoIcons.IoMdPeople />,
  },
  // {
  //   title: 'Apps',
  //   path: '/apps',
  //   icon: <FaIcons.FaMobile />,
  // },
  {
    title: 'Apps bloqueados',
    path: '/blocked_apps',
    icon: <FaIcons.FaMobile />,
  },
  {
    title: 'Mapa',
    path: '/maps',
    icon: <FaIcons.FaMap />,
  },
  {
    title: 'Relatório de ações',
    path: '/logs',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
