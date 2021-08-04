import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 5vw;
  min-height: 35px;
`;

export const Description = styled.a`
  font-family: 'Inter';
  font-size: 1.2vw;
  text-align: start;
  color: ${colors.pretoDaMassa};
`;

export const DescriptionLink = styled.a`
  font-family: 'Inter';
  font-size: 1.2vw;
  text-align: start;
  margin-top: 10px;
  font-weight: 600;
  color: #004AAD;
  cursor: pointer;
`;

export const BulletDescription = styled.a`
  font-family: 'Inter';
  font-size: 1.2vw;
  text-align: start;
  margin-left: 10px;
  color: ${colors.pretoDaMassa};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ItemWithImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6vw;
  justify-content: center;
  width: 50vw;
  min-width: 100px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 3vh 0 3vh 0;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 10px 0 10px 0;
`;

export const Pin = styled.div`
  width: 2vw;
  height: 2vw;
  min-height: 20px;
  min-width: 20px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: ${colors.verdeDaMassa};
  margin: 0 10px 0 10px;
`;

export const Image = styled.img`
  margin-left: 15px;
  height: 10vw;
`;

export const ImageLeft = styled.img`
  height: 12vw;
  margin-right: 100px;
`;
