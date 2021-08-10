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
  background-size: cover;
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

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex:1;
  width: 100%;
  height: 100%;
`;


export const TableDiv = styled.div`
  width: 97%;
  height: 100%;
  padding: 9px 0px 0px 23px;
`;

export const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  align-items: center;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 36px;
  margin-bottom: 8px;
`;

export const User = styled.div`
  display: flex;
  border: 2px solid #1B2430;
  border-radius: 5px;
  padding: 4px 12px 4px 12px;
  margin-right: 15px;
  font-family: 'Inter';
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.state === 'user' ? '#FFFFFF' : '#1B2430' };
  background-color: ${props => props.state === 'user' ? '#1B2430' : '#FFFFFF' };
`;

export const Company = styled.div`
  display: flex;
  border: 2px solid #1B2430;
  border-radius: 5px;
  padding: 4px 12px 4px 12px;
  margin-right: 15px;
  font-family: 'Inter';
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.state === 'company' ? '#FFFFFF' : '#1B2430' };
  background-color: ${props => props.state === 'company' ? '#1B2430' : '#FFFFFF' };
`;

export const Partner = styled.div`
  display: flex;
  border: 2px solid #1B2430;
  border-radius: 5px;
  padding: 4px 12px 4px 12px;
  margin-right: 15px;
  font-family: 'Inter';
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.state === 'partner' ? '#FFFFFF' : '#1B2430' };
  background-color: ${props => props.state === 'partner' ? '#1B2430' : '#FFFFFF' };
`;

export const Planting = styled.div`
  display: flex;
  border: 2px solid #1B2430;
  border-radius: 5px;
  padding: 4px 12px 4px 12px;
  margin-right: 15px;
  font-family: 'Inter';
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.state === 'planting' ? '#FFFFFF' : '#1B2430' };
  background-color: ${props => props.state === 'planting' ? '#1B2430' : '#FFFFFF' };
`;
