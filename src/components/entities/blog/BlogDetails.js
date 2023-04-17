import React, { useState, useEffect } from "react";
// import Img from "../../../assets/people/ovi.jpeg";
import BlogDetailsDescription from "./BlogDetailsDescription";
import BlogDetailsAuthor from "./BlogDetailsAuthor";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const [posts, setPosts] = useState(null);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    // getData();

    if (posts === null) {
      fetch("../data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson[id - 1]);
          setPosts(myJson[id - 1]);
        });
    }
  }, [posts , setPosts]);

  return (
    <div>
      <div className="md:grid grid-cols-12 md:gap-10 md:mx-auto max-w-7xl  2xl:max-w-hs bgImg">
        <div className="md:col-span-8 bg-white md:ml-20 md:my-10 rounded-sm">
          {posts && <BlogDetailsDescription posts={posts} id={id} />}
          {/* {posts.title} */}
        </div>
        <div className="col-span-4 mt-10 mx-auto">
          {
            posts && <BlogDetailsAuthor posts={posts} id={id}/>
          }
        </div>
      </div>
    </div>
  );
}
