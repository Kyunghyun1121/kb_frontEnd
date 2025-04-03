import axios from 'axios';
const BASE = '/api/products';
export const get = async (target, params) => {
  const response = await axios.get(BASE);
  console.log(response.data);
};
export const post = async (target, product) => {
  const response = await axios.post(BASE);
  console.log(response.data);
};
export const put = async (target, product) => {
  const response = await axios.put(BASE);
  console.log(response.data);
};
export const remove = async (target, params) => {
  const response = await axios.delete(BASE);
  console.log(response.data);
};
