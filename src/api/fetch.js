const URL = import.meta.env.VITE_BASE_API_URL;

export const getAllStudents = () => {
  return fetch(`${URL}/api/students`).then((response) => response.json());
};

export const getOneStudent = (id) => {
  return fetch(`${URL}/api/students/${id}`).then((response) => response.json());
};
