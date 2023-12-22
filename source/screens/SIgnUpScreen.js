import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import FixButton from '../components/FixButton'
import CustomInput from '../components/CustomInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
import theme from '../utils/styles'

const SIgnUpScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <AntDesign name='arrowleft' size={28} />
        <Text style={styles.title}>
          Sign Up
        </Text>
        <View>
          <CustomInput
            placeholder={'Username'}
          />
          <CustomInput
            placeholder={'Password'}
          />
          <CustomInput
            placeholder={'Email Address'}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>
            Remember Me
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: 'rgba(52, 199, 89, 1)' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.lastview}>
        <FixButton
          Text={'Sign Up'}
          color={'rgba(151, 117, 250, 1)'}
          onPress={() => navigation.navigate('Wlcm')}
        />
      </View>

    </View>
  )
}

export default SIgnUpScreen

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    margin:10,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    fontFamily: theme.fonts.extraBold
  },
  txt: {
    fontFamily: theme.fonts.regular
  },
  lastview: {
    flex: 0.1,
    backgroundColor: 'rgba(151, 117, 250, 1)',
  }
})