import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './components/Header'
import ServiceItem from './components/ServiceItem'
import LottieView from 'lottie-react-native'
import FloatingButton from './components/FloatingButton'

export default function ServiceScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Header />
            <Image style={{ width: '100%', height: 150, }} source={require('../../assets/images/banner_deital1.png')} />
            <View style={styles.mainTilte}>
            <Text style={styles.title}>Dịch vụ</Text>
            <LottieView
                source={require("../../assets/Animation - 1728464619549.json")}
                style={{ width: 100, height: 50, right: 24 }}
                autoPlay
                loop
            />
            </View>
            <Text style={styles.subTitle}>Dịch vụ du lịch của chúng tôi không chỉ đa dạng, chất lượng cao mà còn có giá cả phải chăng, mang đến trải nghiệm tốt nhất cho khách hàng.</Text>
            <ServiceItem />
        </ScrollView>
        <FloatingButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    mainTilte: {
        margin: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FF1493',
    },
    subTitle: {
        marginTop: -15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        color: '#FF1493',
    },
})