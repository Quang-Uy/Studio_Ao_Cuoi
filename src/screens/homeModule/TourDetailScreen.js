import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import HeaderDetal from './components/HeaderDetal';

const ServiceDetailScreen = ({ route }) => {
    const { dichvu } = route.params;
    //const navigation = useNavigation();

    // const handleBookTour = () => {
    //     Alert.alert("Thông báo", "Tính năng sẽ sớm được cập nhật.");
    //     navigation.navigate('Home', { dichvu });
    // };

    // const handleCommitmentPrice = () => {
    //     Alert.alert("Đảm bảo giá thấp nhất", "Chúng tôi đảm bảo giá thấp nhất trong tất cả trải nghiệm mà chúng tôi tìm thấy. Nếu bạn tìm thấy cùng một sản phẩm rẻ hơn trong vòng ba ngày kể từ khi đặt chỗ hoặc khi bạn đang ở điểm đến, chúng tôi sẽ hoàn lại phần chênh lệch.");
    // };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContent}>
                <HeaderDetal />
                <Image style={{ width: '100%', height: 150 }} source={require('../../assets/images/slider2.png')} />
                <View style={styles.tourContainer}>
                    <Text style={styles.tourName}>{dichvu.TenDichVu}</Text>
                    <Image source={{ uri: dichvu.LinkAnh }} style={styles.tourImage} />
                    <View style={styles.priceAndStatusContainer}>
                        <Text style={styles.Gia}>Giá: {dichvu.Gia} ₫</Text>
                        <Text style={styles.Trangthai}>Trạng thái: {dichvu.TrangThai}</Text>
                    </View>
                    <Text style={styles.title}>Tổng quan</Text>
                    <Text style={styles.tourOverview}>{dichvu.MoTa}</Text>
                </View>
            </ScrollView>
            {/* <View style={styles.floatingView}>
                <View>
                    <Text style={styles.titlePrice}>Chỉ từ :</Text>
                    {/* <Text style={styles.tourPrice}>₫{tour.price}</Text> */}
                    {/* <TouchableOpacity onPress={handleCommitmentPrice}>
                        <Text style={styles.commitmentPrice}>Đảm bảo giá thấp nhất</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bookButton} onPress={handleBookTour}>
                    <Text style={styles.buttonText}>Tìm tour</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCADB',
    },
    tourContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        margin: 10,
        paddingBottom: 100,
    },
    tourName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#FF1493',
    },
    tourImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    priceAndStatusContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Gia: {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
    },
    Trangthai: {
        fontSize: 16,
        fontWeight: '500',
        color: 'green',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF1493',
        marginBottom: 5,
        marginTop: 10,
    },
    tourOverview: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        fontWeight: '500',
        color: '#000000',
    },
});

export default ServiceDetailScreen;
