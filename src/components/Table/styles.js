import styled from 'styled-components';
import colors from 'styles/colors';

export const TableHeaderDiv = styled.div`
  padding: 10px 10px;
  display: flex;
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