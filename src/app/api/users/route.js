import { NextResponse } from "next/server"

export async function GET() {
  //extract params
  // query database
  //communicate with other services

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const {prueba, prueba2} = await response.json()
  return NextResponse.json(prueba, prueba2)
}

export async function POST(req) {

  const data = await req.json()
  console.log(data);

  return NextResponse.json({
    message: 'Creando datos'
  })
}

export function PUT() {

  return NextResponse.json({
    message: 'Actualizando datos'
  })
}

export function DELETE() {

  return NextResponse.json({
    message: 'Eliminando datos'
  })
}