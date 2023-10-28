import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

export const create = ({ title, body, userId }) => {
  return axios
    .post(baseUrl, { title, body, userId })
    .then((res) => {
      const { data } = res
      return data
    })
}

export const getAll = () => {
  return axios.get(baseUrl).then((res) => {
    const { data } = res
    return data
  })
}

export const update = (id, newObject) => {
  const req = axios.patch(`${baseUrl}/${id}`, newObject)
  return req.then(res => res.data)
}
