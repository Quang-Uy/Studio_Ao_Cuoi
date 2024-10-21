import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HeaderDetal() {
    const navigation = useNavigation();

    const hanlderExit = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={hanlderExit}>
            <Icon
                    name='arrow-back-ios'
                    size={25}
                    color="#FF1493"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Image style={styles.logoImage} source={require('../../../assets/images/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 25,
        margin: 15,
    },
    logoImage: {
        width: 60,
        height: 30,
        marginLeft: 135,
    }
})