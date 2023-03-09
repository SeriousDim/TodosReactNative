import {TodosListProps} from '../props/todos-list-props';
import {FlatList, View} from 'react-native';
import {TodosCard} from '../../../components/todos-card';

export function TodosList(props: TodosListProps) {
  return (
    <View>
      <FlatList
        data={props.todos}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <TodosCard text={item.body} title={item.title}/>
        )}/>
    </View>

  );
}
