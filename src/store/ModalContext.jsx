import { createContext, useState } from "react";

export const ProfileContext = createContext();
export const ModalContextProvider = ({ children }) => {
  // trocar para useState para useReducer
  const [isActive, setIsActive] = useState(false);
  const [isSacolaActive, setIsSacolaActive] = useState(false);
  const modalHandler = function (value) {
    setIsActive(value);
  };
  const modalSacolaHandler = function (value) {
    setIsSacolaActive(value);
  };

  return (
    <ProfileContext.Provider
      value={{ isActive, modalHandler, isSacolaActive, modalSacolaHandler }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
