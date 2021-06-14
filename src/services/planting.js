/* eslint-disable no-async-promise-executor */
import axios from 'axios';

export function fetchZipcodeData(zipcode) {
  return new Promise(async (resolve, reject) => {
    try {
      const endpoint = `https://viacep.com.br/ws/${zipcode.replace(
        /[^\d]/g,
        '',
      )}/json/`;
      const cepData = await axios.get(endpoint);
      resolve(cepData.data);
    } catch (err) {
      reject(err);
    }
  });
}
