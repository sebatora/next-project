import Link from 'next/link';
import { Suspense } from 'react';
import React from 'react'
import Posts from '../page';

async function loadPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  return data;
}

async function PostPage( { params } ) {

  const post = await loadPost(params.postId);

  return (
    <div>
      <article>
        <h2>Post: {params.postId}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link href={"/posts"}>
          <button>Volver</button>
        </Link>
      </article>

      <br />
      <hr />

      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default PostPage