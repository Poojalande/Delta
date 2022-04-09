import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../../components/container';
import {updateUserFun} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const index = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(route?.params?.data?.user_id);

  const [name, setName] = useState(route?.params?.data?.user_name);
  const [username, setUsername] = useState(route?.params?.data?.user_email);
  const [password, setPassword] = useState(route?.params?.data?.user_pwd);
  const [mobileno, setMobileno] = useState(route?.params?.data?.user_phone_no);

  const [gender, setGender] = useState(route?.params?.data?.user_gender);

  const updateUser = () => {
    dispatch(
      updateUserFun(id, name, username, password, mobileno, gender, () =>
        navigation.goBack(),
      ),
    );
  };

  return (
    <Container
      //   loading={loading}
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          marginVertical: 10,
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            marginVertical: 30,
            marginTop: 15,
            paddingBottom: 5,
          }}>
          <TextInput
            value={id}
            onChangeText={val => setId(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="Your Id"
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            marginVertical: 30,
            marginTop: 15,
            paddingBottom: 5,
          }}>
          <TextInput
            value={name}
            onChangeText={val => setName(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="Your Name"
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            marginVertical: 30,
            marginTop: 15,
            paddingBottom: 5,
          }}>
          <TextInput
            value={username}
            onChangeText={val => setUsername(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="Email"
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            marginVertical: 30,
            borderBottomColor: 'black',
            paddingBottom: 5,
            marginTop: 15,
          }}>
          <TextInput
            value={password}
            onChangeText={val => setPassword(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="Password"
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            marginVertical: 30,
            marginTop: 15,
            paddingBottom: 5,
          }}>
          <TextInput
            value={mobileno}
            onChangeText={val => setMobileno(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="mobile number"
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            marginVertical: 30,
            marginTop: 15,
            paddingBottom: 5,
          }}>
          <TextInput
            value={gender}
            onChangeText={val => setGender(val)}
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Medium',
            }}
            placeholder="your gender"
            placeholderTextColor={'black'}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            updateUser();
            // navigation.navigate('Login');
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
            UPDATE
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default index;
