import { useEffect, useState } from 'react';
import getCategories from '../../data/CategoryList.json';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const [categorieList, setCategorieList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storeList = [];
    for (let i = 0; i < getCategories.categories.length; i++) {
      storeList.push(getCategories.categories[i]);
    }
    setCategorieList(storeList);
  }, []);

  return (
    <>
      <h1 className="px-10 my-3 text-2xl font-bold text-green-400">
        Food Categories
      </h1>
      <div className="px-10 flex flex-wrap justify-items-center justify-center gap-x-5 gap-y-5">
        {categorieList.map((item: any) => {
          return (
            <button
              onClick={() =>
                navigate('/category-list', { state: { id: item.id } })
              }
              key={item.id}
              className="bg-green-300 text-green-700 font-bold p-3 rounded-lg h-[150px] hover:bg-white hover:shadow-md hover:border border-green-500 flex-grow flex-shrink w-full sm:w-1/3 md:w-1/8 lg:w-1/12 hover:text-green-500 "
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
