"use client"
import React, { createContext, useState } from "react";

interface IUpdaterProviderType {
  updaterValue: boolean; 
  setUpdaterValue: (updaterValue: boolean) => void; 
}

export const UpdaterContext = createContext<IUpdaterProviderType>({
  updaterValue: false,
  setUpdaterValue: () => null,
});
  
export const UpdaterProvider = ({ children }: { children: React.ReactNode }) => {
  const [updaterValue, setUpdaterValue] = useState<boolean>(false);
  const value: IUpdaterProviderType = { updaterValue, setUpdaterValue };
  
  return (
    <UpdaterContext.Provider value={value}>
      {children}
    </UpdaterContext.Provider>
  );
};