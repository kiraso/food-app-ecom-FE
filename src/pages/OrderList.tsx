import React, { useContext, useEffect, useState } from 'react';
import * as orderService from '.././service/orderService';
import * as productService from '.././service/productService';
import { UserContext } from '../context/userContext';

const OrderList = () => {
  const { productList, loadProductList } = useContext(UserContext);
  const [orderList, setOrderList] = useState<any>([]);
  const [totalSum, setTotalSum] = useState<number>(0);
  const [menuList, setMenuList] = useState<any[] | null>(null);

  const getCart = async () => {
    try {
      console.log(productList);
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
      const dataListOrder = await orderService.getOrderList();
      var dataList = [];
      var total = 0;
      for (let i = 0; i < dataListOrder.data.length; i++) {
        const imgUrl: string | undefined = product1
          ? product1.find(
              (item: any) => item.name === dataListOrder.data[i].order_name
            )?.imageUrl
          : undefined;
        dataList.push({
          name: dataListOrder.data[i].order_name,
          qty: dataListOrder.data[i].order_qty,
          price: dataListOrder.data[i].order_price,
          imgUrl: imgUrl,
        });
        total +=
          dataListOrder.data[i].order_qty * dataListOrder.data[i].order_price;
      }
      setTotalSum(total);
      setOrderList(dataList);
    } catch (err) {}
  };

  useEffect(() => {
    console.log(productList);
    getCart();
  }, []);
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex border border-green-500 rounded-sm my-10">
          <div className="relative w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-green-500">
                Order Item
              </h1>
              <h2 className="font-semibold text-2xl text-green-500">
                {orderList.length} Items
              </h2>
            </div>
            <div className="grid grid-cols-7 mt-10 border-b">
              <h3 className="col-span-3 font-semibold text-gray-500 text-lg uppercase w-2/6">
                Menu List
              </h3>
              <h3 className="font-semibold text-center text-gray-500 text-lg uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-500 text-lg uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-500 text-lg uppercase w-1/5 text-center">
                Total
              </h3>
              <div></div>
            </div>

            {orderList.map((order: any) => (
              <div className="grid grid-cols-7 items-center -mx-8 px-6 py-5 border-b">
                <div className="col-span-3 flex">
                  <div className="w-40">
                    <img className="h-full" src={order.imgUrl} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-md">{order.name}</span>
                    <span className="text-gray-500 text-base">with shrimp</span>
                    <span className="text-gray-500 text-base">
                      Option:<span>-</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-3/5">
                  <h1>{order.qty}</h1>
                </div>
                <span className="text-center w-1/5 font-semibold text-lg">
                  ฿{order.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-lg">
                  ฿{order.price * order.qty}
                </span>
                <button
                  className="bg-rose-500 rounded-md p-2 text-white hover:text-rose-500 hover:bg-white border-2 border-rose-500"
                  onClick={() => {}}
                >
                  {' '}
                  remove
                </button>
              </div>
            ))}

            <div
              onClick={() => window.location.replace('/')}
              className="absolute mt-10 bottom-0 underline py-4 hover:drop-shadow-lg flex font-semibold text-green-500 text-lg mt-1 cursor-pointer"
            >
              Continue Ordering
            </div>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {orderList.length}
              </span>
              <span className="font-semibold text-sm"> ฿{totalSum}</span>
            </div>

            <div className="py-1">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <div className="border-2 rounded">
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full focus:outline-none"
                />
              </div>
            </div>
            <button className="rounded-full mt-2 bg-rose-500 hover:bg-rose-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalSum}</span>
              </div>
              <button className="bg-green-500 font-semibold rounded font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
