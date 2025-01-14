import { NextRequest, NextResponse } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '@/models/userModel'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')
    if (!token)
      return NextResponse.json({ error: 'Token is not found' }, { status: 401 })

    const userInfo = jwt.verify(
      token.value,
      process.env.JWT_SECRET || 'default_secret'
    ) as JwtPayload

    const id = userInfo.id

    const user = await User.findById(id)

    const response = NextResponse.json({
      username: user.username,
    })

    return response
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
