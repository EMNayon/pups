import React, {useState, useEffect} from 'react'
import BlogCatagory from './BlogCatagory'
import BlogList from './BlogList'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setPosts(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
       <div className='md:grid grid-cols-12 md:gap-10 max-w-7xl mx-auto 2xl:max-w-hs md:px-20 bgImg'>
            <div className='col-span-12 md:col-span-8 '>
                <BlogList posts = {posts}/>
            </div>
            <div className='hidden md:block md:col-span-4'>
                <BlogCatagory posts= {posts}/>
            </div>
       </div>
    </div>
  )
}
