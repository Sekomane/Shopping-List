import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import { RootState } from "../redux/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center items-center flex-1">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
          <InputField type="text" placeholder="Name" value={user.name} onChange={() => {}} />
          <InputField type="text" placeholder="Surname" value={user.surname} onChange={() => {}} />
          <InputField type="email" placeholder="Email" value={user.email} onChange={() => {}} />
          <InputField type="text" placeholder="Cell Number" value={user.cell} onChange={() => {}} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
