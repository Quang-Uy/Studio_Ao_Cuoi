import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import FloatingButton from './components/FloatingButton';
import API from '../../api/Api';
import LottieView from 'lottie-react-native';

export default function IntroduceScreen({ limit }) {
  const [introduce, setIntroduce] = useState([]);
  const navigation = useNavigation();

  // Fetch data
  const fetchData = () => {
    API.get("/introduce")
      .then((response) => {
        console.log(response.data);
        setIntroduce(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Image style={{ width: '100%', height: 150, marginBottom: 10 }} source={require('../../assets/images/slider5.png')} />
        {introduce.slice(0, limit).map((introduces) => (
          <View key={introduces.id} style={styles.introduceContainer}>
            <Text style={styles.introduceName}>{introduces.name}</Text>
            {introduces.content.map((item, index) => (
              <View key={index} style={styles.contentItem}>
                <Text style={styles.contentText}>{item.text}</Text>
                <Text style={styles.contentNotes}>{item.notes}</Text>
                {item.image && (
                  <Image source={{ uri: item.image }} style={styles.contentImage} />
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  introduceContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  introduceName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FF1493',
  },
  contentItem: {
    marginBottom: 5,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF1493',
    marginBottom: 5,
  },
  contentNotes: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#002147',
    marginBottom: 10,
  },
  contentImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
