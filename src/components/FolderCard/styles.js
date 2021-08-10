import styled from 'styled-components';
import colors from 'styles/colors';
import trash from 'assets/icons/trash.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 255px;
  height: 207px;
  background: #F8F8F8;
  border-radius: 8px;
  margin: 30px;
`;

export const FileItemTrash = styled.img.attrs({
  src: trash,
})`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  box-sizing: border-box;
  align-self: flex-end;
  cursor: pointer;
`;

export const FooterText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
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
  color: #FFFFFF;
  font-family: Inter;
  font-weight: 600;
  height: 24px;
  padding: 20px 40px 20px 40px;
  border-style: hidden;
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;