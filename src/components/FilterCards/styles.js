import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  margin-top: 40px;
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
  padding: 0px 10px 0px 0px;
  margin: 0 22px 0 22px;
`;

export const Hr = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${colors.darkCyanBlue};
`;

export const CarbonDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 10px 0px 10px;
  margin: 0 22px 0 22px;
`;

export const Value = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: ${colors.darkCyanBlue};
`;

export const ValueDiv = styled.div`
  margin-left: 0px;
  margin-bottom: 7.5px;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DescriptionText = styled.a`
  font-family: 'Inter';
  font-weight: 400;
  color: ${colors.cinzaDaMassa};
`;

export const InfoValue = styled.a`
  font-family: 'Inter';
  font-size: 16px;
  line-height: 19px;
  color: ${colors.darkCyanBlue};
`;

