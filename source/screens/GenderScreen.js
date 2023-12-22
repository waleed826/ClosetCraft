import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const GenderScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.mainView}>
            <View style={styles.vew}>
                <ImageBackground
                    source={require('../images/smiling.png')}
                    resizeMode='contain'
                    style={styles.bckimg}>
                    <View style={styles.secondView}>
                        <Text style={styles.head}>
                            Look Good, Feel Good
                        </Text>
                        <Text style={styles.body}>
                            Create your individual & unique style and{'\n'}look amazing everyday.
                        </Text>
                        <View style={styles.btnview}>
                            <TouchableOpacity style={styles.touchButton}>
                                <Text style={styles.textStyle} >Men</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.toucButton}>
                                <Text style={styles.txtStyle}>Women</Text>
                            </TouchableOpacity>
                        </View>
                        <Text
                            onPress={() => navigation.navigate('alg')}
                            style={styles.skip} >
                            Skip
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        </ScrollView>
    )
}

export default GenderScreen

const styles = StyleSheet.create({
    mainView: {
        // flex:1,
        backgroundColor: '#9775FA',
        // alignItems:'center',
        // justifyContent:'center',
    },
    secondView: {
        borderRadius: 30,
        padding: 20,
        margin: 10,
        backgroundColor: 'white',
        // position:'absolute'
        // position:'absolute',
        // bottom:5,
        // left:7  
    },
    touchButton: {
        backgroundColor: "#F5F6FA",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toucButton: {
        backgroundColor: "#9775FA",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#8F959E',
        margin: 10,
        fontSize: 20,
        fontFamily:theme.fonts.regular,
    },
    txtStyle: {
        color: 'white',
        margin: 10,
        fontFamily:theme.fonts.regular,
    },
    bckimg: {
        height: 750,
        width: 350,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btnview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    vew:{
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    head:{ 
        color: 'black', 
        fontSize: 30, 
        textAlign: 'center',
        fontFamily:theme.fonts.bold
     },
     body:{ 
        color: 'gray', 
        textAlign: 'center', 
        fontFamily:theme.fonts.regular
    },
    skip:{
         textAlign: 'center', 
         fontFamily:theme.fonts.regular
    }
})