import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUpScreen Screen</Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title='Go to Error'
        onPress={() => {
          props.navigation.navigate('Error')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});