import React from 'react';
import defaultImage from '../../images/defaultIMage.png';
import { useNavigate } from 'react-router-dom';
interface CardListProps {
  productName: String;
  productPrice: number;
  productImage: any;
  productDetail: String;
}

const CardList: React.FC<CardListProps> = ({
  productName,
  productPrice,
  productImage,
  productDetail,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() =>
          navigate(`/menu/${productName}`, {
            state: { productName: productName },
          })
        }
        className="w-72 bg-white shadow-md rounded-xl duration-500 cursor-pointer"
      >
        <img
          src={productImage || defaultImage}
          alt="MenuList"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Menu</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {productName}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $ {productPrice}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
