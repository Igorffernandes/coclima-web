import styled from 'styled-components';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Card from '@material-ui/core/Card';
import colors from '../../../../styles/colors';

export const PersonIcon = styled(PersonAddIcon)`
  height: 60px;
  width: 60px;
  color: whitesmoke;
`;

export const PersonView = styled(Card)`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.verdeDaMassa};
  border-radius: 30px;
  position: fixed;
  margin-top: -34px;
`;

export const FieldsContainer = styled.div`
  margin: 20px 0px;
  align-items: center;
  justify-content: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
