import React from "react";
import { DeleteAllUser } from "./components/DeleteAllUser";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <UserDetails />
      <DeleteAllUser/>
    </>
  );
};

export default App;
