import {TodosCardProps} from './props';
import {View} from 'react-native';
import {styles} from './styles';
import {TitleComponent} from '../../ui/title-component';
import {TextComponent} from '../../ui/text-component';

export function TodosCard(props: TodosCardProps) {
  return (
    <View style={styles.card}>
      <TitleComponent title={props.title}/>
      <TextComponent text={props.text}/>
    </View>
  )
}
