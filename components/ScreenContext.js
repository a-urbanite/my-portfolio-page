import * as React from 'react'

const ScreenContext = React.createContext();

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

export { ScreenContext, ScreenContextProvider };
