import {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINERROR,
  REGISTERREQUEST,
  REGISTERSUCCESS,
  REGISTERERROR,
  UPDATEUSERREQUEST,
  UPDATEUSERSUCCESS,
  UPDATEUSERFAILURE,
  DELETEUSERFAILURE,
  DELETEUSERSUCCESS,
  DELETEUSERREQUEST,
  GETSINGLEUSERFAILURE,
  GETSINGLEUSERREQUEST,
  GETSINGLEUSERSUCCESS,
  ALLUSERDATAREQUEST,
  ALLUSERDATASUCCESS,
  ALLUSERDATAFAILURE,
  LOGOUT,
} from './type';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

export const loginSuccessFun = (username, password) => {
  return dispatch => {
    dispatch({type: LOGINREQUEST});

    axios
      .get(
        `https://3-upstesting.com/machine_test/index.php/web_api/Users/login?user_email=${username}&user_pwd=${password}`,
      )
      .then(res => {
        console.log('LOGIN Success Response', res);
        if (res?.data?.status == 1) {
          Toast.show(res?.data?.message, Toast.SHORT, [
            'RCTModalHostViewController',
          ]);
          dispatch({type: LOGINSUCCESS, payload: res.data.data[0]});
        }

        // dispatch({type: LOGINSUCCESS, payload: res});
      })
      .catch(e => {
        console.log('Error Response', e);
      })
      .finally(() => {
        dispatch({type: LOGINERROR});
      });
  };
};

export const registerSuccessFun = (
  name,
  email,
  password,
  moNomber,
  gender,
  fn,
) => {
  return dispatch => {
    dispatch({type: REGISTERREQUEST});

    var formdata = new FormData();
    formdata.append('user_name', name);
    formdata.append('user_email', email);
    formdata.append('user_contact_no', moNomber);
    formdata.append('user_password', password);
    formdata.append('user_gender', gender);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://3-upstesting.com/machine_test/index.php/web_api/Users/Register',
      requestOptions,
    )
      .then(async response => {
        const res = await response.json();
        console.log(' Register res', res);
        if (res.status == 1) {
          Toast.show(res?.message, Toast.SHORT, ['RCTModalHostViewController']);
          fn?.();
          dispatch({type: REGISTERSUCCESS, payload: res});
        }
      })

      .then(result => console.log(result))
      .catch(error => {
        console.log('error', error);
        dispatch({type: REGISTERERROR});
      });
  };
};

export const getAllUserFun = () => {
  return dispatch => {
    dispatch({type: ALLUSERDATAREQUEST});

    axios
      .get('https://3-upstesting.com/machine_test/index.php/web_api/Users/')
      .then(res => {
        console.log('get all user Success Response', res);
        // if (res?.data?.status == 1) {
        //   Toast.show(res?.data?.mes, Toast.SHORT, [
        //     'RCTModalHostViewController',
        //   ]);
        dispatch({type: ALLUSERDATASUCCESS, payload: res?.data?.data});
        // }
      })
      .catch(e => {
        console.log('Error Response', e);
      })
      .finally(() => {
        dispatch({type: ALLUSERDATAFAILURE});
      });
  };
};
export const getSingleUserFun = id => {
  return dispatch => {
    dispatch({type: GETSINGLEUSERREQUEST});

    axios
      .get(
        `https://3-upstesting.com/machine_test/index.php/web_api/Users/user_detail?user_id=${id}`,
      )
      .then(res => {
        console.log('get SINGLE user Success Response', res);
        // if (res?.data?.status == 1) {
        //   Toast.show(res?.data?.mes, Toast.SHORT, [
        //     'RCTModalHostViewController',
        //   ]);
        dispatch({type: GETSINGLEUSERSUCCESS, payload: res?.data?.data[0]});
        // }
      })
      .catch(e => {
        console.log('Error Response', e);
      })
      .finally(() => {
        dispatch({type: GETSINGLEUSERFAILURE});
      });
  };
};

export const updateUserFun = (
  id,
  name,
  email,
  moNumber,
  password,
  gender,
  fn,
) => {
  return dispatch => {
    dispatch({type: UPDATEUSERREQUEST});
    const data = `{
  "user_id": ${id},
  "user_name": ${name},
  "user_email": ${email},
  "user_contact_no": ${moNumber},
  "user_password": ${password},
  "user_gender": ${gender},
}`;

    var raw = `{\n	"user_id":"${id}",\n	"user_name":"${name}",\n	"user_email":"${email}",\n	"user_contact_no":"${moNumber}",\n	"user_password":"${password}",\n	"user_gender":"${gender}"\n}`;

    console.log('mad', raw);
    axios
      .put(
        'https://3-upstesting.com/machine_test/index.php/web_api/Users/update_user',
        raw,
        {headers: {'Content-Type': 'text/plain'}},
      )
      .then(res => {
        console.log('UPDATE USER  Success Response', res);
        if (res?.data?.status == 1) {
          Toast.show(res?.data?.message, Toast.SHORT, [
            'RCTModalHostViewController',
          ]);
          fn?.();
        }

        dispatch({type: UPDATEUSERSUCCESS, payload: res});
      })
      .catch(e => {
        console.log('Error Response', e, e.response);
        Toast.show(e?.response?.data?.message, Toast.SHORT, [
          'RCTModalHostViewController',
        ]);
      })
      .finally(() => {
        dispatch({type: UPDATEUSERFAILURE});
      });
  };
};

export const deleteUserFun = (id, fn) => {
  return dispatch => {
    dispatch({type: DELETEUSERREQUEST});
    var raw = `{\n	"user_id":"${id}"\n}`;

    axios
      .delete(
        `https://3-upstesting.com/machine_test/index.php/web_api/Users/remove_user`,
        {
          headers: {
            'Content-Type': 'text/plain',
          },
          data: raw,
        },
      )
      .then(res => {
        console.log('DELETE USER Success Response', res);
        if (res?.data?.status == 1) {
          Toast.show(res?.data?.message, Toast.SHORT, [
            'RCTModalHostViewController',
          ]);
          fn?.();

          dispatch({type: DELETEUSERSUCCESS, payload: res});
        }
      })
      .catch(e => {
        console.log('Error Response', e, e.response);
        Toast.show(e?.response?.data?.message, Toast.SHORT, [
          'RCTModalHostViewController',
        ]);
      });
  };
};

export const logoutFn = () => {
  return {type: LOGOUT};
};
