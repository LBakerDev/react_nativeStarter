import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {


  return (
    <View>
      <Text style={styles.text}>First App</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go to Components Demo" />

      {/* button with additional functionality. Can also use for images etc */}
      <Button
        title="Go to List Demo!"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to Box Model Screen"
        onPress={() => navigation.navigate('BoxModel')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
