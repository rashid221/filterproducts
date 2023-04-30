import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/actions/productsAction';
import Products from './Products';

function App() {
  const dispatch = useDispatch();
useEffect(()=>{
getdata();
},[])

  const getdata = async ()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
  dispatch(setProducts(data));
  }
  return (
    <div>
     <Products/>
    </div>
  );
}

export default App;
