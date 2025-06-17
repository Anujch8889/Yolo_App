import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';

const ginie = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content" // white bg ke liye dark icons
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.text}>This is Ginie Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ginie;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    // marginBottom:200
  },
});
