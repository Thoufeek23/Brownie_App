import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Link href="/">Go to home screen</Link>
      </View>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
