"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function About() {

  const router = useRouter()

  return (
    <section>
      <h1>About</h1>

      <p>scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
      ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida
      rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus
      rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl
      vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed</p>

    <button className='bg-sky-400 px-3 py-2 rounded-md' onClick={() => 
      {alert("Executing code")
      router.push("/")
      }}>
      Click
    </button>

    </section>
  )
}

export default About