import styled from 'styled-components';
import fileIconGreen from 'assets/icons/fileIconGreen.png';
import fileIcon from 'assets/icons/fileIcon.png';
import trash from 'assets/icons/trash.png';


export const FileItemTrash = styled.img.attrs({
    src: trash,
  })`
    width: 16px;
    height: 16px;
    margin-left: 8px;
  `;

export const FileItemIcon = styled.img.attrs({
    src: fileIcon,
  })`
    width: 18px;
    height: 24px;
    margin-right: 14px;
  `;

export const FileIcon = styled.img.attrs({
    src: fileIconGreen,
  })`
    width: 38px;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 22px;
  `;

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
    height: 320px;
    width: 400px;
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

export const ArchiveBox = styled.div`
  height: 243px;
  width: 471px;
  border-radius: 20px;
  background-color: #DBFCEB;
  border: 1px solid #0A8F4A;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const ViewItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: '100%';
`

export const TextItem = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
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
  border-radius: 22px;
  background-color: #0EC164;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
`;