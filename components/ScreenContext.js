import * as React from 'react'

const ScreenContext = React.createContext();

//context provider hook
const ScreenContextProvider = ({ children }) => {

  const [screen, setScreen] = React.useState(null)
  const checkSize = () =>  {
    let screenType
    if (window.innerWidth < 700) 
      { screenType = 'mobile' } 
    else if (window.innerWidth < 1000) 
      { screenType = 'tablet' } 
    else
      { screenType = 'desktop' }
    setScreen(screenType)
  };

  React.useEffect(() => {
    checkSize()
    window?.addEventListener('resize', checkSize);
    return () => {
        window?.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screen}>
      {children}
    </ScreenContext.Provider>
  );
};

// context consumer hook
const useScreenContext = () => {
  const context = React.useContext(ScreenContext);

  if (context === undefined) {
    throw new Error("useScreenContext was used outside of its Provider");
  }

  return context;
};

export { ScreenContextProvider, useScreenContext };
