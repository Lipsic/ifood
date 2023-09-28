import { createContext, useState, useReducer } from "react";

export const ProfileContext = createContext();

const initialModalSetup = [
  {
    component: "profile",
    modalHandler: () => {},
    isActive: false,
  },
  {
    component: "bag",
    modalHandler: () => {},
    isActive: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

export const ModalContextProvider = ({ children }) => {
  // trocar para useState para useReducer
  const [isActive, setIsActive] = useState(false);
  const [isSacolaActive, setIsSacolaActive] = useState(false);
  const modalHandler = function(value) {
    setIsActive(value);
  };
  const modalSacolaHandler = function(value) {
    setIsSacolaActive(value);
  };

  return (
    <ProfileContext.Provider
      value={{
        isActive,
        modalHandler,
        isSacolaActive,
        modalSacolaHandler,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
