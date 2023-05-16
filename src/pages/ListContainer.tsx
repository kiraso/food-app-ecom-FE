import React, { useContext, useEffect, useState } from 'react';
import * as productService from '.././service/productService';
import CardList from '../components/card/CardList';
import { useAppContext } from '../context/AppContext';
import { UserContext } from '../context/userContext';

const ListContainer = () => {
  const { user } = useContext(UserContext);
  const [foodDetail, setFoodDetail] = useState<any>([]);
  console.log('user', user);
  const getProduct = async () => {
    try {
      const { data } = await productService.getProductList();
      var dataList = [];
      for (let i = 0; i < data.length; i++) {
        dataList.push({ name: data[i].prod_name, price: data[i].prod_price });
      }
      setFoodDetail(data);
    } catch (error) {}
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <section className="w-auto mx-auto grid grid-cols-1 gap-2 xl-grid-cols-6 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">
      {foodDetail.map((food: any) => {
        return (
          <CardList
            productName={food.prod_name}
            productPrice={food.prod_price}
            productImage={food.prod_image_url || undefined}
            productDetail={''}
          />
        );
      })}
    </section>
  );
};

export default ListContainer;
