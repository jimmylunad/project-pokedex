import styled from 'styled-components';

export const ListType = styled.li`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.type[props.typeName].primary};
  margin-right: 5px;
`;

export const IconType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  svg {
    width: 55%;
    height: 55%;
  }
`;
