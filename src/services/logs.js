/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { logs } from './endpoints';

export function fetchLogs() {
  return new Promise(async (resolve, reject) => {
    try {
      const logsData = await http.get(logs);
      resolve(logsData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function fetchLog(log_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const logsData = await http.get(`${logs}/${log_id}`);
      resolve(logsData.data);
    } catch (err) {
      reject(err);
    }
  });
}
