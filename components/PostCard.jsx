"use client"
import React from 'react'

function PostCard( { post } ) {
  return (
    <article>
      <h3>{post.id}. {post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => alert("click")}>Cerrar</button>
    </article>
  )
}

export default PostCard