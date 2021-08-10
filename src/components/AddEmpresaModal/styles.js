import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import fileIconGreen from 'assets/icons/fileIconGreen.png';

export const FormDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FormDivCol = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
`;

export const TextTitle = styled.a`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 30px;
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

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TextLabel = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #3E4054;
`

export const MaterialInput = styled(Input)`
  height: 48px;
  width: 535px;
  border-radius: 6px;
  border: 1px solid #D2D6E0;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const MaterialSelect = styled(Select)`
  height: 48px;
  width: 535px;
  border-radius: 6px;
  border: 1px solid #D2D6E0;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const ArchiveBox = styled.div`
  height: 48px;
  width: 530px;
  border-radius: 20px;
  background-color: #DBFCEB;
  border: 1px solid #0A8F4A;
  display: flex;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FileIcon = styled.img.attrs({
  src: fileIconGreen,
})`
  width: 38px;
  height: 50px;
  box-sizing: border-box;
  margin-bottom: 22px;
`;

export const TextBody = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`

export const TextBodyBold = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  margin: 8px;
`

export const ViewButton = styled.div`
  display: flex;
  height: 49px;
  border-radius: 30px;
  background-color: #0EC164;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-top: ${(props) => props.extraMargin}px;
  cursor: pointer;
`;