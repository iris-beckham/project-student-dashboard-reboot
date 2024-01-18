import { useState, useEffect } from "react";
import { getAllStudents } from "../api/fetch";

export const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudents().then((data) => setStudents(data));
  }, []);

  return <div>Home</div>;
};
