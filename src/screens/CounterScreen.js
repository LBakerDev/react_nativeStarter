import React, { useState } from 'react'

import { View, Button, Text, StyleSheet } from 'react-native';

const counterScreen = () => {

    const [count, setCount] = useState(0);

    return (
        <View>
            <Button title="Increase Counter" onPress={() => {
                setCount(count + 1);
            }}></Button>
            <Button title="Decrease Counter" onPress={() => {
                setCount(count - 1);

            }}></Button>
            <Text>Current Count: {count} </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default counterScreen;