import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const paramsValue = searchParams.get('q')
    const baseUrl = paramsValue
      ? `https://dummyjson.com/products/search?q=${paramsValue}`
      : `https://dummyjson.com/products`
    const url = new URL(baseUrl)
    if (searchParams.has('limit')) {
      url.searchParams.append('limit', searchParams.get('limit')!)
    }
    if (searchParams.has('skip')) {
      url.searchParams.append('skip', searchParams.get('skip')!)
    }
    const response = await axios.get(url.toString())
    // throw new Error('')
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ error: 'something wrong!' }, { status: 500 })
  }
}
