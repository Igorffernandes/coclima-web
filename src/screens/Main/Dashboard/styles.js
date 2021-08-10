import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 258px;
  background-color: ${colors.brancoDaMassa};
`;

export const Header = styled.div`
  margin-top: 41px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.a`
  font-family: 'Inter';
  font-size: 32px;
  font-weight: 600;
  color: ${colors.verdeDaMassa};
  margin-left: 36px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.a`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: #142847;
  margin-left: 36px;
`;

export const PlantingTransferDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.cinzaClaroDaMassa};
  border-radius: 8px;
  margin-top: 54px;
  margin-left: 36px;
`;

export const Planting = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.selected ? colors.brancoDaMassa : colors.verdeDaMassa};
  background-color: ${props => props.selected ? colors.verdeDaMassa : colors.cinzaClaroDaMassa};
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`;

export const Transfer = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.selected ? colors.brancoDaMassa : colors.verdeDaMassa};
  background-color: ${props => props.selected ? colors.verdeDaMassa : colors.cinzaClaroDaMassa};
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`;

export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 100%;
`;

export const ChartOptions = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin-left: 36px;
`;

export const TimeOption = styled.div`
  display: flex;
`;

export const ChartType = styled.div`
  display: flex;
`;

export const Hr = styled.div`
  margin-left: 36px;
  margin-top: 35px;
  margin-bottom: 48px;
  width: 95%;
  height: 1px;
  background-color: ${colors.cinzaDaMassa};
`;

export const OptionText1 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active == 30 ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionText2 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active == 90 ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionText3 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active == 365 ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionText4 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active === 'tudo' ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionChart1 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active === 'line' ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionChart2 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active === 'bar' ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const OptionChart3 = styled.a`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.active === 'list' ? colors.verdeDaMassa : colors.darkCyanBlue };
  text-transform: uppercase;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const FilterCardsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FilterOptions = styled.div`
  margin-right: 36px;
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 20px;
`;
