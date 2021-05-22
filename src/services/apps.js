/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { apps, blockedApps } from './endpoints';

export function fetchApps() {
  return new Promise(async (resolve, reject) => {
    try {
      const appsData = await http.get(apps);
      resolve(appsData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getApp({ app_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      const appFetch = await http.get(`${apps}/${app_id}`);
      resolve(appFetch.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function createApp(values) {
  return new Promise(async (resolve, reject) => {
    try {
      const appCreation = await http.post(apps, values);
      resolve(appCreation.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function editApp(app_id, values) {
  return new Promise(async (resolve, reject) => {
    try {
      const appEdit = await http.put(`${apps}/${app_id}`, values);
      resolve(appEdit);
    } catch (err) {
      reject(err);
    }
  });
}

export function deactivateApp({ app_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await http.delete(`${apps}/${app_id}`);
      resolve(resp.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function updateArrayIds(values) {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await http.post(`${blockedApps}`, values);
      resolve(resp.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getUpdateArrayIds() {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await http.get(`${blockedApps}`);
      resolve(resp.data);
    } catch (err) {
      reject(err);
    }
  });
}
