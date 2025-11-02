import { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal, Image } from 'react-native';
function GroceryInput(props) {
  const [enteredItemText, setEnteredItemText] = useState('');

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    if (enteredItemText.trim() === '') return; // ignore empty
    props.onAddItem(enteredItemText);
    setEnteredItemText(''); // clear after adding
  }

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/OUImage.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter item"
          onChangeText={itemInputHandler}
          value={enteredItemText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addItemHandler} color="#1282f3ff" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GroceryInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // take full screen height
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#abb681ff',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
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
