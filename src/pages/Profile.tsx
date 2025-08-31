import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputField from "../components/InputField";

const Profile = () => {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [email, setEmail] = useState("john@example.com");
  const [cell, setCell] = useState("0123456789");

  const handleUpdate = () => {
    console.log({ name, surname, email, cell });
  };

  return (
    <div className="app-container">
      <Header />
      <main className="centered">
        <div className="form-card">
          <h1 className="form-title">Profile</h1>
          <InputField type="text" placeholder="Name" value={name} onChange={setName} />
          <InputField type="text" placeholder="Surname" value={surname} onChange={setSurname} />
          <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
          <InputField type="text" placeholder="Cell Number" value={cell} onChange={setCell} />
          <button onClick={handleUpdate} className="btn primary-btn">
            Update Profile
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
