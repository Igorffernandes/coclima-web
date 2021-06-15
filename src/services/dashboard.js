import http from '../config/http';
import { dashboard } from './endpoints';

export async function fetchDashboard(query_params) {
  try {
    const dashboardData = await http.get(dashboard, { params: query_params || {} });
    return dashboardData.data;
  } catch(err){
    throw err;
  }
}