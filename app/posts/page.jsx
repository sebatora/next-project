import PostCard from '@/components/PostCard';
import React from 'react'
import "./Posts.css"

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return data;
}

async function Posts() {

  const posts = await loadPosts()

  return (
    <div className='postsgrid'>
      {
        posts.map(post => (
          <PostCard post= {post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts