import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const CustomInput = (props) => {
    return (
        <View style={styles.fixView}>
            <TextInput
                placeholder={props.placeholder}
                maxLength={props?.length}
                keyboardType={props?.keyboardType}
                placeholderTextColor={'black'}
                style={{ width: '70%', fontFamily:theme.fonts.light }}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
            {/* <AntDesign name={props.name} size={40} onPress={props.onPress}/> */}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    fixView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        borderBottomWidth: 1,
        borderRadius: 10,
        elevation: 3
    }
})