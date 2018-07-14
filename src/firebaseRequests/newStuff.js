import axios from 'axios';

import constants from '../constants';

const postRequest = (newStuff) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myStuff.json`, newStuff)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getRequest = () => {
  return new Promise ((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff.json`)
      .then((res) => {
        const myStuff = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            myStuff.push(res.data[fbKey]);
          });
        }
        resolve(myStuff);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { postRequest, getRequest };
