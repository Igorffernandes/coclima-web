import http from '../config/http';
import { users } from './endpoints';

export async function fetchUsers() {
  try{
    const result = await http.get(users);
    return result.data;
  } catch(err){
    console.log(err);
    throw err;
  }
}

export async function fetchUser(user_id) {
  try {
    const result = await http.get(`${users}/${user_id}`);
    return(result.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function createUser(values) {
  try {
    const result = await http.post(users, values);
    return(result.data);
  } catch (err) {
    throw err;
  }
}

export async function editUser(values, user_id) {
  try {
    const result = await http.put(`${users}/${user_id}`, values);
    return(result.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deactivateUser(user_id) {
  try {
    const result = await http.delete(`${users}/${user_id}`);
    return result.data;
  } catch (err) {
    throw err;
  }
}
