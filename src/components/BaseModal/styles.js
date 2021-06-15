import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

import closeIcon from 'assets/icons/closeIcon.png';

export const TextButton = styled.a`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.03em;
  color:#FFFFFF;
`

export const ViewButton = styled.div`
  display: flex;
  width: 261px;
  height: 41px;
  border-radius: 22px;
  background-color: #0EC164;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
  cursor: pointer;
`;

export const ViewCloseIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #F1F3F4;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;
`;

export const CloseIcon = styled.img.attrs({
  src: closeIcon,
})`
  width: 20px;
  height: 20px;
  color: white;
`;

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-width: 600px;
  padding: 22px;
  border-radius: 20px;
`;

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;