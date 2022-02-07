const colors = {
  purple: {
    primary: '#2D3056',
    secondary: '#5D5E7C',
    tertiary: '#959AAE',
  },
  gray: {
    primary: '#717171',
    secondary: '#EFEFEF',
    tertiary: '#F9F9F9',
  },
  type: {
    normal: {
      primary: '#919AA2',
      secondary: '#E3E5E7',
    },
    poison: {
      primary: '#B567CE',
      secondary: '#ECD9F2',
    },
    psychic: {
      primary: '#FF6675',
      secondary: '#FFD8DC',
    },
    rock: {
      primary: '#C8B686',
      secondary: '#F1ECE0',
    },
    steel: {
      primary: '#5A8EA2',
      secondary: '#D5E2E7',
    },
    water: {
      primary: '#3692DC',
      secondary: '#CCE3F6',
    },
    fire: {
      primary: '#FF9741',
      secondary: '#FFE5CF',
    },
    flying: {
      primary: '#89AAE3',
      secondary: '#E1E9F8',
    },
    ghost: {
      primary: '#4C6AB2',
      secondary: '#D2D9EB',
    },
    grass: {
      primary: '#38BF4B',
      secondary: '#CDEFD2',
    },
    ground: {
      primary: '#E87236',
      secondary: '#F9DBCC',
    },
    ice: {
      primary: '#4CD1C0',
      secondary: '#D2F3EF',
    },
    electric: {
      primary: '#FBD100',
      secondary: '#FEF3BF',
    },
    fairy: {
      primary: '#FB89EB',
      secondary: '#FEE1FA',
    },
    fighting: {
      primary: '#E0306A',
      secondary: '#F7CBD9',
    },
    dragon: {
      primary: '#006FC9',
      secondary: '#BFDBF1',
    },
    dark: {
      primary: '#5B5466',
      secondary: '#D6D4D8',
    },
    bug: {
      primary: '#83C300',
      secondary: '#E0F0BF',
    },
  },
};

const fonts = {
  regular: '\'Roboto\', sans-serif',
};

const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
};

const theme = {
  ...colors,
  ...fonts,
  ...breakpoints,
};

export default theme;
