import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const FixButton = (props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: props.color,padding:10,justifyContent:'flex-start',alignItems:'center',opacity:9}} onPress={props.onPress} >
      <Text style={styles.txt}>{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default FixButton

const styles = StyleSheet.create({
    txt:{
        color: 'white', 
        textAlign: 'center',
        fontSize:20,
        fontFamily:theme.fonts.regular
    }
})