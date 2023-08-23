import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Not Found</p>
      <Link href="/">Volver</Link>
    </section>
  )
}

export default NotFound