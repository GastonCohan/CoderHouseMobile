import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const LoginScreen = ({ }) => {
    const navigation = useNavigation();

    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
