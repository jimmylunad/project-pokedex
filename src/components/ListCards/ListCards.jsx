// import { handleResPokes } from '../../utils/handleResponse';
import Card from '../Card';
import { ListPokemons } from './styles';

// const { data, error } = useFetch(url, handleResPokes);

// if (error) return <h1>Ocurrio un error</h1>;
// if (!data) return <h1>Cargando list...</h1>;
const ListCards = ({ list }) => (
  <ListPokemons>
    {
        list.map((pokemon) => (
          <Card
            key={pokemon.name}
            urlData={pokemon.url}
            namePokemon={pokemon.name}
          />
        ))
      }
  </ListPokemons>
);
export default ListCards;
