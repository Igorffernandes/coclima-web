import http from '../config/http';
import { plantations } from './endpoints';

export async function fetchPlantations() {
  try {
    const result = await http.get(plantations);
    return result.data;
  } catch(err){
    throw err;
  }
}

export async function fetchPlantation(plantationId) {
  try {
    const result = await http.get(`${plantations}/${plantationId}`);
    return result.data;
  } catch(err){
    throw err;
  }
}

export async function createPlantations(values) {
  try {
    const result = await http.post(plantations, values);
    return(result.data);
  } catch (err) {
    throw err;
  }
}

export async function editPlantation(values, plantation_id) {
  try {
    const result = await http.put(`${plantations}/${plantation_id}`, values);
    return(result.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deactivatePlanting(plantation_id) {
  try {
    const result = await http.delete(`${plantations}/${plantation_id}`);
    return result.data;
  } catch (err) {
    throw err;
  }
}