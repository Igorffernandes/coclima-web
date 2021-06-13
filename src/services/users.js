/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { collaborators } from './endpoints';

export function fetchCollaborators() {
  return new Promise(async (resolve, reject) => {
    try {
      const collaboratorsData = await http.get(collaborators);
      resolve(collaboratorsData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function getCollaborator({ collaborator_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      const collaboratorFetch = await http.get(
        `${collaborators}/${collaborator_id}`,
      );
      resolve(collaboratorFetch.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function createCollaborator(values) {
  return new Promise(async (resolve, reject) => {
    try {
      values.cpf = values.cpf.replace(/[^\d]/g, '');
      values.phone = values.phone.replace(/[^\d]/g, '');
      const collaboratorCreation = await http.post(collaborators, values);
      resolve(collaboratorCreation.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function editCollaborator(collaborator_id, values) {
  return new Promise(async (resolve, reject) => {
    try {
      values.phone = values.phone.replace(/[^\d]/g, '');
      const collaboratorEdit = await http.put(
        `${collaborators}/${collaborator_id}`,
        values,
      );
      resolve(collaboratorEdit);
    } catch (err) {
      reject(err);
    }
  });
}

export function deactivateCollaborator({ collaborator_id }) {
  return new Promise(async (resolve, reject) => {
    try {
      await http.delete(`${collaborators}/${collaborator_id}`);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}
