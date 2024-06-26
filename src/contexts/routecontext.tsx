import React, {createContext, ReactNode, useContext, useState} from 'react';
import {RouteContextType} from './type';

const defaultValue: RouteContextType = {
  toggle: false,
  setToggle: () => {},
};

const RouteContext = createContext<RouteContextType>(defaultValue);

export function useRouteContext() {
  return useContext(RouteContext);
}

export function RouteContextProvider({children}: {children: ReactNode}) {
  const [toggle, setToggle] = useState<boolean>(defaultValue.toggle);

  return (
    <RouteContext.Provider value={{toggle, setToggle}}>
      {children}
    </RouteContext.Provider>
  );
}

export default RouteContext;
