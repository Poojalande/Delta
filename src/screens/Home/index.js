import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '../../components/container';
import {deleteUserFun, getAllUserFun, logoutFn} from '../../redux/action';

import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const allUserData = useSelector(state => state.state.allUserData);
  const loading = useSelector(state => state.state.loading);

  const logoutHandler = () => {
    dispatch(logoutFn());
  };
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAllUserFun());
    }, []),
  );

  const removeHandler = id => {
    dispatch(deleteUserFun(id, () => dispatch(getAllUserFun())));
  };

  return (
    <Container
      //   loading={loading}
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
        paddingHorizontal: 10,
      }}>
      {console.log('alluserdata', allUserData)}
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              marginBottom: 20,
              fontWeight: 'bold',
              fontFamily: 'ZillaSlab-Bold',
            }}>
            All User Info
          </Text>
          <TouchableOpacity
            onPress={() => {
              logoutHandler();
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 25,
                marginBottom: 20,
                fontWeight: 'bold',
                fontFamily: 'ZillaSlab-Bold',
              }}>
              logout
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={allUserData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleUser', {data: item})}>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 20,
                    paddingVertical: 10,
                    shadowColor: '#000',
                    borderRadius: 5,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'ZillaSlab-Medium',
                      fontSize: 20,
                      marginBottom: 5,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {item.user_name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'ZillaSlab-Medium',
                      fontSize: 18,
                      color: 'black',
                    }}>
                    {item.user_email}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'ZillaSlab-Medium',
                      fontSize: 18,
                      color: 'black',
                    }}>
                    {item.user_phone_no}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'ZillaSlab-Medium',
                      fontSize: 18,
                      color: 'black',
                    }}>
                    {item.user_gender}
                  </Text>
                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('UpdateUser', {data: item})
                      }
                      style={{marginRight: 20}}>
                      <Text
                        style={{
                          fontFamily: 'ZillaSlab-Medium',
                          fontSize: 18,
                          color: '#30AADD',
                        }}>
                        Update
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => removeHandler(item.user_id)}>
                      <Text
                        style={{
                          fontFamily: 'ZillaSlab-Medium',
                          fontSize: 18,
                          color: '#FF85B3',
                        }}>
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </Container>
  );
};

export default index;
