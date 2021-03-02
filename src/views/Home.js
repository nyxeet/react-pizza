import React from 'react';
import Categories from '../components/Categories/Categories';

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
    </div>
  );
}

export default Home;
