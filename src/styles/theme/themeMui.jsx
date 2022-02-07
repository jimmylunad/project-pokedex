import { createTheme } from '@mui/material/styles';
import themeSC from './themeSC';

const theme = createTheme({
  palette: {
    purpleLight: {
      main: themeSC.purple.secondary,
      contrastText: '#fff',
    },
  },
});

export default theme;
