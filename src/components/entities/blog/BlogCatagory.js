import React from 'react'

export default function BlogCatagory({posts}) {
  return (
    <div className='mt-10 mx-auto'>
      <h1>Blog All Categories</h1>
      {
        posts.map((post)=> (
         <div className='my-2' >
              <span className='border rounded-full py-1 px-4' key={post.id}>{post.category.title}</span>
          </div>
        ))
      }
    </div>
  )
}
