import { useState } from "react";

const useSignUpForm = (schema) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate();
    if (!error) {
      console.log("Form submitted!", inputs);
      setErrors("");
      setSubmitted(true);
    } else {
      console.log("Errors", error);
      setErrors(error);
      setSubmitted(false);
    }
  };

  const handleInputChange = (event) => {
    setSubmitted(false);
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const validate = () => {
    return schema.validate(inputs);
  };

  return { handleSubmit, handleInputChange, errors, submitted };
};

export default useSignUpForm;
