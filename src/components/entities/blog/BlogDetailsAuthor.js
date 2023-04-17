import React from 'react'
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

export default function BlogDetailsAuthor({posts, id}) {
  return (
    <div>
      <div key={id}>
        <img src={posts.author.imageUrl} alt="author" className='w-32 rounded-full'/>
        <h1 className=''>{posts.author.name}</h1>
         <div className=" flex gap-5 my-auto">
          <BsFacebook size={30} className="rounded-full"/>
          <BsGithub size={30} className="rounded-full"/>
          <BsLinkedin size={30} className="rounded-full"/>
        </div>
      </div>
    </div>
  )
}
