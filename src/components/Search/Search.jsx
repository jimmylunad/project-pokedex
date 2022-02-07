import { ReactComponent as IconSearch } from '../../assets/images/svg/search.svg';
import { ReactComponent as IconFilter } from '../../assets/images/svg/filter.svg';

import {
  Button,
  InputIcon,
  SearchContent,
} from './styles';

const Search = () => (
  <SearchContent>
    <InputIcon>
      <span>
        <IconSearch />
      </span>
      <input type="text" placeholder="Name or number..." />
    </InputIcon>
    <Button variant="contained">
      <IconFilter />
    </Button>
  </SearchContent>
);

export default Search;
