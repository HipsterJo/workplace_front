import { useState } from "react";

type InputsType = {
  [key: string]: string;
};

export const useInputHandler = (defaultValue = {}, isNull = false) => {
  const [isInputs, setInputs] = useState<InputsType>({ ...defaultValue });

  const inputHandler =
    (type: string) =>
    (eventOrValue: React.ChangeEvent<HTMLInputElement> | string) => {
      const value =
        typeof eventOrValue === "string"
          ? eventOrValue
          : eventOrValue?.target?.value;

      setInputs((state) => ({
        ...state,
        [type]: value,
      }));
    };

  const clearInputs = () => setInputs({});

  return {
    isInputs,
    setInputs,
    inputHandler,
    clearInputs,
  };
};
