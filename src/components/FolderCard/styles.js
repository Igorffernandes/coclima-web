import styled from 'styled-components';
import colors from 'styles/colors';

import fileIcon from 'assets/icons/fileIcon.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 255px;
  height: 207px;
  background: #F8F8F8;
  border-radius: 8px;
  margin: 30px;
`;

export const CardImage = styled.img`
  width: 223px;
  height: 135px;
  box-sizing: border-box;
  align-self: center;
`;

export const FileIcon = styled.img.attrs({
  src: fileIcon,
})`
  width: 24px;
  height: 32px;
  box-sizing: border-box;
`;

export const NoImageDiv = styled.div`
  display: flex;
  width: 223px;
  height: 135px;
  justify-content: center;
  align-items: center;
  background: #D2D6E0;
  align-self: center;
`;

export const FooterView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 17px;
  flex:1;
  width: 100%;
`;

export const FooterText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  background-color: ${colors.verdeDaMassa};
  height: 24px;
  width: 54px;
  border-style: hidden;
  cursor: pointer;
`;

export const ButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;  
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-decoration: auto;
`;

export const styleObjectButtonText = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '10px',
  lineHeight: '12px',
  textAlign: 'center',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#ffffff',
}