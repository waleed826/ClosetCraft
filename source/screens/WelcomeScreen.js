import { StyleSheet, Text, View, Switch, Alert, } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../components/CustomInput'
import FixButton from '../components/FixButton'
import theme from '../utils/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const WelcomeScreen = ({ navigation }) => {
  const [usrnm, setUsrNm] = useState('johnd');
  const [pswrd, setPswrd] = useState('m38rmF$');
  const [userData, setUserData] = useState([])
  const [useData, setUseData] = useState([])

  useEffect(() => {
    apiUserFetch()
    saveButton()
  }, [])

  useEffect(() => {
    getData()
  }, [])
  const validateCredentials = () => {
    for (const user of userData) {
      if (usrnm === user.username && pswrd === user.password) {
        console.log('Valid credentials');
        console.log(user.name.firstname)
        navigation.replace('hsn',{
          id:user.id,
          name:user.name.firstname
        })
        
      }
     
      
    }


    
  };



  const getData = async () => {
    const data = await AsyncStorage.getItem('my-key')
    const contacts = JSON.parse(data)
    setEvent(contacts)
  }
  const apiUserFetch = () => {
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(json => setUserData(json))
  }
  const saveButton = async () => {
    const savedUser = userData
    console.log("🚀 ~ file: WelcomeScreen.js:46 ~ saveButton ~ savedUser:", JSON.stringify(savedUser))
    setUseData(savedUser)
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}>
      <AntDesign name='arrowleft' size={30} style={{ marginHorizontal: 20, margin: 10 }} />
      <View style={{}}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.text}>Please enter your data to continue</Text>
      </View>
      <View>

        <CustomInput
          value={usrnm}
          placeholder={'Username'}
          onChangeText={setUsrNm}
        />
        <CustomInput
          value={pswrd}
          placeholder={'Password'}
          onChangeText={setPswrd}
        />
      </View>
      <Text onPress={() => navigation.navigate('fgp')} style={styles.txtpswrds}>Forgot password?</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <Text style={{ fontFamily: theme.fonts.regular }}>Remember Me</Text>
        <Switch
          trackColor={{ false: '#767577', true: 'rgba(52, 199, 89, 1)' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginHorizontal: 20, fontFamily: theme.fonts.regular }}>By connecting your account confirm that you agree with our<Text style={{ color: 'black' }}> Term and Condition</Text></Text>
        <FixButton Text={'Login'} color={'rgba(151, 117, 250, 1)'} onPress={validateCredentials} />

      </View>
    </KeyboardAwareScrollView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    fontFamily: theme.fonts.bold
  },
  text: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    fontFamily: theme.fonts.regular
  },
  txtpswrds: {
    textAlign: 'right',
    marginHorizontal: 25,
    color: 'rgba(234, 67, 53, 1)',
    fontFamily: theme.fonts.regular,
  }
})