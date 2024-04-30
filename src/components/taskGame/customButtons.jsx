
import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const CustomButtons = (props) => {


    const pressedValue = () => {
        console.log("getting");
        props.AddScore()
    }

    return(
        <View style={styles.mainContainer}>
            <Pressable style={styles.innerbuttoncontainer} android_ripple={{color: '#158B04'}} onPress={props.AddScore}>
                <Text style={styles.textinpt} >{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButtons;


const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#38CD23',
        borderRadius: 50,
        margin: 4,
        overflow: 'hidden',
        elevation: 15
    },
    innerbuttoncontainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    textinpt: {
        color: 'white',
        fontWeight: 'bold',
    }
})