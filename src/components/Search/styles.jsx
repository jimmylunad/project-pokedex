import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import bgLogo from '../../assets/images/png/bg_logo.png';

export const SearchContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  ::before {
    content: '';
    position: absolute;
    width: 215px;
    height: 352px;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background-image: url(${bgLogo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
  }
`;

export const Button = styled(MuiButton)`
  height: 50px;
  width: 50px;
  min-width: initial;
  border-radius: 12px;
  background-color: ${(props) => props.theme.purple.secondary};
  position: relative;
  :hover {
    background-color: ${(props) => props.theme.purple.secondary}
  }
`;

export const InputIcon = styled.div`
  width: calc(100% - 60px);
  position: relative;
  margin-right: 10px;
  span {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
  input {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 12px;
    background-color: ${(props) => props.theme.gray.secondary};
    color: ${(props) => props.theme.purple.primary};
    font-size: 17px;
    padding: 15px 20px 15px 50px;
    ::placeholder {
      color: ${(props) => props.theme.purple.tertiary};
    }
    :focus-visible {
      outline: none;
    }
  }
`;
