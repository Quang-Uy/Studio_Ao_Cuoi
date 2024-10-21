import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper'
import Header from './components/Header';
import ServiceItem from './components/ServiceItem';
import FloatingButton from './components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import InformationItem from './components/InformationItem';

export default function HomeScreen() {
    const navigation = useNavigation();

    const handlerService = () => {
        navigation.navigate('Service');
    }

    const handlerIntro = () => {
        navigation.navigate('Introduce');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                {/* Slider header */}
                <View>
                    <Swiper style={styles.wrapperHeader} showsButtons={false} autoplay={true} autoplayTimeout={4} loop={true}>
                        <View>
                            <Image style={{ width: '100%', height: 200, }} source={require('../../assets/images/slider1.png')} />
                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 200, }} source={require('../../assets/images/slider2.png')} />
                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 200, }} source={require('../../assets/images/slider3.png')} />
                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 200, }} source={require('../../assets/images/slider4.png')} />
                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 200, }} source={require('../../assets/images/slider5.png')} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.review}>
                    <Text style={styles.mainTitle}>Câu chuyện Mailisa</Text>
                    <LottieView
                        source={require("../../assets/Animation - 1728464619549.json")}
                        style={{ width: 100, height: 50, right: 24 }}
                        autoPlay
                        loop
                    />
                    <Text style={styles.subTitle}>ĐÔI NÉT VỀ ẢNH VIỆN ÁO CƯỚI MAILISA</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textContent}>
                        Suốt 15 năm qua, Áo cưới Mailisa đã khẳng định vị thế của mình như một thương hiệu uy tín, chuyên nghiệp và chất lượng, chiếm trọn niềm tin của khách hàng. Thành công này không chỉ là minh chứng cho sự tâm huyết và nỗ lực không ngừng nghỉ của người sáng lập mà còn của toàn thể đội ngũ cán bộ nhân viên tại Áo cưới Mailisa.
                    </Text>
                    <Text style={styles.textContent}>
                        Với các bộ sưu tập váy cưới độc quyền và phong cách chụp ảnh tự nhiên, chân thực, Áo cưới Mailisa tự hào là nơi lưu giữ những khoảnh khắc hạnh phúc vĩnh cửu cho không chỉ các diễn viên, ca sĩ nổi tiếng mà còn cho hơn 60.000 cặp đôi uyên ương khác. Dù khách hàng có khó tính đến đâu, Áo cưới Mailisa vẫn luôn đem đến sự hài lòng trọn vẹn.
                    </Text>
                    <Text style={styles.textContent}>
                        Bằng nền tảng kinh nghiệm và nội lực vững chắc, Chúng tôi đã sẵn sàng cho chặng đường phát triển mới, hướng đến vị thế là nhà cung cấp dịch vụ cưới hàng đầu thành phố Hồ Chí Minh và khu vực miền Nam.
                    </Text>
                    <TouchableOpacity style={styles.showMoreContent}>
                        <Text style={styles.textShowMoreContent} onPress={handlerIntro}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                {/* Slider Footer */}
                <View style={styles.wrapperFooter}>
                    <Swiper showsButtons={false}>
                        <View>
                            <Image style={{ width: 380, height: 200, borderRadius: 10, }} source={require('../../assets/images/slider6.png')} />
                        </View>
                        <View>
                            <Image style={{ width: 380, height: 200, borderRadius: 10, }} source={require('../../assets/images/slider7.png')} />
                        </View>
                        <View>
                            <Image style={{ width: 380, height: 200, borderRadius: 10, }} source={require('../../assets/images/slider8.png')} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.serviceContainer}>
                    <View style={styles.titleHeader}>
                        <Text style={styles.mainTitle}>Dịch vụ nổi bật</Text>
                        <LottieView
                            source={require("../../assets/Animation - 1728464619549.json")}
                            style={{ width: 100, height: 50, right: 24 }}
                            autoPlay
                            loop
                        />
                    </View>
                    {/* Item dịch vụ */}
                    <ServiceItem limit={3} />
                    <TouchableOpacity style={styles.showMoreTour} onPress={handlerService}>
                        <Text style={styles.textShowMoreTour}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookingContainer}>
                    <View style={styles.titleHeader}>
                        <Text style={styles.mainTitle}>Album nổi bật</Text>
                        <LottieView
                            source={require("../../assets/Animation - 1728464619549.json")}
                            style={{ width: 100, height: 50, right: 24 }}
                            autoPlay
                            loop
                        />
                    </View>
                    <InformationItem />
                </View>
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
    review: {
        margin: 15,
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FF1493',
    },
    subTitle: {
        width: 300,
        fontSize: 19,
        fontWeight: '600',
        color: '#FF1493',
    },
    contentContainer: {
        marginLeft: 15,
        marginRight: 15,
    },
    textContent: {
        fontSize: 17,
        lineHeight: 25,
        color: '#002147',
        marginBottom: 10,
    },
    showMoreContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 50,
        backgroundColor: '#FF1493',
        borderRadius: 10,
    },
    textShowMoreContent: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
    },
    wrapperHeader: {
        height: 200,
    },
    wrapperFooter: {
        margin: 15,
        width: 380,
        height: 200,
        marginBottom: 40,
    },
    serviceContainer: {
        backgroundColor: '#FFCADB',
    },
    titleHeader: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
    },
    showMoreTour: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 50,
        backgroundColor: '#FF1493',
        borderRadius: 10,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: -20,
    },
    textShowMoreTour: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
    },
});
