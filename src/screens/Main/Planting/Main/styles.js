import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  height: 100vh;
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-left: 258px;
  background-color: ${colors.verdeDaMassa};
`;

export const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 500px;
`;

export const TextHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 41px;
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.a`
  font-family: 'Inter';
  font-size: 32px;
  font-weight: 600;
  color: ${colors.brancoDaMassa};
  margin-left: 36px;
  margin-bottom: 8px;
`;

export const GeneralDiv = styled.div`
  width: 85%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 36px;
`;

export const GeneralText = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  font-weight: 600;
  color: ${colors.brancoDaMassa};
`;

export const GeneralButton = styled.div`
  background-color: ${colors.brancoDaMassa};
  color: ${colors.verdeDaMassa};
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 700;
  border-radius: 100px;
  padding: 5px 10px 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const PhotoGrid = styled.div`
  display: flex;
  height: 40%;
  width: 79%;
  max-width: 79%;
  margin-left: 36px;
  margin-top: 16px;
  border-radius: 16px;
  padding: 15px;
  background-color: ${colors.brancoDaMassa};
  margin-bottom: 120px;
  flex-wrap: wrap;
`;

export const PhotoPrevew = styled.img`
  width: 110px;
  height: 110px;
  border: 8px;
  margin-top: 5px;
  margin-left: 15px;
  box-sizing: border-box;
  object-fit: cover;
`;

export const SubTitle = styled.a`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: #142847;
  margin-left: 36px;
`;

export const CardsDiv = styled.div`
  margin-top: 40px;
  margin-left: 23px;
  display: flex;
  width: 100%;
`;

export const TreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.brancoDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
  margin: 0 13px 0 13px;
`;

export const CarbonDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.brancoDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
  margin: 0 13px 0 13px;
`;

export const Value = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: ${colors.verdeDaMassa};
`;

export const ValueDiv = styled.div`
  margin-left: 5px;
  margin-bottom: 7.5px;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DescriptionText = styled.a`
  color: ${colors.verdeDaMassa};
`;

export const InfoValue = styled.a`
  font-family: 'Inter';
  font-size: 16px;
  line-height: 19px;
  color: ${colors.verdeDaMassa};
`;

export const Icon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 24px;
  height: 24px;
  background-image: ${props => `url(${props.iconPath})`};
`;