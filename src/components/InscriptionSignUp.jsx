import { useState, useEffect } from "react";

export default useForm = () => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: null,
    password: "",
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

  return { handleChange };
};

