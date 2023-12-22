import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import SplashScreen from './source/screens/SplashScreen'
import GenderScreen from './source/screens/GenderScreen'
import AccountLinkingScreen from './source/screens/AccountLinkingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import SIgnUpScreen from './source/screens/SIgnUpScreen'
import WelcomeScreen from './source/screens/WelcomeScreen'
import ForgotPassword from './source/screens/ForgotPassword'
import VerificationCode from './source/screens/VerificationCode'
import NewPassword from './source/screens/NewPassword'
import HomeScreen from './source/screens/HomeScreen'
import SingleItem from './source/screens/SingleItem'
import UserProfile from './source/screens/UserProfile'
import CartScreen from './source/screens/CartScreen'

const Stack = createNativeStackNavigator();
const App = () => {
const [showSplash, setSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000);
  }, [])
  return (
    
    
    
    <NavigationContainer>
  <Stack.Navigator initialRouteName='Wlcm'
  screenOptions={{ headerShown: false }}>
  {showSplash ?  <Stack.Screen name="ss" component={SplashScreen} />
    :
    <Stack.Screen name="Gndr" component={GenderScreen} />
  }
  <Stack.Screen name="alg" component={AccountLinkingScreen} />
  <Stack.Screen name='sign' component={SIgnUpScreen}/>
  <Stack.Screen name='Wlcm' component={WelcomeScreen}/>
  <Stack.Screen name='fgp' component={ForgotPassword}/>
  <Stack.Screen name='vfc' component={VerificationCode}/>
  <Stack.Screen name='nps' component={NewPassword}/>
  <Stack.Screen name='hsn' component={HomeScreen}/>
  <Stack.Screen name='sni' component={SingleItem}/>
  <Stack.Screen name='usp' component={UserProfile}/>
  <Stack.Screen name='crt' component={CartScreen}/>
</Stack.Navigator> 
</NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})