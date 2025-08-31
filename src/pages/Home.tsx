import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingListCard from '../components/ShoppingListCard';

const Home = () => {
  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, name: 'Milk', quantity: 2, category: 'Dairy', notes: '', imageUrl: '' },
    { id: 2, name: 'Bread', quantity: 1, category: 'Bakery', notes: '', imageUrl: '' },
  ]);

  const handleEdit = (id: number) => { console.log('Edit', id); };
  const handleDelete = (id: number) => {
    setShoppingLists(shoppingLists.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shoppingLists.map(list => (
          <ShoppingListCard
            key={list.id}
            {...list}
            onEdit={() => handleEdit(list.id)}
            onDelete={() => handleDelete(list.id)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
