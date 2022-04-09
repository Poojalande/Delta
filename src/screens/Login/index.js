import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {Container} from '../../components/container';

import Toast from 'react-native-simple-toast';

import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import {loginSuccessFun} from '../../redux/action';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(loginSuccessFun(username, password));

    setUsername('');
    setPassword('');
  };

  return (
    <Container
      loading={loading}
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
      withKeyboard={true}>
      <KeyboardAwareScrollView bounces={false}>
        <SafeAreaView>
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              marginTop: 20,
              marginLeft: 20,
              fontFamily: 'Lobster-Regular',
            }}>
            Login
          </Text>
          <View
            style={{
              marginVertical: 10,
              marginTop: 150,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'ZillaSlab-Medium',
              }}>
              Enter Email
            </Text>

            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#E7E0C9',
                marginVertical: 10,
                marginTop: 15,
                paddingBottom: 5,
              }}>
              <TextInput
                value={username}
                onChangeText={val => setUsername(val)}
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'ZillaSlab-Medium',
                }}
                placeholder="Email"
                placeholderTextColor={'rgba(255,255,255,0.6)'}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                marginTop: 20,
                fontFamily: 'ZillaSlab-Medium',
              }}>
              Enter Password
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                marginVertical: 10,
                borderBottomColor: '#E7E0C9',
                paddingBottom: 5,
                marginTop: 15,
              }}>
              <TextInput
                value={password}
                onChangeText={val => setPassword(val)}
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'ZillaSlab-Medium',
                }}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor={'rgba(255,255,255,0.6)'}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                loginUser();
              }}
              style={{
                backgroundColor: '#FDEFEF',
                alignItems: 'center',
                borderRadius: 50,
                marginVertical: 30,
                paddingVertical: 10,
                width: '50%',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'ZillaSlab-Bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: '#F4DFD0',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'ZillaSlab-Medium',
                }}>
                Not a member register here
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Login;
