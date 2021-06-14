import styled from 'styled-components';
import personIcon from 'assets/icons/personIcon.png';
import Modal from '@material-ui/core/Modal';

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 421px;
  padding: 22px;
  border-radius: 20px;
`;

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
`;

export const PersonIcon = styled.img.attrs({
  src: personIcon,
})`
  width: 35px;
  height: 44px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 44px;
`;

export const TextBody = styled.a`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 16px;
`

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
  border-radius: 30px;
  background-color: #0EC164;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ViewButtonGoBack = styled.div`
  display: flex;
  width: 261px;
  height: 41px;
  border-radius: 30px;
  background-color: #fff;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const TextButtonGoback = styled.a`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.03em;
  color:#000;
`