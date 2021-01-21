import { useState, useEffect } from "react";

export default function useForm(){
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    password2:"",
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

  const handleSubmit = e =>{
      e.preventDefault();

  }

  return { handleChange, values, handleSubmit };
};

