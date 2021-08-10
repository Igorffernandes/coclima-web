import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
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

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
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
  height: 49px;
  border-radius: 22px;
  background-color: #0EC164;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  padding: 0 24px;
  cursor: pointer;
`;

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
  width: 250px;
  border-radius: 6px;
  border: 1px solid #D2D6E0;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
`

export const CoordFormBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const MaterialInputSmall = styled(Input)`
  height: 48px;
  width: 250px;
  border-radius: 6px;
  border: 1px solid #D2D6E0;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const DivFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const DateDiv = styled.div`
  margin: 8px 0;
`;

export const ArchiveBox = styled.div`
  height: 243px;
  width: 471px;
  border-radius: 20px;
  background-color: #DBFCEB;
  border: 1px solid #0A8F4A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
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

export const FileItemIcon = styled.img.attrs({
  src: fileIcon,
})`
  width: 18px;
  height: 24px;
  margin-right: 14px;
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

export const ImageLoaded = styled.img`
  width: 140px;
`

export const ViewItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px 20px;
  width: 40%;
`

export const ImageViewer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const MaterialSelect = styled(Select)`
  height: 48px;
  width: 250px;
  border-radius: 6px;
  border: 1px solid #D2D6E0;
  margin-top: 8px;
  margin-bottom: 16px;
`