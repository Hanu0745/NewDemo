
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButtons from "./customButtons";
import { AntDesign } from '@expo/vector-icons';

const StartGame = () => {
    const [score, setScore] = useState();

    const clearText = () => {
        setScore('');
    }

    const ScoreAdd = (e) => {
        console.log(score);

        const changetonumber = parseInt(score);

        if (isNaN(changetonumber) || changetonumber <= 0 || changetonumber > 99) {
            Alert.alert(
                'Not a Valid Number',
                'Enter a Valid Number',
                [{
                    text: 'Okay',
                    onPress: clearText,
                    style: 'destructive'
                }]
            );
        } else {
            setScore('');
            console.log('valid number');
        }

    }


    return (
        <View style={styles.buttoncontainer}>
            <TextInput style={styles.inputtext}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={setScore}
                value={score}
            />
            <View style={styles.buttonss}>
                <CustomButtons AddScore={ScoreAdd}><AntDesign name= "minuscircle" size={24} color="black" /></CustomButtons>
                <CustomButtons AddScore={ScoreAdd}><AntDesign name="pluscircle" size={24} color="black" /></CustomButtons>
            </View>
        </View>
    )
}

export default StartGame;


const styles = StyleSheet.create({

    buttoncontainer: {
        width: '80%',
        marginTop: 50,
        backgroundColor: '#06841A',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 24,
        borderRadius: 20
    },
    inputtext: {
        height: 50,
        textAlign: 'center',
        fontSize: 30,
        color: 'orange',
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonss: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
})