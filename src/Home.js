import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const data = useGlobalContext();
  const { openSideBar, openModal } = data;
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          openSideBar();
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          openModal();
        }}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
