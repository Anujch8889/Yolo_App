import { View, Text, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image, Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ginie from '../carddesign'

const yolopay = () => {
  return (
    <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor:'black'}}>
         <StatusBar
        barStyle="light-content" // Light icons for dark background
        backgroundColor="transparent" // Or use 'black' if needed
        translucent={true} // Makes the status bar float over the content
      />
        <View style={{padding:20}}>
            <Text style={{fontSize:20, fontWeight: 'bold', color:'white' }}>
                select payment mode
            </Text>
            <Text style={{marginVertical:10, color:'white', fontWeight:'100'}}>
                choose your preferred payment method to make payment.
            </Text>
            <View style={{flexDirection:'row', gap:10, marginVertical:'5'}}>
                <TouchableOpacity 
                    style={{
                            borderTopWidth:1,
                            borderLeftWidth:1,
                            borderRightWidth:1,
                            borderColor:'white',
                            borderRadius:25, 
                            paddingVertical: 10,
                            paddingHorizontal: 30,

                            }} >
                    <Text style={{color:'white'}}>
                        pay
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                            borderTopWidth: 1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 0,
                            borderColor: 'red',
                            borderRadius: 25,
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            }}>
                    <Text style={{color:'red'}}>
                        card
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:'white', marginTop:20, opacity: 0.3}}>
                    YOUR DIGITAL DEBIT CARD
                </Text>
            </View>
            <View  >
                <Ginie/>
                
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default yolopay