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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {registerSuccessFun} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileno, setMobileno] = useState('');

  const [gender, setGender] = useState('');

  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    dispatch(registerSuccessFun(name, username, password, mobileno, gender));
    setName('');
    setUsername('');
    setPassword('');
    setMobileno('');
    setGender('');
  };

  return (
    <Container
      loading={loading}
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}>
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
            Register
          </Text>

          <View
            style={{
              marginVertical: 10,
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'ZillaSlab-Medium',
              }}>
              Enter Name
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
                value={name}
                onChangeText={val => setName(val)}
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'ZillaSlab-Medium',
                }}
                placeholder="Your Name"
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
                fontFamily: 'ZillaSlab-Medium',
                marginTop: 20,
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
                placeholder="Password"
                placeholderTextColor={'rgba(255,255,255,0.6)'}
              />
            </View>

            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'ZillaSlab-Medium',
                marginTop: 20,
              }}>
              Mobile Number
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
                value={mobileno}
                onChangeText={val => setMobileno(val)}
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'ZillaSlab-Medium',
                }}
                placeholder="mobile number"
                placeholderTextColor={'rgba(255,255,255,0.6)'}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'ZillaSlab-Medium',
                marginTop: 20,
              }}>
              your gender
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
                value={gender}
                onChangeText={val => setGender(val)}
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'ZillaSlab-Medium',
                }}
                placeholder="your gender"
                placeholderTextColor={'rgba(255,255,255,0.6)'}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Login');
                registerUser();
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
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
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
                Already have an account, login
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Register;
