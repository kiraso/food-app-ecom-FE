import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useCallback, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Avatar from '../Avata';
import * as orderService from '../../service/orderService';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartList, setCartList] = useState<any>([]);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
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
      setCartList(dataList);
    } catch (err) {}
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Hi {'Annie'}
        </div>
        <div className="hover:bg-green-200/50 p-2 rounded-full">
          <div className=" bg-red-500 w-4 h-4 rounded-full text-center ml-5 ">
            <p className="text-white text-xs font-bold">{cartList.length}</p>
          </div>
          <HiOutlineShoppingCart
            size={30}
            className=" hover:shadow-lg cursor-pointer"
            color="#0BDA51"
            onClick={() => {
              window.location.replace('/order-list');
            }}
          />
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block rounded-full">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer ">
            <>
              <MenuItem
                onClick={() => window.location.replace('/menu')}
                label="profile"
              />
              <MenuItem
                onClick={() => window.location.replace('/login')}
                label="Log In"
              />
              <MenuItem
                onClick={() => window.location.replace('/register')}
                label="Sign Up"
              />
              <MenuItem onClick={() => console.log('logout')} label="Log out" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
