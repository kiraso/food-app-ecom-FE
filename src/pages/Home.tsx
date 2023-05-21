import React, { useEffect } from 'react';
import Landing from './Landing';
import ListContainer from './ListContainer';
import Categories from '../components/categories/Categories';
import Compose from '../components/compose';
import { AppProvider } from '../context/AppContext';

function Home() {
  return (
    <Compose components={[AppProvider]}>
      <Landing />
      <hr className="mt-10 fill-green-500" />
      <Categories />
      <ListContainer />
    </Compose>
  );
}

export default Home;
