/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../styles/colors';

const SidebarLink = styled(Link)`
  display: flex;
  color: ${colors.brancoDaMassa};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  background: ${(props) =>
    props.active ? colors.pretoDaMassa : 'transparent'};
  font-size: 18px;
  border-left: ${(props) => (props.active ? '9px solid ' : '')};
  border-color: ${colors.brancoDaMassa};

  &:hover {
    background: ${colors.pretoDaMassa};
    border-left: 9px solid ${colors.brancoDaMassa};
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
  color: ${(props) =>
    props.active ? colors.verdeDaMassa : colors.pretoDaMassa};
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
        <div>
          {item.icon}
          <SidebarLabel id="desc" active={active}>
            {item.title}
          </SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
