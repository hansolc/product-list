import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get(`https://dummyjson.com/products`)
    // throw new Error('')
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ error: 'something wrong!' }, { status: 500 })
  }
}
