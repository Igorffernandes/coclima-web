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

export const SubView = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

export const SearchView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 36px;
  justify-content: space-between;
  width: -webkit-fill-available;
  align-items: center;
`;

export const FoldersView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  align-items: center;
  flex-wrap: wrap;
`;

export const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${colors.verdeDaMassa};
  color: #FFFFFF;
  font-family: Inter;
  font-weight: 600;
  height: 24px;
  margin-left: 35px;
  padding: 5px 15px 5px 15px;
  border-style: hidden;
  cursor: pointer;
`;