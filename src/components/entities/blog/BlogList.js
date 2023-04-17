import React from "react";
// import Img from '../../../assets/people/ovi.jpeg'
import { useNavigate } from "react-router-dom";

export default function BlogList({ posts }) {
  const navigate = useNavigate();
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="grid grid-cols-12 md:gap-10 py-2 md:py-10 px-2 md:px-0"
          onClick={() => {
            navigate(`/blog/${post.id}`);
          }}
        >
          <div className="col-span-8 my-auto">
            <div className="flex">
              <img
                src={post.author.imageUrl}
                className="w-8 rounded-full"
                alt="hudai"
              />
              <p className="pl-4 my-auto font-poppins text-sm">
                {post.author.name}
              </p>
            </div>
            <div className="md:pt-6">
              <h1 className="text-md md:text-xl font-bold">{post.title}</h1>
              <h4 className="text-sm md:text-lg text-slate-800">{post.subtitle}</h4>
              <div className="flex gap-2 md:gap-10">
                <p className="text-slate-600 py-1 text-sm md:text-md">{post.date}</p>
                <p className="text-slate-600 py-1 text-sm md:text-md">04:02 PM</p>
                <p className="border py-1 px-4 rounded-full text-sm md:text-md text-slate-600">
                  {post.category.title}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <img src={post.imgUrl} className="w-48 md:w-52 rounded-sm " alt="hudai" />
          </div>
        </div>
      ))}
    </div>
  );
}
