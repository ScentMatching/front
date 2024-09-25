import { useState } from "react";

interface LoginInputReturnType {
  values: {
    email: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
  };
  errors: {
    email?: string;
    nickname?: string;
    password?: string;
    passwordConfirm?: string;
  };
  isLoading: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.SyntheticEvent) => void;
}

const LoginInput = ({
  initialValues,
  onSubmit,
  validate,
}: any): LoginInputReturnType => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setErrors(validate(values));
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default LoginInput;
