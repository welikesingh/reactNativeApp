import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { useState } from 'react';
import GroceryItem from './components/GroceryItem';
import GroceryInput from './components/GroceryInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddItemHandler() {
    setModalIsVisible(true);
  }
  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    // if (enteredItemText.trim() === '') return; // ignore empty entries
    setGroceryItems((currentGroceryItems) => [
      ...currentGroceryItems,
      { text: enteredItemText, id: Math.random().toString() },
    ]);
    endAddItemHandler(); // close modal after adding
  }

  function deleteItemHandler(id) {
    setGroceryItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.Appcontainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/images/OUImage.png')} style={styles.logo} />
        </View>

        <Button
          title="Add New Item"
          color="#f31282"
          onPress={startAddItemHandler}
        />

        <GroceryInput
          visible={modalIsVisible}
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler} />

        <FlatList
          data={groceryItems}
          renderItem={(itemData) => (
            <GroceryItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteItemHandler}
            />
          )}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    backgroundColor: '#7c4848ff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    alignItems: 'center',
    width: 120,       // adjust as needed
    height: 120,
    marginBottom: 20,
  },

});
