import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar config */}
      <StatusBar
        barStyle="dark-content" // dark icons for light background
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.text}>This is Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // avoid overlap
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
    // marginBottom:200,
  },
});
