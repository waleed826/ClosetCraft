import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../components/CustomInput'
import FixButton from '../components/FixButton'
import theme from '../utils/styles'

const NewPassword = ({navigation}) => {
  return (
    <View style={{flex:1}}>
<AntDesign name='arrowleft' size={30} />
    <View style={{flex:0.9,justifyContent:'space-evenly'}}>
<View>
  <Text style={{fontSize:20,fontWeight:'500',color:'black',textAlign:'center',fontFamily:theme.fonts.bold}}>New Password</Text>
  
  </View>
  <View style={{}}>
    <CustomInput placeholder={'Password'} />
    <CustomInput placeholder={'Cofirm Password'} />
  </View>
  
    </View>
    <View><Text style={{textAlign:'center',fontFamily:theme.fonts.regular}}>Please write your new password.</Text></View>
  <View style={{flex:0.1, backgroundColor:'rgba(151, 117, 250, 1)'}}>
<FixButton Text={'Confirm Mail'} color={'rgba(151, 117, 250, 1)'} onPress={()=>navigation.replace('hsn')}/>
  </View>

</View>
  )
}

export default NewPassword

const styles = StyleSheet.create({})