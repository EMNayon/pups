import React from "react";
// import Img from "../../../assets/people/ovi.jpeg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function BlogDetailsDescription({ posts, id }) {
  console.log(posts);

  return (
    <div>
      {/* {posts.map((post) => ( */}
      <div className="grid grid-col-12 md:gap-6 md:m-10 p-2 md:p-0" key={id}>
        <div className="flex justify-between md:px-4">
          <div className="col-span-8">
            <div className="flex">
              <div>
                <img
                  src={posts.author.imageUrl}
                  alt="author"
                  className="w-12 md:w-16 rounded-full"
                />
              </div>
              <div className="my-auto pl-4">
                <p>{posts.author.name}</p>
                <div className="flex gap-2">
                  <p className="text-sm md:text-md">{posts.date}</p>
                  <p className="text-sm md:text-md">{posts.datetime}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex gap-2 md:gap-5 my-auto">
            <BsFacebook size={30} className="rounded-full" />
            <BsGithub size={30} className="rounded-full" />
            <BsLinkedin size={30} className="rounded-full" />
          </div>
        </div>
        <div className="md:px-4">
          <h1 className="text-lg md:text-2xl font-bold tracking-widest">{posts.title}</h1>
          <h1 className="text-lg pb-6">{posts.subtitle}</h1>
          <img src={posts.imgUrl} alt="imag1e" className="w-92 md:w-full mx-auto" />
          <p className="pt-6 text-slate-600">{posts.description}</p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
