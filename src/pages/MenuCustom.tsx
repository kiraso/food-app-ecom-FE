import defaultImage from '../images/defaultIMage.png';
import ListContainer from './ListContainer';
import * as productService from '.././service/productService';
import { AppContext, AppContextState } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import * as orderService from '.././service/orderService';
import { useContext, useEffect, useState } from 'react';

const MenuCustom = () => {
  const { user } = useContext<AppContextState>(AppContext);
  const [menu, setMenu] = useState<any>([]);
  const [qytItem, setQytItem] = useState<number>(0);

  const [optionalMessage, setOptionalMessage] = useState<string>('');
  const location = useLocation();

  const getCart = async () => {
    try {
      const { data } = await orderService.getOrderList();

      var dataList = [];
      for (let i = 0; i < data.length; i++) {
        dataList.push({
          id: data[i].order_name,
          name: data[i].order_qty,
        });
      }
      console.log(dataList);
    } catch (err) {}
  };
  const getProduct = async () => {
    try {
      setQytItem(0);
      const { data } = await productService.getProductList();
      var dataList = [];
      for (let i = 0; i < data.length; i++) {
        dataList.push({
          id: data[i].prod_id,
          name: data[i].prod_name,
          price: data[i].prod_price || 79,
          imageUrl: data[i].prod_image_url,
          type: data[i].prod_categories_id,
        });
      }
      setMenu(
        dataList.filter((item: any) => item.name === location.state.productName)
      );
    } catch (error) {}
  };
  useEffect(() => {
    getProduct();
  }, [location.pathname]);

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div className="w-full h-full mx-auto items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="w-full h-full p-10 duration-500">
          <div className="flex flex-col-2 ">
            <div className="h-[40%] w-[40%]">
              <img
                src={menu[0]?.imageUrl || defaultImage}
                alt="MenuList"
                className="h-full w-full object-cover rounded-lg "
              />
            </div>
            <div className="p-8 ml-[20px] w-full border-2 border-1 rounded-xl border-green-500">
              <div className="">
                <h1 className="text-[48px] font-extrabold text-green-500">
                  {menu[0]?.name || 'Pad-Thai'} {user}
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] font-extrabold  text-green-500">
                  Description:
                </h1>
                <h2 className="ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus rhoncus iaculis cursus. Sed porta vitae lorem euismod
                  sagittis. Donec porta, nunc quis faucibus egestas, arcu ante
                  aliquet urna, eget tincidunt ex turpis et orci. Donec
                  sollicitudin leo vel magna molestie, id accumsan mauris
                  feugiat. Sed viverra tincidunt aliquet. Fusce a tempus augue,
                  vel ultrices purus. Vestibulum in est vestibulum, sagittis
                  nulla nec, tincidunt mauris. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </h2>
              </div>
              <div className="mt-2">
                <h1 className="text-[20px] font-extrabold text-green-500">
                  Price:
                  <span className="text-[20px] text-gray-500 font-light">
                    <span className="ml-3">฿ {menu[0]?.price}</span>
                  </span>
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="text-[20px] font-extrabold text-green-500">
                  Stock:
                  <span className="text-[18px] text-gray-500 font-light px-2">
                    {'10'} items
                  </span>
                </h1>
              </div>

              <div className="mt-10 flex flex-row">
                <h1 className="text-[20px] font-extrabold text-green-500 mr-3">
                  Add items:
                </h1>
                <button
                  onClick={() => {
                    if (qytItem > 0) {
                      setQytItem(qytItem - 1);
                    } else setQytItem(0);
                  }}
                  className="flex flex-row px-[30px] py-[5px] rounded-xl border border-green-500 hover:bg-rose-500 hover:text-white  duration-500"
                >
                  <p>-</p>
                </button>
                <div className="">
                  <input
                    type="number"
                    className="text-center border justify-center items-center rounded-lg px-1 py-1 border-green-500 focus:outline-none"
                    placeholder="0"
                    value={qytItem}
                  />
                </div>
                <button
                  onClick={() => {
                    if (qytItem !== 10) setQytItem(qytItem + 1);
                  }}
                  className="flex flex-row px-[30px] py-[5px] rounded-xl border border-green-500 hover:bg-green-500 hover:text-white  duration-500"
                >
                  <p>+</p>
                </button>
                {qytItem === 10 && (
                  <div className="px-2 mt-2 text-rose-500">
                    <span>no more items for adding</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-1 right-0">
                <button
                  onClick={() => {
                    try {
                      orderService.insertOrderList({
                        order_name: menu[0].name,
                        order_price: menu[0].price,
                        order_qty: qytItem,
                        order_type: menu[0].type,
                      });
                      window.location.reload();
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  className="flex flex-row px-[30px] py-[5px] rounded-xl  hover:bg-white border-2  border-green-500 bg-green-500 text-white hover:text-green-500  duration-500 text-xl"
                >
                  <p> Add to cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 text-3xl font-bold text-green-500">
        For You <hr />
      </div>
      <ListContainer />
    </div>
  );
};

export default MenuCustom;
