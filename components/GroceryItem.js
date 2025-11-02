import { StyleSheet, Text, View , Pressable, Modal} from 'react-native';

function GroceryItem(props) { 
  return (    
   <Pressable onPress={() => props.onDeleteItem(props.id)}>
    <View style={styles.groceryItem}>
      <Text style={styles.groceryText}>{props.text}</Text>
    </View>
    </Pressable>     
  ); 
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'cyan',
  },
  groceryText: {
    color: 'green',
    fontSize: 18,
    padding: 8,
  },
});
