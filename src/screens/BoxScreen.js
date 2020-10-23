import React from 'react'

import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box screen</Text>
            <Text style={styles.textStyle}>Box screen</Text>
            <Text style={styles.textStyle}>Box screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        // flexDirection: 'row',
        // alignItems: "center",
        margin: 3,
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        justifyContent: 'space-between'
        // padding: 5
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // padding: 5
    }

})

export default BoxScreen;