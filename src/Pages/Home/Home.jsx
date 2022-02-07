import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Search from '../../components/Search';
import ListCards from '../../components/ListCards';
import useFetch from '../../services/useFetch';

import {
  Header,
  Title,
  Resume,
  ContainerButton,
  Button,
} from './styles';

const Home = () => {
  const [list, setList] = useState([]);
  const fetch = useFetch({
    initialUrl: 'https://pokeapi.co/api/v2/pokemon',
  });
  // const url = 'https://pokeapi.co/api/v2/pokemon';
  const getPokemons = async () => {
    const response = await fetch.fetch();
    console.log({ response });
    if (response.status === 200) {
      setList(response.data.results);
    } else {
      alert('Error en la consulta');
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('se hizo clic');
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Header>
            <Title>Pokédex</Title>
            <Resume>
              Search for a Pokémon by name or using its National Podédex number.
            </Resume>
          </Header>
          <div>
            <Search />
          </div>
        </Grid>
        <Grid item xs={12}>
          <ListCards list={list} />
          <ContainerButton>
            <Button variant="contained" onClick={handleClick}>
              Cargar más Pokemons
            </Button>
          </ContainerButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
