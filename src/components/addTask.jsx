import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Modal } from "react-native"

const AddGoal = (props) => {

  const [textInput, setTextInput] = useState('');

  const textChang = (dt) => {
    // console.log(dt);
    setTextInput(dt)
  }

  const taskAdd = () => {
    props.addgoal(textInput);
    setTextInput('');
  }

  return (
    <Modal visible={props.visiblemodel} animationType="slide">
      <View style={styles.view1}>
        <TextInput style={styles.textinp} placeholder="Add Task" value={textInput} onChangeText={textChang} />
        <View style={styles.addcancel}>
          <Button title="Add Task" onPress={taskAdd} color='green'/>
          <Button title="Cancel" onPress={props.cancelmodal} color='red'/>
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  view1: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textinp: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    paddingLeft: 20,
    borderRadius: 50,
  },
  addcancel: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 6
  }
})

export default AddGoal;
