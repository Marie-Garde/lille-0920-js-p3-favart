import { useState, useEffect } from "react";
import axios from "axios";

export default function useForm({ setToken }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", values)
      .then((res) => {
        setToken(res.data);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  return { handleChange, values, handleSubmit };
}
