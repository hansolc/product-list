import { z } from 'zod'

export const userInfoSchema = z.object({
  username: z.string(),
})

export type UserInfoResponse = z.infer<typeof userInfoSchema>
