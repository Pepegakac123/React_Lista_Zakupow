import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import Groceries from "./Groceries";

const App = () => {
  const [itemList, setItemList] = useState(() => {
    const savedItemList = localStorage.getItem("groceries");
    return savedItemList ? JSON.parse(savedItemList) : [];
  });

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <div className="section-center">
      <Form itemList={itemList} setItemList={setItemList} />
      <Groceries itemList={itemList} setItemList={setItemList} />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
