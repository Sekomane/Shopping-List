import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shopping List App</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
