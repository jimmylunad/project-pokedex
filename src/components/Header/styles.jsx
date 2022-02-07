import styled from 'styled-components';

export const StyleHeader = styled.header`
  background: linear-gradient(20deg, ${(props) => props.theme.purple.primary}, ${(props) => props.theme.purple.tertiary});
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
  h1 {
    color: #FFF;
  }
`;
