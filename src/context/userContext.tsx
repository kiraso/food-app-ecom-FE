import React, { useEffect, useState } from 'react';
import * as productService from '../service/productService';
interface User {
  name: string;
  email: string;
}

interface ContextProps {
  user: User | null;
  productList: any | null;
  loginUser: (userData: any) => void;
  loadProductList: () => void;
  logout: () => void;
}

export const UserContext = React.createContext<ContextProps>({
  user: null,
  productList: null,
  loginUser: () => {},
  loadProductList: () => {},
  logout: () => {},
});

export const UserProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [productList, setProductList] = useState<any | null>(null);
  const loginUser = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  const loadProductList = async () => {
    const { data } = await productService.getProductList();
    var product1 = [];
    for (let i = 0; i < data.length; i++) {
      product1.push({
        name: data[i].prod_name,
        price: data[i].prod_price,
        type: data[i].prod_categories_id,
        imageUrl: data[i].prod_image_url || '',
      });
    }
    setProductList(product1);
  };

  return (
    <UserContext.Provider
      value={{ user, loginUser, logout, productList, loadProductList }}
    >
      {children}
    </UserContext.Provider>
  );
};
