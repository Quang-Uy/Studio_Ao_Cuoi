import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import API from '../../../api/Api';

export default function InformationItem() {
    const [services, setServices] = useState([]);
    const navigation = useNavigation();

    // Fetch data
    const fetchData = () => {
        API.get("/services")
            .then((response) => {
                console.log(response.data);
                setServices(response.data); // Lưu toàn bộ mảng services từ API
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {services.map((service) => (
                <TouchableOpacity
                    key={service.id}
                    style={styles.informationItem}
                    onPress={() => navigation.navigate('InformationDetail', { service })}
                >
                    <Image
                        source={{ uri: service.image }}
                        style={styles.informationImage}
                    />
                    <View style={styles.informationTitle}>
                        <Text style={styles.informationName}>{service.title}</Text>
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
    informationItem: {
        marginBottom: 20,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    informationTitle: {
        margin: 10,
    },
    informationImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    informationName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FF1493',
    }
});
