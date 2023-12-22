import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../components/CustomInput'
import FixButton from '../components/FixButton'
import theme from '../utils/styles'

const VerificationCode = ({navigation}) => {
  return (
    <View style={{flex:1}}>
<AntDesign name='arrowleft' size={30} />
    <View style={{flex:0.9,justifyContent:'space-evenly'}}>
<View>
  <Text style={{fontSize:20,fontWeight:'500',color:'black',textAlign:'center',fontFamily:theme.fonts.bold}}>Verification Code</Text>
  
  </View>
  <Image source={require('../images/IMG.png')} />
  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
    <TextInput placeholder='____' style={styles.codeinput}/>
    <TextInput placeholder='____' style={styles.codeinput}/>
    <TextInput placeholder='____' style={styles.codeinput}/>
    <TextInput placeholder='____' style={styles.codeinput}/>
  </View>
  
    </View>
    <View><Text style={{textAlign:'center',marginHorizontal:30,fontFamily:theme.fonts.regular}}><Text style={{color:'black'}}> 00:20</Text> resend confirmation code.</Text></View>
  <View style={{flex:0.1, backgroundColor:'rgba(151, 117, 250, 1)'}}>
<FixButton Text={'Confirm Code'} color={'rgba(151, 117, 250, 1)'} onPress={()=>navigation.replace('nps')}/>
  </View>

</View>
  )
}

export default VerificationCode

const styles = StyleSheet.create({
    codeinput:{
        backgroundColor:'white',
        padding:10,
        alignItems:'center'
    }
})