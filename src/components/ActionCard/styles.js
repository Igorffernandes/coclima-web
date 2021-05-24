import styled from 'styled-components';
import colors from 'styles/colors';

import cameraIcon from 'assets/icons/cameraIcon.png';
import treeIcon from 'assets/icons/treeIcon.png';


export const CardContainer = styled.div`
  width: 255px;
  height: 240px;
  background: ${colors.verdeDaMassa};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 54px;
`;

export const CameraIcon = styled.img.attrs({
  src: cameraIcon,
})`
  width: 37px;
  height: 37px;
  border: 0px;
  box-sizing: border-box;
`;

export const TreeIcon = styled.img.attrs({
  src: treeIcon,
})`
  width: 24px;
  height: 29px;
  border: 0px;
  box-sizing: border-box;
`;

export const CardText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  white-space: pre-line;
`;

export const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  background: #FFFFFF;
  border-radius: 2.62626e+06px;
  border-style: hidden;
  cursor: pointer;
`;

export const CardButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #0EC164;
`;
