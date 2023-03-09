import {TitleProps} from './props';
import {styles} from './styles';
import {Text} from 'react-native';

export function TitleComponent(props: TitleProps) {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}
