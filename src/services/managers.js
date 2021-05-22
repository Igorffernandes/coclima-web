/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { managers } from './endpoints';

export function fetchManagers() {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await http.get(managers);
      resolve(userData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getManager({ manager_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      const managerFetch = await http.get(`${managers}/${manager_id}`);
      resolve(managerFetch.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function createManager(values) {
  return new Promise(async (resolve, reject) => {
    try {
      values.cpf = values.cpf.replace(/[^\d]/g, '');
      values.phone = values.phone.replace(/[^\d]/g, '');
      const managerCreation = await http.post(managers, values);
      resolve(managerCreation.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function editManager(manager_id, values) {
  return new Promise(async (resolve, reject) => {
    try {
      values.phone = values.phone.replace(/[^\d]/g, '');
      const userEdit = await http.put(`${managers}/${manager_id}`, values);
      resolve(userEdit);
    } catch (err) {
      reject(err);
    }
  });
}

export function deactivateManager({ manager_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      await http.delete(`${managers}/${manager_id}`);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}
