import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AccountButton from '../components/AccountButton'
import FixButton from '../components/FixButton'
import theme from '../utils/styles'

const AccountLinkingScreen = ({ navigation }) => {
    return (
        <View style={styles.mainview}>
            <View style={styles.firstview}>
                <AccountButton
                    Text={'Facebook'}
                    color={'rgba(66, 103, 178, 1)'}
                    source={require('../images/Facebook.png')}
                />
                <AccountButton
                    Text={'Twitter'}
                    color={'rgba(29, 161, 242, 1)'}
                    source={require('../images/Twitter.png')}
                />
                <AccountButton
                    Text={'Google'}
                    color={'rgba(234, 67, 53, 1)'}
                    source={require('../images/Google.png')}
                />
            </View>
            <View>
                <Text style={styles.firsttxt}>
                    Already have an account?
                    <Text onPress={() => navigation.navigate('Wlcm')} style={styles.scndtxt} >
                        {'\t'}Signin
                    </Text>
                </Text></View>
            <View style={{ flex: 0.1, backgroundColor: 'rgba(151, 117, 250, 1)' }}>
                <FixButton Text={'Create an Account'} color={'rgba(151, 117, 250, 1)'} onPress={() => navigation.navigate('sign')} />
            </View>
        </View>
    )
}

export default AccountLinkingScreen

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: 'white'
    },
    firstview: {

        flex: 0.9,
        justifyContent: 'center',
        padding: 10,
        margin: 10
    },
    firsttxt: {
        color: 'rgba(143, 149, 158, 1)',
        textAlign: 'center',
        margin: 10,
        fontFamily:theme.fonts.regular,
    },
    scndtxt:{ 
        color: 'rgba(29, 30, 32, 1)', 
        }
})