import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const ItemContainer = styled(Paper)`
  padding: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`;