import {Text} from 'react-native';
import {styles} from './styles';
import {TextProps} from './props';

export function TextComponent(props: TextProps) {
  return (
    <Text style={styles.text}>{props.text}</Text>
  )
}