/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SideBarIcon from 'components/SideBarIcon';

import colors from '../styles/colors';

const SidebarLink = styled(Link)`
  display: flex;
  color: ${colors.brancoDaMassa};
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 40px;
  width: 140px;
  text-decoration: none;
  font-size: 18px;
  border-color: ${colors.brancoDaMassa};

  &:hover {
    cursor: pointer;
    color: ${colors.verdeDaMassa};
  }

  &:hover #desc {
    color: ${colors.verdeDaMassa};
  }
`;

const SidebarLabel = styled.span`
  margin-left: 24px;
  font-weight: bold;
  font-family: Inter;
  font-style: normal;
  color: #0A8F4A;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const SideBarItem = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) =>
    props.active ? colors.greenLight : 'transparent'};
  border-radius: 8px;

`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const location = useLocation();
  const active = location.pathname.includes(item.path);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        active={active}
      >
        <SideBarItem active={active}>
          <SideBarIcon iconName={item.iconString} active={active} />
          <SidebarLabel id="desc" active={active}>
            {item.title}
          </SidebarLabel>
        </SideBarItem>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
