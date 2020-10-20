import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const gettingStarted = "Getting Started w/ React Native!"
    const name = "London"
    return (
        <View>
            <Text style={styles.startedText}>{gettingStarted}</Text>
            <Text style={styles.nameText}>My name is {name}</Text>
        </View>

    )
}

// auto validates styling rules applied to the application
const styles = StyleSheet.create({
    startedText: {
        fontSize: 45
    },
    nameText: {
        fontSize: 20
    }
})

export default ComponentsScreen;