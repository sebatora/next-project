import { NextResponse } from "next/server"

export async function GET(req, {params}) {
  const {searchParams} = new URL(req.url)
  console.log(searchParams);

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const data = await response.json()
  return NextResponse.json(data)
}