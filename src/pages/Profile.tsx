import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputField from '../components/InputField';

const Profile = () => {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');
  const [email, setEmail] = useState('john@example.com');
  const [cell, setCell] = useState('0123456789');

  const handleUpdate = () => {
    console.log({ name, surname, email, cell });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center items-center flex-1">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
          <InputField type="text" placeholder="Name" value={name} onChange={setName} />
          <InputField type="text" placeholder="Surname" value={surname} onChange={setSurname} />
          <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
          <InputField type="text" placeholder="Cell Number" value={cell} onChange={setCell} />
          <button onClick={handleUpdate} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Update Profile
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
