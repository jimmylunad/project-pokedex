import listIcons from '../../assets/images/svg/listIcons';
import { ListType, IconType } from './styles';

const TypeCircle = ({ typeName }) => (
  listIcons.types[typeName] && (
    <ListType typeName={typeName}>
      <IconType>
        {listIcons.types[typeName]}
      </IconType>
    </ListType>
  )
);

export default TypeCircle;
