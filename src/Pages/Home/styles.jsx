import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const Header = styled.header`
  padding-top: 53px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.purple.primary};
  font-weight: 600;
  font-size: 42px;
  margin-bottom: 10px;
`;

export const Resume = styled.p`
  color: ${(props) => props.theme.purple.secondary};
  margin-bottom: 28px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled(MuiButton)`
  background-color: ${(props) => props.theme.purple.secondary};
  :hover {
    background-color: ${(props) => props.theme.purple.secondary};
  }
`;
