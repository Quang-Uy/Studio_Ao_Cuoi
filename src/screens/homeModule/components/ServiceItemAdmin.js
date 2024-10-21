import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import API from '../../../api/Api';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { Feather } from '@expo/vector-icons'; // Thêm thư viện icons nếu cần

export default function ServiceItemAdmin({ limit }) {
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

    // Xóa dịch vụ
    const deleteDichVu = (id) => {
        Alert.alert('Xác nhận', 'Bạn có chắc chắn muốn xóa dịch vụ này?', [
            { text: 'Hủy', style: 'cancel' },
            { text: 'Xóa', onPress: () => {
                API.delete(`/dichvu/${id}`)
                    .then(() => {
                        fetchData(); // Cập nhật lại danh sách sau khi xóa
                    })
                    .catch((err) => console.log(err));
            }},
        ]);
    };

    return (
        <View style={styles.container}>
            {dichvus.slice(0, limit).map((dichvu) => (
                <View key={dichvu.ID} style={styles.tourItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('ServiceDetail', { dichvu })}>
                        <Image source={{ uri: dichvu.LinkAnh }} style={styles.tourImage} />
                        <View style={styles.tourTitle}>
                            <Text style={styles.tourName}>{dichvu.TenDichVu}</Text>
                            <View style={styles.timeContainer}>
                                <Text style={styles.gia}>Giá: {dichvu.Gia} ₫</Text>
                                <Text style={styles.Trangthai}>Trạng thái: {dichvu.TrangThai}</Text>
                            </View>
                            <Text style={styles.Mota}>{dichvu.MoTa}</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Nút thao tác */}
                    <View style={styles.actions}>
                        {/* Nút thêm dịch vụ */}
                        <TouchableOpacity onPress={() => navigation.navigate('AddService')}>
                            <Feather name="plus-circle" size={24} color="green" />
                        </TouchableOpacity>

                        {/* Nút sửa dịch vụ */}
                        <TouchableOpacity onPress={() => navigation.navigate('EditService', { dichvu })}>
                            <Feather name="edit" size={24} color="orange" />
                        </TouchableOpacity>

                        {/* Nút xóa dịch vụ */}
                        <TouchableOpacity onPress={() => deleteDichVu(dichvu.ID)}>
                            <Feather name="trash-2" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
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
        padding: 10,
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
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
});
