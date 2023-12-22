import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiCall } from '../WebHandler/WebHandler'
import Urls from '../WebHandler/Urls'
import theme from '../utils/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserProfile = () => {

  const [user, setUser] = useState([])
  // console.log("🚀 ~ file: UserProfile.js:11 ~ UserProfile ~ user:", user.name.firstname)
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setId()
  }, [])

  const setId = async () => {
    const id = await AsyncStorage.getItem('@loginId')
    const setId = await JSON.parse(id)
    getData(setId)
  }
  const getData = async (id) => {
    try {
      const response = await ApiCall({
        URL: Urls.USERS + id,
        verb: 'GET'
      })
      if (response) {
        console.log("🚀 ~ file: UserProfile.js:15 ~ getData ~ response:", response)
        setUser(response)
        setLoading(false)
      }
      else {
        console.log("🚀 ~ file: UserProfile.js:18 ~ getData ~ response:====>>error", response)

      }
    } catch (error) {
      console.log("🚀 ~ file: UserProfile.js:22 ~ getData ~ error:", error)
    }
  }
  return (
    <ScrollView style={{ padding: 10, backgroundColor: 'rgba(128,128,128,0.2)' }}>
    {loading ? 
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} color={'red'}/>
    </View>
    :
      <><Text style={styles.label}>First Name:</Text><Text style={styles.style}>{user?.name?.firstname}</Text><Text style={styles.label}>Last Name:</Text><Text style={styles.style}>{user?.name?.lastname}</Text><Text style={styles.label}>Email:</Text><Text style={styles.style}>{user?.email}</Text><Text style={styles.label}>Username:</Text><Text style={styles.style}>{user?.username}</Text><Text style={styles.label}>Phone:</Text><Text style={styles.style}>{user?.phone}</Text></>
    }
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  style: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: 'gray',
  },
  label: {
    fontFamily: theme.fonts.regular,
    fontSize: 22,
    color: 'black',
  }
})