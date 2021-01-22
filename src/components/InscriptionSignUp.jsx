import { useState, useEffect } from "react";
import axios from "axios";

export default function useForm(validateInfo) {
  const [values, setValues] = useState({
    username: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    job: "",
    structure_name: "",
    structure_type: "",
    structure_field: "",
    job_field: "",
    territory: "",
    wishes: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    axios.post("http://localhost:3001/client", values
    ).then((res) => {
      setValues(res.data);
    })
    .catch((e)=>{console.warn(e)});
  };

  return { handleChange, values, handleSubmit, errors };
}
