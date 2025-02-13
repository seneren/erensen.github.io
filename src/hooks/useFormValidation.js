import { useState, useEffect } from 'react';

export const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      let isFormValid = true;

      Object.keys(values).forEach(key => {
        if (validationRules[key]) {
          const isFieldValid = validationRules[key](values[key]);
          if (!isFieldValid) {
            newErrors[key] = true;
            isFormValid = false;
          }
        }
      });

      setErrors(newErrors);
      setIsValid(isFormValid);
    };

    validateForm();
  }, [values, validationRules]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsValid(false);
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  };
}; 