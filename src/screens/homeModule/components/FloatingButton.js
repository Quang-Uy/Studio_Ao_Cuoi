import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'

export default function FloatingButton() {

    const openApp = (url) => {
        Linking.openURL(url).catch(err => console.error("Lỗi mở app: ", err));
    }

    return (
        <View style={styles.floatingButtonMain}>
            {/* Thay số điện thoại cụ thể vào đây */}
            <TouchableOpacity style={styles.floatingButton} onPress={() => openApp('tel:123456789')}> 
                <Image style={{ width: 30, height: 25 }} source={require('../../../assets/images/logo_phone.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton} onPress={() => openApp('mailto:uybqph35004@fpt.edu.vn')}>
                <Image style={{ width: 30, height: 25 }} source={require('../../../assets/images/logo_gmail.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton} onPress={() => openApp('https://www.instagram.com/bqu310_/')}>
                <Image style={{ width: 30, height: 25 }} source={require('../../../assets/images/logo_instagram.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton} onPress={() => openApp('https://www.facebook.com/quanguy.bui.1/')}>
                <Image style={{ width: 30, height: 25 }} source={require('../../../assets/images/Logo_fb.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    floatingButtonMain: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
    },
    floatingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
})