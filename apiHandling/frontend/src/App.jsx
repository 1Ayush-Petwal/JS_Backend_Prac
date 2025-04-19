import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  // const [products, error, loading] = customReactQuery('');

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController() //Step 1, AbortController cancels the previous request if a new request is made
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        //Step 2
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal //Does the cancellation of req but then sends an error response
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        //Step 3, handling the error from the Axios controller
        if(axios.isCancel(error)){
          console.log('Request cancelled', error.message);
          return; // Do not set error in such a case
        }
        setError(true);     
        setLoading(false); 
      }
    })()

    //Step 4, cleanup function to abort the controller after its job is done
    return  () => {
      controller.abort();
    }
  },[search])
  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>Api Handling</h1>
      <input type="text" placeholder="Search Products" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}/> 

      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      <h2>Number of Products: {products.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = (urlPath) => {
  
//   return [products, error, loading];
// }