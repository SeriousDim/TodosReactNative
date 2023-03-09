import {POST_API} from '../../modules/todos-list/api/post-api';
import {Text, View} from 'react-native';
import {TodosList} from '../../modules/todos-list';

export function TodosPage() {
  const {data: posts, error, isLoading, refetch} = POST_API.useAllPostsQuery();

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {error && (
        <View>
          <Text>Error occurred: {error.error}</Text>
        </View>
      )}
      {posts && <TodosList todos={posts}/>}
    </View>
  );
}
