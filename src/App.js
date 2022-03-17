import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import { fetchApiDataAction } from "./store/action/fetchApiAction";


function App() {
  const dispatch = useDispatch();// for saving data in redux store.
  let [id, SetId] = useState(0);

  useEffect(async () => {
    let productData = [];
    dispatch({
      type: "SAVE_API_DATA",
      payload: { myProducts: productData, flag: true }
    });
    
    await fetch(id ? `https://fakestoreapi.com/products/${id}` : "https://fakestoreapi.com/products").then(res => res.json()).then(data => {
      if (id) {
        productData.push(data);
      }
      else
        productData = data;
    });
    dispatch({
      type: "SAVE_API_DATA",
      payload: { myProducts: productData, flag: false }
    });
  }, [id]);

  return (
    <div className="container">
      <input className="m-1 mt-2" type="number" placeholder="Search by id: 1 - 20" onChange={e => SetId(e.target.value)} />
      <Dashboard />
    </div >
  );
}

export default App;
