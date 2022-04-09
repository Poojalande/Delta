import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '../../components/container';
import {getSingleUserFun} from '../../redux/action';

import {useDispatch, useSelector} from 'react-redux';

const index = ({route}) => {
  console.log('route.params.data.user_name', route.params.data.user_name);
  const dispatch = useDispatch();
  const singleUserData = useSelector(state => state.state.singleUserData);

  useEffect(() => {
    dispatch(getSingleUserFun(route?.params?.data?.user_id));
  }, []);

  return (
    <Container
      //   loading={loading}
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
        paddingHorizontal: 10,
      }}>
      <SafeAreaView>
        <View>
          {route?.params?.data?.user_gender == 'male' ? (
            <Image
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginTop: 50,
                borderRadius: 5,
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU',
              }}
            />
          ) : (
            <Image
              style={{width: 200, height: 200, alignSelf: 'center'}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPnH8v5QO5oXd_cW5N6xiEx0QpyKemGf47Q&usqp=CAU',
              }}
            />
          )}
        </View>
        <View style={{marginVertical: 30}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontFamily: 'ZillaSlab-Medium',
              textTransform: 'capitalize',
              marginVertical: 10,
            }}>
            User Id : {singleUserData?.user_id}
          </Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontFamily: 'ZillaSlab-Medium',
              textTransform: 'capitalize',
              marginVertical: 10,
            }}>
            {singleUserData?.user_name}
          </Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontFamily: 'ZillaSlab-Medium',
              textTransform: 'capitalize',
              marginVertical: 10,
            }}>
            {singleUserData?.user_email}
          </Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontFamily: 'ZillaSlab-Medium',
              textTransform: 'capitalize',
              marginVertical: 10,
            }}>
            {singleUserData?.user_phone_no}
          </Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontFamily: 'ZillaSlab-Medium',
              textTransform: 'capitalize',
              marginVertical: 10,
            }}>
            {singleUserData?.user_gender}
          </Text>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default index;
