import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddProducts from "./components/addproducts/AddProducts";
import CardBody from "./components/cards/CardBody";
import Button from "./components/button/Button";
import Signup from "./components/button/Signup";
import Login from "./components/button/Login";
import { auth } from './components/firebase/firebase';
import "./App.css";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);

  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

  return (
    <Router>
      <div>
        <div className="body__container">
          <div className="nav">
            <Header />
            <div className="nav-right">
            
              <Search
                products={items}
                value={searchValue}
                onChangeData={changingSrarchData}
              />
              <Button num={addedItems.length} click={setShowAddProducts} />
            </div>
          </div>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>

          {showAddProducts && (
            <AddProducts
              click={setShowAddProducts}
              items={addedItems}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
            />
          )}
          <CardBody
            products={itmesFilter}
            addItem={addItem}
            removeItem={removeItem}
            addedItems={addedItems}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
