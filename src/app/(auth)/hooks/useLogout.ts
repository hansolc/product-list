import { printErrorConsole } from '@/lib/utils/error'
import { userState } from '@/recoil/userAtom'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const useLogout = () => {
  const router = useRouter()
  const setUserState = useSetRecoilState(userState)
  const logout = async () => {
    try {
      const res = await axios.get('/api/users/logout')
      setUserState(null)
      router.push('/')
    } catch (error) {
      printErrorConsole(error)
    }
  }

  return { logout }
}

export default useLogout
