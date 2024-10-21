import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/firebase';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const hanlderLogin = async () => {
    if (!email || !password) {
      alert('Thông tin không được để trống');
      return;
    }

    // Kiểm tra xem email có đuôi @gmail.com không
    if (!email.endsWith('@gmail.com')) {
      alert('Không đúng định dạng Email');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      alert('Email hoặc mật khẩu không chính xác');
      console.error(error);
    }
  };

  const hanlderRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.imgContainer}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Chào mừng bạn trở lại! 👋🏼</Text>
          <Text style={styles.subText}>Xin chào lần nữa, chúng tôi đã nhớ bạn!</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/slider4.png')} style={styles.logo} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInputEmail}
            placeholder='Nhập email'
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <View style={styles.passInput}>
            <TextInput
              style={styles.textInputPass}
              placeholder='Nhập mật khẩu'
              secureTextEntry={!showPassword}
              placeholderTextColor="#fff"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={hanlderLogin}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Hoặc đăng nhập bằng</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.btnForm}>
          <TouchableOpacity style={styles.btnContainer}>
            <Image source={require('../../assets/images/Facebook.png')} style={styles.imgBtn} />
            <Text style={styles.textBtn}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Image source={require('../../assets/images/google.png')} style={styles.imgBtn} />
            <Text style={styles.textBtn}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={hanlderRegister}>
            <Text style={styles.footerBtn}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF1493',
    marginBottom: 10,
  },
  subText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FF1493',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 360,
    height: 150,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#ffff',
    fontWeight: '500',
  },
  textInputEmail: {
    height: 50,
    borderWidth: 1.5,
    borderColor: '#6D8A96',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
    backgroundColor: '#6D8A96',
  },
  textInputPass: {
    flex: 2,
    color: '#fff',
  },
  passInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#6D8A96',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#6D8A96',
  },
  iconContainer: {
    marginLeft: 10,
  },
  btnLogin: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1493',
    borderColor: '#6D8A96',
    borderRadius: 10,
    marginTop: 20,
  },
  textLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    marginHorizontal: 10,
    color: '#000000',
  },
  btnForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnContainer: {
    width: 187,
    borderWidth: 1.5,
    borderColor: '#FF1493',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FF1493',
  },
  imgBtn: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textBtn: {
    fontSize: 14,
    color: '#ffff',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    marginRight: 10,
  },
  footerBtn: {
    fontSize: 16,
    color: '#FF1493',
    fontWeight: '700',
  },
});
