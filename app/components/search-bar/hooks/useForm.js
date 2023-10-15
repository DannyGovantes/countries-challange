import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formSate, setFormState] = useState(initialState);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setFormState({ ...formSate, [name]: value });
  };
  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formSate,
    formSate,
    onHandleChange,
    onResetForm,
  };
};
