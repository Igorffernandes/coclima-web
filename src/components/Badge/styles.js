import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledBadge = styled.div`
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  flex-direction: column;
  display: flex;
`;

export const StyledText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  color: ${colors.darkCyanBlue};
  margin-top: 6px;
`;