import React, { createContext, useState } from "react";

interface ITabContextValues {
  tabIndex: number;
  setTabIndex: React.Dispatch<number>
  tabName: string;
  setTabName: React.Dispatch<string>
}

export const TabContext = createContext<ITabContextValues|undefined>(undefined);

const TabContextProvider: React.FC<React.PropsWithChildren<any>> = ({children}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabName, setTabName] = useState("");

  return (
    <TabContext.Provider value={{tabIndex, setTabIndex, tabName, setTabName}}>
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider
