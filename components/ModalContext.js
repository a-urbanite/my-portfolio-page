import * as React from 'react'

const ModalContext = React.createContext();

//context provider hook
const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = React.useState({isOpen: false, project: undefined})

  return (
    <ModalContext.Provider value={{modal, setModal}}>
      {children}
    </ModalContext.Provider>
  );
};

// context consumer hook
const useModalContext = () => {
  const context = React.useContext(ModalContext);
  return context;
};

export { ModalContextProvider, useModalContext };