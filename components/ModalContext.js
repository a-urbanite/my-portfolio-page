import * as React from 'react'

const ModalContext = React.createContext();

//context provider hook
const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = React.useState({isOpen: false, context: undefined, payload: undefined})

  const activateModal = (context, payload) => {
    setModal({isOpen: true, context: context, payload: payload})
  }

  const deactivateModal = () => {
    setModal({isOpen: false, context: undefined, payload: undefined})
  }

  return (
    <ModalContext.Provider value={{modal, activateModal, deactivateModal}}>
      {children}
    </ModalContext.Provider>
  );
};

// context consumer hook
const useModalContext = () => React.useContext(ModalContext);

export { ModalContextProvider, useModalContext };