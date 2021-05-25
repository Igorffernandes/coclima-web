import styled from 'styled-components';
import colors from 'styles/colors';

export const TableHeaderDiv = styled.div`
  padding: 10px 10px;
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.grey3};
  border-radius: 8px;
`;

export const TableTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-right: 8px;
  color: ${colors.almostBlack};
`;

export const SubHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.verdeDaMassa};
  border-radius: 8px;
  width: 100%;
`;

export const CustomHeaderColumnName = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;