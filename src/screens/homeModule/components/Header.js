import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Icon
                name='menu'
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#FF1493"
                style={styles.icon}
            />
            <Image style={{ width: 60, height: 30 }} source={require('../../../assets/images/logo.png')} />
            <TouchableOpacity>
                <Icon
                    name='search'
                    size={30}
                    color="#FF1493"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFCADB',
        padding: 10,
        margin: 15,
        marginTop: 25,
        borderRadius: 10,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})