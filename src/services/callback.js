/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { callback } from './endpoints';

export function createAssociate(values) {
  return new Promise(async (resolve, reject) => {
    try {
      const managerCreation = await http.post(callback, values);
      resolve(managerCreation.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getStore(store) {
  return new Promise(async (resolve, reject) => {
    try {
      const managerFetch = await http.get(`${callback}/${store}`);
      resolve(managerFetch.data);
    } catch (err) {
      reject(err);
    }
  });
}
