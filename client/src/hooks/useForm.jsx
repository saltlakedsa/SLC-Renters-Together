import { useState } from 'react';

export default function useForm(initialInputs, callback) {
  const [inputs, setInputs] = useState(initialInputs);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleInputChange = (event) => {
    if (event) {
      event.persist();
      const { name } = event.target;
      setInputs({ ...inputs, [name]: event.target.value });
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    inputs,
  };
}
