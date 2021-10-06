import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const createPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateNumber = (id, changedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, changedPerson);
  return request.then((res) => res.data);
};

const personServices = { getAll, createPerson, deletePerson, updateNumber };

export default personServices;
