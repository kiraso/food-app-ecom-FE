import React, { createContext, useContext, useState } from 'react';

export interface AppContextState {
  user: string | null;
  foodMenu: [] | null;
  getFoodMenu: (FoodList: []) => void;
  login: (username: any) => void;
  logout: () => void;
}

export const AppContext = createContext<AppContextState>({
  user: null,
  foodMenu: null,
  getFoodMenu: () => {},
  login: () => {},
  logout: () => {},
});
export function useAppContext() {
  return useContext(AppContext);
}
export const AppProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(null);
  const [foodMenu, setFoodMenu] = useState<[] | null>(null);

  const login = (username: any) => {
    setUser(username);
  };
  const getFoodMenu = (FoodList: []) => {
    setFoodMenu(FoodList);
  };
  const logout = () => {
    setUser(null);
  };

  const state: AppContextState = {
    user,
    foodMenu,
    getFoodMenu,
    login,
    logout,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
