const URL = import.meta.env.VITE_BASE_API_URL;

export const getAllStudents = () => {
  return fetch(`${URL}/api/students`).then((response) => response.json());
};
