import React, { Dispatch, SetStateAction, useState } from 'react';
import { ToastProps } from '../components';
import { darkTheme, lightTheme } from '../shared';

type ThemeType = typeof lightTheme | typeof darkTheme;

export interface GlobalContextProps {
  theme?: ThemeType;
  setTheme?: Dispatch<SetStateAction<ThemeType>>;
  toastList?: ToastProps[];
  setToastList?: Dispatch<SetStateAction<ToastProps[]>>;
}

export const GlobalContext = React.createContext<GlobalContextProps>({});

export const ViniisContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const [toastList, setToastList] = useState<ToastProps[]>([]);

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, toastList, setToastList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
