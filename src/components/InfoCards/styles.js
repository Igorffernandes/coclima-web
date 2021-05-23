import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  background-color: 'white';
  background-size: cover;
`;

export const TreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
`;

export const CarbonDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
`;

export const CapitalDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
`;

export const Value = styled.a`
  color: ${colors.brancoDaMassa};
`;

export const ValueDiv = styled.div`

`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DescriptionText = styled.a`
  color: ${colors.brancoDaMassa};
`;

export const InfoValue = styled.a`
  color: ${colors.brancoDaMassa};
`;

export const Icon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 24px;
  height: 24px;
  background-image: ${props => `url(${props.iconPath})`};
`;

