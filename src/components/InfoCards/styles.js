import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  margin-top: 40px;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
`;

export const TreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
  margin: 0 22px 0 22px;
`;

export const CarbonDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
  margin: 0 22px 0 22px;
`;

export const CapitalDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.verdeDaMassa};
  border-radius: 16px;
  padding: 8px 15px 8px 15px;
  margin: 0 22px 0 22px;
`;

export const Value = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: ${colors.brancoDaMassa};
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
  color: ${colors.brancoDaMassa};
`;

export const InfoValue = styled.a`
  font-family: 'Inter';
  font-size: 16px;
  line-height: 19px;
  color: ${colors.brancoDaMassa};
`;

export const Icon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 24px;
  height: 24px;
  background-image: ${props => `url(${props.iconPath})`};
`;

