import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import API from '../../../api/Api';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

export default function ServiceItem({ limit }) {
    const [dichvus, setDichVus] = useState([]);
    const navigation = useNavigation();

    // Fetch data
    const fetchData = () => {
        API.get("/dichvu")
            .then((response) => {
                console.log(response.data);
                setDichVus(response.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {dichvus.slice(0, limit).map((dichvu) => (
                <TouchableOpacity
                    key={dichvu.ID}
                    style={styles.tourItem}
                    onPress={() => navigation.navigate('ServiceDetail', { dichvu })}
                >
                    <Image
                        source={{ uri: dichvu.LinkAnh }}
                        style={styles.tourImage}
                    />
                    <View style={styles.tourTitle}>
                        <Text style={styles.tourName}>{dichvu.TenDichVu}</Text>
                        <View style={styles.timeContainer}>
                            <Text style={styles.gia}>Giá: {dichvu.Gia} ₫</Text>
                            <Text style={styles.Trangthai}>Trạng thái: {dichvu.TrangThai}</Text>
                        </View>
                        <Text style={styles.Mota}>{dichvu.MoTa}</Text>
                        <View style={styles.showContent}>
                            <Image source={require('../../../assets/images/logo_next.png')} />
                            <Text style={styles.textShow}>Xem chi tiêt</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
    },
    tourItem: {
        marginBottom: 20,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    tourTitle: {
        margin: 10,
    },
    tourImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    tourName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FF1493',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    },
    gia: {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
    },
    Trangthai: {
        fontSize: 16,
        fontWeight: '500',
        color: 'green',
    },
    Mota: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
    },
    showContent: {
        marginTop: 15,
        flexDirection: 'row',
        margin: 5,
    },
    textShow: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 16,
        textDecorationLine: 'underline',
    }
});