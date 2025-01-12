export const isUsernameValid = (username: string) => {
  if (!username) return true
  else return /^[a-z\d]{4,8}$/.test(username)
}

export const isPasswordValid = (password: string) => {
  if (!password) return true
  else return /^[a-zA-Z\d]{8,20}$/.test(password)
}
