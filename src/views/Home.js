import React from 'react';
import Categories from '../components/Categories/Categories';
import PizzasList from '../components/PizzasList/PizzasList';

function Home() {
  return (
    <div>
      <Categories
        items={[
          'Все',
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые',
        ]}
      />
      <PizzasList />
    </div>
  );
}

export default Home;
