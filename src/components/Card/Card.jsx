import useFetch from '../../services/useFetch';
import TypeCircle from '../TypeCircle/TypeCircle';

import {
  List,
  ContentCard,
  ImagePokemon,
  TitlePokemon,
} from './styles';

const Card = ({ urlData, namePokemon }) => {
  const { data: pokemon, error } = useFetch(urlData);

  if (error) return <h1>Ocurrio un error</h1>;
  if (!pokemon) return <h1>Cargando...</h1>;
  return (
    <List typesName={pokemon.types[0].type.name}>
      <ContentCard numberId={pokemon.id}>
        <ImagePokemon>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt="Pokemon"
          />
        </ImagePokemon>
        <TitlePokemon>
          <h3>{namePokemon}</h3>
          <ul>
            { pokemon.types.map(({ type, slot }) => (
              <TypeCircle
                key={slot}
                typeName={type.name}
              />
            )) }
          </ul>
        </TitlePokemon>
      </ContentCard>
    </List>
  );
};

export default Card;
