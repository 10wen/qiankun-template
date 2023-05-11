import { Link, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainLayout"
import Home from "../pages/home";
import About from "../pages/about";



const Loading = () => (
  <>
    <div>loading ...</div>
  </>
);

const RouterTable = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      </Routes>
  );
};

export default RouterTable;
