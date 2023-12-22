import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import MapView , {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
const GeoLocationScreen = () => {

  useEffect(()=>{
   getCurrentLocation()
  },[])

  const [currentLocation , setCurrentLocation]= useState(0)
  // console.log("🚀 ~ file: App.tsx:11 ~ App ~ currentLocation:", currentLocation)
  const getCurrentLocation = ()=>{
    Geolocation.getCurrentPosition(info => {
      return setCurrentLocation(info.coords)
    })
    // console.log("🚀 ~ file: GeoLocationScreeen.js:15 ~ getCurrentLocation ~ info:",setCurrentLocation)
  }
  return (
    <View style={{flex:1}}>
     <MapView
     style={{width:'100%',height:'100%'}}
     region={{
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.0121,
      longitudeDelta: 0.021,
     }}
     >
      <Marker draggable coordinate={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude
        }}
        pinColor={'red'}
        title={`${currentLocation.latitude}`}
        
        />
     </MapView>
    </View>
  )
}

export default GeoLocationScreen

const styles = StyleSheet.create({})