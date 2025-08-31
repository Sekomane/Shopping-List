import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cell, setCell] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to register
    console.log({ name, surname, email, password, cell });
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <InputField type="text" placeholder="Name" value={name} onChange={setName} />
        <InputField type="text" placeholder="Surname" value={surname} onChange={setSurname} />
        <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
        <InputField type="password" placeholder="Password" value={password} onChange={setPassword} />
        <InputField type="text" placeholder="Cell Number" value={cell} onChange={setCell} />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
