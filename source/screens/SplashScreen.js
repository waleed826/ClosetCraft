import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.mainView}>
      {/* <Text>SplashScreen</Text> */}
      <Image source={require('../images/Logo.png')} />
    </View>

  )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#9775FA',
        alignItems:'center',
        justifyContent:'center',
    }
})