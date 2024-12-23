import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const paramsValue = searchParams.get('q')
    const baseUrl = paramsValue
      ? `https://dummyjson.com/products/search?q=${paramsValue}`
      : `https://dummyjson.com/products`
    const response = await axios.get(baseUrl)
    // throw new Error('')
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ error: 'something wrong!' }, { status: 500 })
  }
}
