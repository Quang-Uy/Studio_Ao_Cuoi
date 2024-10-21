// InformationDetail.js
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import HeaderDetal from './components/HeaderDetal';

const InformationDetail = () => {
    const route = useRoute();
    const { service } = route.params; // Nhận dữ liệu từ navigation

    return (
        <ScrollView style={styles.container}>
            <HeaderDetal />
            <Image style={{ width: '100%', height: 150, }} source={require('../../assets/images/slider2.png')} />
            <View style={styles.informationContainer}>
                <Text style={styles.title}>{service.title}</Text>
                <Text style={styles.intro}>{service.intro}</Text>
                {/* Hiển thị nội dung chi tiết */}
                {service.content.map((item, index) => (
                    <View key={index} style={styles.contentItem}>
                        {item.text.map((text, idx) => (
                            <Text key={idx} style={styles.contentText}>{text}</Text>
                        ))}
                        {item.imageContent && (
                            <Image source={{ uri: item.imageContent }} style={styles.contentImage} />
                        )}
                    </View>
                ))}
                {/* Hiển thị ghi chú nếu có */}
                {service.notes && (
                    <View style={styles.notes}>
                        <Text style={styles.notesTitle}>{service.notes.title1}</Text>
                        <Text style={styles.intro}>{service.notes.intro}</Text>
                        {service.notes.content1.map((note, index) => (
                            <View key={index}>
                                {note.text.map((text, idx) => (
                                    <Text key={idx} style={styles.contentText}>{text}</Text>
                                ))}
                                {note.imageContent && (
                                    <Image source={{ uri: note.imageContent }} style={styles.contentImage} />
                                )}
                            </View>
                        ))}
                        <Text style={styles.notesTitle}>{service.notes.title2}</Text>
                        {service.notes.content2.map((note, index) => (
                            <View key={index}>
                                {note.text.map((text, idx) => (
                                    <Text key={idx} style={styles.contentText}>{text}</Text>
                                ))}
                                {note.imageContent && (
                                    <Image source={{ uri: note.imageContent }} style={styles.contentImage} />
                                )}
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCADB',
    },
    informationContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FF1493',
    },
    intro: {
        fontSize: 16,
        marginBottom: 10,
        color: '#000000',
    },
    contentItem: {
        marginBottom: 10,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        marginBottom: 5,
        color: '#000000',
    },
    contentImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 15,
    },
    notesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF1493',
    },
    notesIntro: {

    },
    notesText: {
        fontSize: 16,
        color: '#666',
    },
});

export default InformationDetail;
