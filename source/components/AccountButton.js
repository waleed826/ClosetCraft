import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const AccountButton = (props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: props.color, height: 60,margin:10, justifyContent: 'center',alignItems:'center', borderRadius: 10,flexDirection:'row'}} >
        <Image source={props.source} style={{marginRight:10}} />
      <Text style={styles.txt}>{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default AccountButton

const styles = StyleSheet.create({
    txt:{
        color: 'white', 
        textAlign: 'center',
        fontSize:20,
        fontFamily:theme.fonts.regular
        }
})