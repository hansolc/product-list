import { getUser } from '@/actions/user'
import { USER_NOT_LOGGED_IN } from '@/constant/auth'
import { printErrorConsole } from '@/lib/utils/error'
import { userState } from '@/recoil/userAtom'
import { useRecoilState } from 'recoil'

const useFetchUser = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState)

  const fetchUserInfo = async () => {
    try {
      const response = await getUser()
      if (response.status === 'error') {
        if (response.error === USER_NOT_LOGGED_IN) {
          console.log('user not logged in')
          return
        } else {
          throw new Error(response.error)
        }
      }
      setUserInfo(response.data)
    } catch (error) {
      printErrorConsole(error)
    }
  }

  return {
    userInfo,
    fetchUserInfo,
  }
}

export default useFetchUser
