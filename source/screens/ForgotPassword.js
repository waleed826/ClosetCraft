import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../components/CustomInput'
import FixButton from '../components/FixButton'
import theme from '../utils/styles'

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AntDesign name='arrowleft' size={30} />
      <View style={{ flex: 0.9, justifyContent: 'space-evenly' }}>
        <View>
          <Text style={styles.title}>Forgot Password</Text>

        </View>
        <Image source={require('../images/IMG.png')} />
        <View style={{}}>
          <CustomInput placeholder={'Username'} />
        </View>

      </View>
      <View><Text style={{ textAlign: 'center', marginHorizontal: 30,fontFamily:theme.fonts.regular }}>Please write your email to receive a confirmation code to set a new password.</Text></View>
      <View style={{ flex: 0.1, backgroundColor: 'rgba(151, 117, 250, 1)' }}>
        <FixButton Text={'Confirm Mail'} color={'rgba(151, 117, 250, 1)'} onPress={() => navigation.replace('vfc')} />
      </View>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    fontFamily: theme.fonts.extraBold,
  }
})