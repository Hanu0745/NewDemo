import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, StatusBar, Pressable, Button, TextInput, Modal } from "react-native";
import AddGoal from "./addTask";

const TaskOne = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [addmodal, setAddModal] = useState(false);

  const AddModals = () => {
    setAddModal(true);
  }

  const CancelModal = () => {
    setAddModal(false);
  }

  const taskAdd = (textInput) => {
    if (textInput) {
      setTasks(currentTasks => [...currentTasks, { text: textInput, key: Math.random().toString() }]);
    }
    setAddModal(false);
  };

  const deleteTask = (id) => {
    setTasks(currentTasks => currentTasks.filter(task => task.key !== id));
  };

  const editTask = (id, newText) => {
    console.log('coming');
    setTasks(currentTasks =>{
      const updatedTasks = currentTasks.map(task =>
        task.key === id ? { ...task, text: newText } : task
      );
      console.log("Updated tasks:", updatedTasks);
      return updatedTasks;
    });
    setEditingTaskId(null);
    setEditedTaskText("");
  };

  const startEditingTask = (id, currentText) => {
    setEditingTaskId(id);
    setEditedTaskText(currentText);
  };

  return (    <View style={styles.container}>
      <StatusBar backgroundColor='green' barStyle='dark-content' />
      {addmodal && <AddGoal addgoal={taskAdd}  visiblemodel={addmodal} cancelmodal={CancelModal}/>}
      <View style={styles.view2}>
        <Button title="Add Task" onPress={AddModals}/>
        {/* <Text style={{ marginBottom: 20, fontWeight: '600' }}>Added Tasks....</Text> */}
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Pressable android_ripple={{ color: 'blue' }}>
              <View style={styles.taskes}>
                {editingTaskId === item.key ? (
                  <TextInput
                    style={{ color: 'white' }}
                    value={editedTaskText}
                    onChangeText={setEditedTaskText}
                    onSubmitEditing={() => editTask(item.key, editedTaskText)}
                    autoFocus
                  />
                ) : (
                  <Text style={{ color: 'white' }}>{item.text}</Text>
                )}
                <View style={styles.editdelete}>
                  <Button title="Edit" color='skyblue' onPress={() => startEditingTask(item.key, item.text)} />
                  <Button title="Delete" color='red' onPress={() => deleteTask(item.key)} />
                  <Button title="Update" color='skyblue' onPress={() => editTask(item.key, editedTaskText)} />
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view2: {
    flex: 5,
    width: '90%',
  },
  taskes: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 6
  },
  editdelete: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default TaskOne;
