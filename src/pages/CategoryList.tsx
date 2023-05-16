import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as productService from '../service/productService';
import CardList from '../components/card/CardList';
import Categories from '../components/categories/Categories';
import getCategories from '../data/CategoryList.json';
const CategoryList = () => {
  const location = useLocation();
  const [MenuList, setMenuList] = useState<any[] | null>(null);
  const getProduct = async () => {
    try {
      const { data } = await productService.getProductList();
      var dataList = [];
      for (let i = 0; i < data.length; i++) {
        dataList.push({
          name: data[i].prod_name,
          price: data[i].prod_price,
          type: data[i].prod_categories_id,
          imageUrl: data[i].prod_image_url || '',
        });
      }

      const a = dataList.filter((item: any) => item.type === location.state.id);
      setMenuList(a);
    } catch (error) {}
  };
  useEffect(() => {
    getProduct();
  }, [location.state.id]);

  return (
    <div>
      <Categories />
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {MenuList?.length !== 0 ? (
          MenuList?.map((food: any) => {
            return (
              <CardList
                productName={food.name}
                productPrice={food.price}
                productImage={food.imageUrl || undefined}
                productDetail={''}
              />
            );
          })
        ) : (
          <div className="flex mt-[300px] text-center justify-center ">
            <div>no data</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
