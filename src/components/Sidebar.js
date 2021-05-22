import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import colors from '../styles/colors';
import { useAuth } from 'hooks/AuthContext';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NavTitle = styled.h1`
  font-weight: bold;
  font-size: 43px;
  color: ${colors.pretoDaMassa};
`;

const NavTitleDiv = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: ${colors.verdeDaMassa};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  box-shadow: 0px 0px 10px 2px #1b2430;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const UserDiv = styled.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 0px;
`;

const UserImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 30%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
`;

const UserName = styled.a`
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  font-size: 20px;
  color: ${colors.pretoDaMassa};
`;

const Sidebar = () => {
  const [sidebar] = useState(true);
  const { tokenExpireAt, name, signOut } = useAuth();
  const classes = useStyles();

  const expired = tokenExpireAt ? moment.unix(tokenExpireAt).isBefore() : true;

  return (
    <>
      {!expired && (
        <IconContext.Provider value={{ color: colors.pretoDaMassa }}>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavTitleDiv>
                <NavTitle>ARMARIO</NavTitle>
              </NavTitleDiv>
              <UserDiv>
                <UserImg>
                  <Avatar
                    className={classes.large}
                    alt={name}
                    src="assets/img/new_logo.png"
                  />
                </UserImg>
                <UserInfo>
                  <UserName>{name.split(' ')[0]}</UserName>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{
                      color: colors.verdeDaMassa,
                      height: 20,
                    }}
                    onClick={signOut}
                  >
                    Sair
                  </Button>
                </UserInfo>
              </UserDiv>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      )}
    </>
  );
};

export default Sidebar;
