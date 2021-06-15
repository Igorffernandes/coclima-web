import styled from 'styled-components';
import colors from 'styles/colors';

export const TextTitle = styled.a`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 382px;
  height: 327px;
  background: #FFFFFF;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  flex-direction: column;
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  border-radius: 2.62626e+06px;
  background-color: ${props => props.verde ? colors.verdeDaMassa : colors.vermelhoDaMassa};
  height: 41px;
  width: 120px;
  border-style: hidden;
  cursor: pointer;
`;

export const ButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;