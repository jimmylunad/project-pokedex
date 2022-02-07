import styled from 'styled-components';
import bgCardList from '../../assets/images/png/bg_cardlist.png';

export const List = styled.li`
  height: 104px;
  width: 100%;
  border-radius: 12px;
  background-color: ${(props) => props.theme.type[props.typesName].secondary};
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  margin-bottom: 22px;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 155px;
    height: 100%;
    background-image: url(${bgCardList});
    background-position: right center;
    z-index: 0;
  }
`;

export const ContentCard = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  ::before {
    content: "#${(props) => props.numberId}";
    font-size: 36px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    right: 0;
    bottom: -9px;
  }
`;

export const ImagePokemon = styled.div`
  width: 84px;
  height: 84px;
  img {
    width: 100%;
  }
`;

export const TitlePokemon = styled.div`
  margin-left: 10px;
  h3 {
    color: ${(props) => props.theme.purple.secondary};
    text-transform: capitalize;
    font-size: 26px;
    margin-bottom: 5px;
  }
  ul {
    display: flex;
  }
`;
