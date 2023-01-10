import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://wayshub-api-production.up.railway.app/api/v1'
})