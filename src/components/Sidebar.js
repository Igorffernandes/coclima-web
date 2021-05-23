import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import colors from '../styles/colors';
import { useAuth } from 'hooks/AuthContext';
import coclimaLogo from '../assets/Images/logoCoClima.png';

import defaultAvatar from 'assets/Images/avatarPlaceholder.png';
import exitIcon from 'assets/icons/exitIcon.png';

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
  width: 256px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  box-shadow: 1px 1px 1px 1px #EBEFF2;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const TopView = styled.div`
  padding: 40px 24px 0px 24px;
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
  justify-content: center;
  align-items: flex-start;
  width: 70%;
`;

const UserName = styled.a`
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  color: ${colors.pretoDaMassa};
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: '#192A3E';
`;

const UserEdit = styled.div`
  cursor: pointer;
`;

const EditText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${colors.anotherGrayInTheWall};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.dividerColor};
  margin-top: 48px;
  margin-bottom: 32px;
`;

const BottomView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55%;
  padding: 0px 24px 20px 24px;
`;

const ExitIcon = styled.img.attrs({
  src: exitIcon,
})`
  width: 16px;
  height: 16px;
  border: 0px;
  box-sizing: border-box;
`;

const ExitView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
`;

const ExitString = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.almostBlack};
  margin-left: 12px;
`;

const CoClima = styled.img`

`;

const UserIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-size: contain;
`;

const Sidebar = () => {
  const [sidebar] = useState(true);
  const { tokenExpireAt, name, signOut } = useAuth();
  
  const expired = tokenExpireAt ? moment.unix(tokenExpireAt).isBefore() : true;

  return (
    <>
      {!expired && (
        <IconContext.Provider value={{ color: colors.pretoDaMassa }}>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <TopView>
                <UserDiv>
                  <UserImg>
                  <UserIcon src={defaultAvatar}/>
                  </UserImg>
                  <UserInfo>
                    <UserName>{name || 'Roberta Estivan'}</UserName>
                    <UserEdit>
                      <EditText>
                        EDITAR
                      </EditText>
                    </UserEdit>
                  </UserInfo>
                </UserDiv>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </TopView>
              <Divider />
              <BottomView>
                <ExitView onClick={signOut}>
                  <ExitIcon />
                  <ExitString>
                    {'Sair'}
                  </ExitString>
                </ExitView>
                <CoClima src={coclimaLogo} />
              </BottomView>
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      )}
    </>
  );
};

export default Sidebar;
