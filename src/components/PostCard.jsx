"use client"
import Link from 'next/link'
import React from 'react'

function PostCard( { post } ) {
  return (
    <article>
      <h3>{post.id}. {post.title}</h3>
      <Link href={`/posts/${post.id}`}>
        <button>VER</button>
      </Link>
    </article>
  )
}

export default PostCard