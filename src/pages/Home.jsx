import React from 'react';
import {useEffect, useState} from 'react';
import Product from '../components/Product'
import Spinner from './Spinner.js'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState();
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const output = await fetch(API_URL);
      const data = await output.json();
      setPosts(data);
    }
    catch(err){
      console.log(err)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);


  return (
    <div>
      {
        loading ? (<Spinner/>) : (
          posts.length > 0 ? (
            <div className="grid xs:grid-cols-1 s:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 gap-x-5 min-h-[80vh]">
              {
                posts.map( (post) => (
                  <Product key={post.id} post={post} />
                ))
              }
            </div>  
          ) : (
            <div className="flex flex-center items-center">
              <p>No Data found</p>
            </div>  
          )
        )
      }
    </div>
  )
};
export default Home
