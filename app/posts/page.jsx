import PostCard from '@/components/PostCard';
import React from 'react'

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  return data;
}

async function Posts() {

  const posts = await loadPosts()

  return (
    <div>
      <h2>Posts</h2>
      {
        posts.map(post => (
          <PostCard post= {post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts