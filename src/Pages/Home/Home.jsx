import { Container, Grid } from '@mui/material';
import Search from '../../components/Search';

import ListCards from '../../components/ListCards';

import {
  Header,
  Title,
  Resume,
  ContainerButton,
  Button,
} from './styles';

const Home = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon';

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
          <ListCards url={url} />
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
