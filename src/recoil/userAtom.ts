import { UserInfoResponse } from '@/schema/user'
import { atom } from 'recoil'

export const userState = atom<UserInfoResponse | null>({
  key: 'userState',
  default: null,
})
