/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { permissionsGroup, permissions } from './endpoints';

export function fetchPermissionsGroup() {
  return new Promise(async (resolve, reject) => {
    try {
      const permissionsGroupData = await http.get(permissionsGroup);
      resolve(permissionsGroupData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function fetchPermissions() {
  return new Promise(async (resolve, reject) => {
    try {
      const permissionData = await http.get(permissions);
      resolve(permissionData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function createPermissionsGroup(values) {
  return new Promise(async (resolve, reject) => {
    try {
      const permissionsGroupCreation = await http.post(
        permissionsGroup,
        values,
      );
      resolve(permissionsGroupCreation.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getPermissionsGroup({ permission_group_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      const permissionsGroupFetch = await http.get(
        `${permissionsGroup}/${permission_group_id}`,
      );
      resolve(permissionsGroupFetch.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function deactivatePermissionsGroup({ permission_group_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      await http.delete(`${permissionsGroup}/${permission_group_id}`);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

export function editPermissionsGroup(permission_group_id, values) {
  return new Promise(async (resolve, reject) => {
    try {
      const permissionsGroupEdit = await http.put(
        `${permissionsGroup}/${permission_group_id}`,
        values,
      );
      resolve(permissionsGroupEdit);
    } catch (err) {
      reject(err);
    }
  });
}
