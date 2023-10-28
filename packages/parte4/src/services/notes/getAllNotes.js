import axios from 'axios';

export const getAllNotes = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    console.log(res);
    const { data } = res;
    return data;
  });
};
